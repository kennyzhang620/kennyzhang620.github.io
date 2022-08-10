import requests
import smtplib, ssl
import sys
import time

from datetime import datetime
from decimal import *

headers_Get = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'DNT': '1',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
    }

def messageUB(name):
    message = """\
Subject: [Stock-Checker] Your Equities are ready to be sold!

Dear """ +  name + """,

Your equities have risen above your set point. Login to your trading app to withdraw the equities back into your bank account.

Cheers,

Stock-Checker Bot

##This bot is written by KTZHANG#
        
"""

    return message

def messageLB(name):
    message = """\
Subject: [Stock-Checker] Your Equities may be at risk of liquidation.

Dear """ +  name + """,

Your equities have fallen below your set point. Depending on how you feel about the possibility of losing most or all of your investment, you may wish to login to your trading app to withdraw the equities back into your bank account.
    However, if it not significant, you may wish to push forward for greater gains. Remember, high risk == high rewards, but more likely to lose all.

    Best wishes,

    Stock-Checker Bot

    ##This bot is written by KTZHANG#
    
    """

    return message


def messageError(err):
    message = """\
Subject: Server Error

Your server has encountered an error. Please take a look as soon as possible.

""" + str(err) + """

Stock-Checker Bot

##This bot is written by KTZHANG#

"""

    return message

def messageStatus(status):
    message = """\
Subject: Server Status

Here is the status of your server.

""" + str(status) + """

Stock-Checker Bot

##This bot is written by KTZHANG#

"""

    return message


def downloadData(query):

    # sending get request and saving the response as response object

    s = requests.Session()
    query = '+'.join(query.split())
    url = 'https://ca.finance.yahoo.com/quote/' + query + '?p=' + query 
    r = s.get(url, headers=headers_Get)
    
    return r.text

def scanStr(text):
    tokenizedStr = []
    currWrd = ""
    for char in text:

        if (char != '<' and char != '>'):

            currWrd += char
        else:
            tokenizedStr.append(currWrd)
            currWrd = ""

    tokenizedStr.append(currWrd)

    return tokenizedStr

def findInd(path, tokenizedS):
    for i in range(len(tokenizedS)):
        #print(path, tokenizedS[i])
        if path in tokenizedS[i]:
            return i;

def strToFloatStr(strF):
    value = ""
    for char in strF:    
        if (char.isnumeric() or char == '.' or char == '-'):
            value += char
        elif (char != ','):
            return value;

    return value;

def ExtractEquityData(splice):
    equPacket = []
    value = None
    for iStr in splice:
        try:
            value = float(strToFloatStr(iStr))
        except:
            value = None

        if (value != None):
            equPacket.append(value)
            
    return equPacket


def sendNotifyEmail(receiver_email, message):
    port = 587  # For starttls
    smtp_server = "smtp-mail.outlook.com"
    sender_email = params[0]
    password = params[1]

    if (params[2] == True):
        context = ssl.create_default_context()
        with smtplib.SMTP(smtp_server, port) as server:
            server.ehlo()  # Can be omitted
            server.starttls(context=context)
            server.ehlo()  # Can be omitted
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message)



def getEquityData(equity):

    res = downloadData(equity);
    tokenized = scanStr(res);

    ind = findInd('Fw(b) Fz(36px) Mb(-4px) D(ib)', tokenized)

    if (ind != None):
        #print(tokenized[ind:ind+11])
        #print(ExtractEquityData(tokenized[ind:ind+11]))
        return [equity] + ExtractEquityData(tokenized[ind:ind+11])

    try:
        f = open(extPath + "test.html", "w")
        f.write(res)
        f.close()
    except:
        print("Error with query")

equities = []
Stats_Plot = []

#sendNotifyEmail("kennyz620@hotmail.com", "Kenny");

def init():
    equities.clear()
    print("======================Server Configuration==========================")
    name = input("What's your name: ")

    print("==========Equity Tracker============")
    print("Enter CHECKER_STOP to finish adding equities")

    inp = input("Equity name: ")

    while (inp != "CHECKER_STOP"):
        eq = getEquityData(inp);

        if (eq != None):
            print(eq)
            cost = None
            amount = input("Amount invested: ")

            change = input("Is this based on an existing investment <Y/N>: ")

            if (change.upper() == 'Y'):
                newV = input("Enter the cost of the investments at that timeframe: ")
                try:
                    newV = float(newV)
                except:
                    newV = None
                    print("An error occurred processing your input. Make sure that it is a decimal number.")
                    print("Your investment bounds will be based on current market values instead.")

                if (newV != None):
                    cost = newV
               
                    
            try:
                amount = float(strToFloatStr(amount))
            except:
                amount = -1

            if (cost == None):
                cost = eq[1]*amount

            if (amount >= 0):
                item = [eq, amount, cost]
                equities.append(item)
                print(item)
                
        eq = None
        inp = input("Equity name: ")
            

    totalInv = 0
    for items in equities:
        totalInv += items[2]

        
    print("Equities", equities)
    print("Total Invested ($): ", totalInv)
       
    print("Set lower and upper notification bounds")
    percent = input("Enter a percentage between 1-3000% for upper and lower bounds (Default is 50%): ")

    if (not percent.isnumeric()):
        percent = 50;
        print("No number or invalid provided. Using default value of 50%")
    else:
        percent = int(percent)

    upperB = totalInv *(1 + (percent/100.0))
    lowerB = totalInv *(1/((1 + (percent/100.0))))

    print("Upper:", upperB, "Lower:", lowerB)

    sleepTime = input("Enter the interval that the server will sleep for before checking (Default 10000 seconds): ")

    if (sleepTime.isnumeric()):
        sleepTime = int(sleepTime)
    else:
        sleepTime = 10000
        
    saveData = "name = " + "'" + name + "'" + "\ntotalCost = " + str(totalInv) + "\nequities = " + str(equities) + '\n' + "upperB = " + str(upperB) + '\n' + "lowerB = " + str(lowerB) + "\nsleepTime = " + str(sleepTime)

    err = False
    
    try:
        f = open(extPath + "settings.txt", "w")
        f.write(saveData)
        f.close()
    except:
        print("Error saving.")
        err = True

    try:
        f = open(extPath + "log.txt", "w")
        f.close()
    except:
        print("Failed to log event")
        err = True

    if (err == False):
        print("Server configuration complete! Settings saved in settings.txt")


def run_server():
    flags = [False, False]
    print("======Starting Server...======")

    test = getEquityData("INTC")

    if (test != None):
        print("Server started.")
        sendNotifyEmail("kennyz620@hotmail.com", messageStatus("Server on."));
    else:
        print("Querying issue detected. Check network connection. Otherwise update the script.")
        exit();
        
    while(True):
        totalInv = 0
        originalInv = 0
        for eq in equities:
            update = getEquityData(eq[0][0])

            if (update != None):
                print("Investment ==>", update,"Current value:", update[1]*eq[1], "Gain/Loss:", update[1]*eq[1] - eq[2], str((update[1]*eq[1]/eq[2] - 1)*100) + '%')
                totalInv += update[1]*eq[1]
                originalInv += eq[2]

                try:
                    f = open(extPath + "log.txt", "a")
                    f.write(datetime.today().strftime('%Y-%m-%d %H:%M:%S') + " " + str(update) + ' => ' + str(update[1]*eq[1]) + ' G/L: ' + str((update[1]*eq[1]/eq[2] - 1)*100) + '%' + '\n')
                    f.close()
                except:
                    print("Failed to log event")
                    sendNotifyEmail("kennyz620@hotmail.com", messageError("Unable to log event"))
            else:
                print("Unable to query equity")
                sendNotifyEmail("kennyz620@hotmail.com", messageError("Query failed."))

        if (totalInv < lowerB):
            print("Warning! Investment value below minimum!")
            if (flags[0] == False):
                sendNotifyEmail("kennyz620@hotmail.com", messageLB(name));
                flags[0] = True
            elif (totalInv > upperB):
                print("Yatta! Investment value rose above set maximum!")
                if (flags[1] == False):
                    sendNotifyEmail("kennyz620@hotmail.com", messageUB(name));
                    flags[1] = True
                else:
                    flags[0] = False
                    flags[1] = False
                
        print("Current market value of investments:", totalInv, "Lower bounds:", lowerB, "Upper bounds:", upperB, "G/L:" , str((totalInv/originalInv - 1)*100)+'%')
        Stats_Plot.append((len(Stats_Plot), totalInv));
        try:
            f = open(extPath + "log.txt", "a")
            f.write(datetime.today().strftime('%Y-%m-%d %H:%M:%S') + " " + "TOTAL VALUE: " + ' => ' + str(totalInv) + ' G/L: ' + str((totalInv/originalInv - 1)*100)+'%' + '\n')
            f.close()
        except:
            print("Failed to log event")
            sendNotifyEmail("kennyz620@hotmail.com", messageError("Unable to log event"))

        try:
            f = open(extPath + "stats.txt", "w")
            f.write("Stats_Plot = " + str(Stats_Plot));
            f.close()
        except:
            print("Failed to plot event")

        time.sleep(sleepTime)
        
def main():
    if (len(sys.argv) == 2):
        if (sys.argv[1] == '-async'):
            run_server()

    elif (len(sys.argv) == 3 and sys.argv[2] == '-async'):
        run_server()
            
    else:
        print("========Main Menu=========")
        print("1) Start server (use -async from command line to start this mode automatically)")
        print("2) Reconfigure server")
        print("3) Exit server")

        choice = input("Your option: ")
        if (choice == '1'):
            run_server()
        elif (choice == '2'):
            init()
        else:
            exit()

fail = False
extPath = ""

if (len(sys.argv) == 2):
    if (sys.argv[1] != '-async'):
       extPath = sys.argv[1]
            
if (len(sys.argv) == 3):
    extPath = sys.argv[1]

try:
    f = open(extPath + "settings.txt", "r")
    exec(f.read())
    f.close()
except:
    fail = True
    print("No server config found or invalid config. Creating new configuration.")
    init()

try:
    f = open(extPath + "stats.txt", "r")
    exec(f.read())
    f.close()
except:
    try:
        f = open(extPath + "stats.txt", "w")
        f.close()
    except:
        print("Unable to open stats file. Plotting is disabled.");


if (not fail):
    main()
