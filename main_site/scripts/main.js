// For those brave enough to touch Javascript, here is a skill testing question:
// How do linked lists work?

// As with CSS and HTML, touch only your own section to avoid merge conflicts.


// Script Section 1





// End of Section


// Script Section 2

const def_nav = document.getElementById('def_nav')
const mobile_nav = document.getElementById('mobile_navigator')
const mobi_s = document.getElementById('nav_menu')
const mobi_btn = document.getElementById('mobile_btn')
const mobi_img = document.getElementById('img_button_nav_m')
const proj_ol = document.getElementById("project_overlay")
var btnState = true;

mobile_nav.addEventListener("animationend", () => {
    if (btnState && mobi_s.style.animationDirection == "reverse") {
        mobile_nav.style.height = "0%";
        mobi_s.style.animationPlayState = "paused"
        mobi_s.style.animationDirection = "normal"
    }

});

const projN = document.getElementById("proj");
const flairsN = document.getElementsByClassName("flairs");
const imagesN = document.getElementsByClassName("image_gallery");
const descripN = document.getElementById("description")
const collabsN = document.getElementsByClassName("collabs")
const btn = document.getElementById("btn_gen")
const animateProjects = document.getElementById("header_p")
const animateProjects2 = document.getElementById("skillshuffle")
var selectedJob = 'work'

var animI = 0;
function animateP() {
    const displayStr = "My Projects"
    
    if (animI < displayStr.length) {
        animateProjects.innerHTML = animateProjects.innerHTML.slice(0, animateProjects.innerHTML.length - 1);
    animateProjects.innerHTML += displayStr[animI++] + '_'
    }
    else {
        animI = 0;
        animateProjects.innerHTML = '/>'
    }
}

// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

var state = -1;
var skill = ""
var ind = 0;
function animateP2() {
    const displayStr = makeid(10);
    const skills = ['HTML', 'CSS', 'Javascript', 'Node.js' , 'Data Structures', 'C/C++', 'MATLAB', 'Python', 'Pandas', 'scikitlearn', 'SQL', 'PostgresSQL', 'MySQL', 'Computer Graphics']
    
    if (skill == "")
        skill = skills[ind++];
    
    if (ind >= skills.length)
        ind = 0;
    
    if (state++ > 15) {
        animateProjects2.innerHTML = skill;
        if (state > 100) {
            state = 0;
            skill = skills[ind++];
        }
    }
    else {
        animateProjects2.innerHTML = displayStr;
    }
}


setInterval(animateP, 200);
setInterval(animateP2, 50);
function createflair(type, colour) {
    const flairHTML = `
                    <button class="button button_nav" style="background-color: ${colour}">
                        <div style="float:right">${type}</div>
                    </button>
`
    return flairHTML;
}

function createImage(title, url) {
    const flairHTML = `
                                        <img src="${url}" alt="${title}">
`
    return flairHTML;
}

function createCollabs(title) {
    const flairHTML = `
                                          <div id="collab">${title}</div>
`
    return flairHTML;
}

function appendElement(classL, htmlL) {
    var newNode = document.createRange().createContextualFragment(htmlL);
    classL.appendChild(newNode);
}

function clearElements(classL) {
    while (classL.firstChild) {
        classL.removeChild(classL.firstChild);
    }

}

function generateBtn(url) {
    const htmlL = `<a href="${url}">
                <div id='btn' style="text-align:center;">
                        Go to Project!
                </div>
                </a>`
    
    return htmlL;
}
function loadInfoPanel(projectname, flairs, images, body, collabs, url) {
    projN.innerHTML = projectname;
    const inner = flairsN[0];
    const inner2 = imagesN[0];
    const inner3 = collabsN[0]
    
    clearElements(inner);
    clearElements(inner2);
    clearElements(inner3);
        for (var i=0;i<flairs.length;i++) {
            appendElement(inner, createflair(flairs[i].type, flairs[i].colour))
        }
    for (var i=0;i<images.length;i++) {
        appendElement(inner2, createImage(images[i].title, images[i].url))
    }
    descripN.innerHTML = body;
    for (var i=0;i<collabs.length;i++) {
        appendElement(inner3, createCollabs(collabs[i]))
    }
    btn.innerHTML = generateBtn(url)
}

function createCellProj(proj, dataset, ind) {
    const HTMLL = `
                    <div class="cell_outer">
                        <div class="cell_inner" style="width: 100%;">
                    <img src="${proj.img_url}" style="max-height: 100%;"alt="${proj.name}" onclick="set_load(${dataset}[${ind}])">
                        </div>
                    <h2 style="text-align:center;">${proj.name}</h2>
                    </div>`
    
    return HTMLL;
}

function createCellJob(job) {
    const HTMLL =  `
                    <div class="cell_outer_1">
                        <div class="cell_outer_2">
                            <div class="subdivide_1">
                                <div class="cell_inner">
                        <img src="${job.image_url}" alt="${job.location}">
                                </div>
                            <h4 text-align:center;">${job.location}</h4>
                            </div>
                        <div class="proj_cell" text-align:center;">
                            <h4 id="role">${job.title}</h4>
                        <div id="resp" style="text-align:left;">${job.description}</div>
                        </div>
                        </div>
                    </div>
`
    
    return HTMLL;
}
function createJobNN(job) {
    const HTMLL = `
                    <div class="cell_outer">
                        <div class="cell_inner">
                    <img src="${job.image_url}" alt="${job.location}">
                        </div>
                    </div>`
    
    return HTMLL;
}

const project_list = document.getElementsByClassName("project_list")
const experience_list = document.getElementsByClassName("experience_list")
const exp_list = document.getElementsByClassName("exp_list")
const selectors = document.getElementsByClassName("item")

function load_projects(proj, db) {
    const listM = project_list[0]
    clearElements(listM)
    for (var i=0;i<proj.length;i++) {
        appendElement(listM, createCellProj(proj[i], db, i))
    }
}

function load_jobs(jobs, db) {
    const listM = experience_list[0]
    const listM2 = exp_list[0]
    var imgbucket = []
    clearElements(listM)
    clearElements(listM2)
    
    console.log(jobs)
    for (var i=0;i<jobs.length;i++) {
        appendElement(listM, createCellJob(jobs[i]))
    }
    
    for (var i=0;i<jobs.length;i++) {
        if (!imgbucket.includes(jobs[i].image_url)) {
            appendElement(listM2, createJobNN(jobs[i]))
            imgbucket.push(jobs[i].image_url)
        }
    }
}

function togglerSelector(ind, def, alt) {
    console.log(selectors[0].style.fontWeight)
    for (var i=0;i<selectors.length;i++) {
        if (ind == i) {
            selectors[i].style.fontWeight = alt;
        }
        else {
            selectors[i].style.fontWeight = def;
        }
    }
}
function load_job_type(type) {
    if (type == 'work') {
        selectedJob = type
        load_jobs(jobdata);
        togglerSelector(0, 300, 900);
    
    }
    
    if (type == 'volunteer') {
        selectedJob = type
        load_jobs(volunteerdata);
        togglerSelector(1, 300, 900);
    }
    
    if (type == 'awards') {
        selectedJob = type
        load_jobs(volunteerdata);
        togglerSelector(2, 300, 900);
    }
}

function set_load(proj) {
    loadInfoPanel(proj.name, proj.flairs, proj.images, proj.body, proj.collabs, proj.url);
    loadOverlay();
}

function loadOverlay() {
        proj_ol.style.display = "block";
        mobile_nav.style.display= "none";
        def_nav.style.display="none"
}

function closeOverlay() {
    proj_ol.style.display = "none";
    switchModesAuto(window.innerWidth, window.innerHeight);
}

function switchModesAuto(w, h) {
	console.log(w, h, w/h)
    if (proj_ol.style.display == 'none') {
	if (w < 1086) { // 16px = 1 rem
		mobile_nav.style.display = "block";
		def_nav.style.display="none";
	}
	else {
		mobile_nav.style.display= "none";
		def_nav.style.display="block"
	}
    }
}

function switchModesTicket(w, h) {
    console.log(w, h, w / h)

    if (w < 16*60) {
        window.location.href="ticket_seatmap_18.html"
    }
    else {
        window.location.href = "ticket_section_18.html"
    }
}


function switchState() {
	if (btnState) {
		mobi_img.src = "icons/exit_ham.svg"
		mobi_s.style.animationDirection = "normal";
		mobi_s.style.animationName="open";
		mobi_s.style.width = "100%";
		mobi_s.style.animationPlayState = "running"
		mobi_s.style.display = "none"
		mobile_nav.style.height = "100%";
		setTimeout(function() {		mobi_s.style.display= "block"
		btnState = false}, 1);
	}
	else {
		mobi_img.src = "icons/mobile_ham.svg"
		mobi_s.style.animationDirection = "reverse";
		mobi_s.style.animationName="open";
		mobi_s.style.width = "0%";
		mobi_s.style.animationPlayState = "running"
		mobi_s.style.display = "none"
		
		setTimeout(function() {		mobi_s.style.display= "block"
            btnState = true
        }, 1);
		
	}
}
mobi_btn.addEventListener('onclick', function() {
	if (btnState) {
		console.log(mobi_s.style)
		mobi_s.style.animationDirection = "normal";
		mobi_s.style.width = "100%";
	}
	else {
		console.log(mobi_s.style)
		mobi_s.style.animationDirection = "reverse";
		mobi_s.style.width = "0%";
	}
})

window.addEventListener('resize', switchModesAuto(window.innerWidth, window.innerHeight), false);

// End of Section



// Script Section 3






// End of Section


// Script Section 4
// End of Section


// Script Section 5

// End of Section

// Script Section 6



//End of Section

load_projects(projects, 'projects')
load_jobs(jobdata, 'jobdata')
