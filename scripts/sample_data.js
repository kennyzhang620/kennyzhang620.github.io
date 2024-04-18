
const project = [
    {
        "name": "The Last Custodian", 
        "flairs": [{ "type": "C#", "colour": "green" }, { "type": "Unity", "colour": "black" }, { "type": "WINNER!", "colour": "gold" }, { "type": "IAT 410", "colour": "blue" }], 
        "images": [{ 'title': 'RootHacks', 'url': 'images/LTC_images/image5.png' }, { 'title': 'RootHacks', 'url': 'images/LTC_images/image7.png' }, { 'title': 'RootHacks', 'url': 'images/LTC_images/image1.png' }, { 'title': 'RootHacks', 'url': 'images/LTC_images/image2.png' }, { 'title': 'RootHacks', 'url': 'images/LTC_images/image3.png' }, { 'title': 'RootHacks', 'url': 'images/LTC_images/image8.png' }],
        "videos": [{'title': "Trailer", "url": "https://www.youtube.com/embed/MAN8EQuFRUo", "embed": true}],
        "short-body": "A Horror game inspired by Hollow Knight. You play as a janitor seeking to uncover his identity in the rotten area you wake up in.",
        "body": `
        <h3>Preface</h3>
        On the surface, The Last Custodian is a 2D puzzle platformer with horror elements about an elderly janitor who wakes up seemingly as the last human standing who's determined to do his job: clean, in a post-apocalyptic town ravaged by the black sludgey tendrils of The Disease. 
        As he slowly works his way through cleaning what he can with what tools he has, the true nature of the world is revealed: The Disease and its tendrils are manifestations of Charlie's real-world battle with dementia. 
        The game's world, level design, and puzzles are all informed and inspired by symptoms from each of the worsening stages of dementia as the player progresses. 
        <img src="images/LTC_images/image9_a.png" style="max-height: 100%;"/>
        <h3>The Disease</h3>
        A terrifying eldritch void monster that is the source of the apocalypse that ravaged the town. 
        Grey mannequins that are actually his loved ones that he just doesn't recognize anymore: they try to get to you and hug you, drain sanity if they do
        Enemies with lantern (immpatient/rude relatives): Provides light source, but still damage player. Putting a twist on enemies, making the player not just running away from enemies all the time
        <h3>Features</h3>
        It features two distinct but related styles of gameplay. There are platforming stages where players have to navigate the environment, evade enemies and survive to the next waypoint.
        Next, there are the puzzle based level, inspired by games such as the Riddle School series of Flash games.
        <img src="images/LTC_images/image16.png" style="max-height: 100%;"/>
        These two stages allow for different gameplay combinations and help push the story forward in new and innovative ways. They showcase the Janitor's cleaning abilities in a tight spot, in addition to his athletism.
        `, "collabs": ["Trisha Wong", "Long Nyugen"], "img_url": 'icons/LTC_icon.svg', "url": "https://drive.google.com/file/d/1cYHIrx8eAmRDq6U_Ed6lUkENEYbXy1ZT/view"},

        {
            "name": "VOLTCRAFTERS", 
            "flairs": [{ "type": "C#", "colour": "green" }, { "type": "Unity", "colour": "black" }, { "type": "CDM-Approved", "colour": "gold" }, { "type": "CDM-MDM18", "colour": "blue" }], 
            "images": [{ 'title': 'RootHacks', 'url': 'images/VTC_im1.png' }, { 'title': 'RootHacks', 'url': 'images/VTC_im2.png' }, { 'title': 'RootHacks', 'url': 'images/VTC_im3.png' }, { 'title': 'RootHacks', 'url': 'images/VTC_im4.png' }, { 'title': 'RootHacks', 'url': 'images/VTC_im5.png' }, {'title': 'rt', 'url': 'images/VTC_im6.png'}],
            "videos": [{'title': "Trailer", "url": "https://www.youtube.com/embed/Yrof8wdyGCA", "embed": true}],
            "short-body": "A VR electric car battery simulation designed to prepare upcoming students on the proper procedures of replacing electric vehicle battery in a safe and effective manner.",
            "body": `
            <h3>Project Overview</h3> 

In this project, our team of six people with two developers, one UX specialist, one environment designer, one 3D modeller and a project manager undertook a mission to develop an immersive virtual reality experience to train upcoming mechanics to replace a battery electric vehicle main battery. Our client was for the Vancouver Community College’s automotive training program, and we wanted to best replicate a realistic Ev battery simulation that complies with their standards for properly and in an engaging way, train students to perform the task and practice in a safe controlled environment before allowing them to perform the task in a real setting.
            <h3>Contribution</h3>
            The hoist with functional buttons and multimeter with functional dials and voltage capture. The hoist behaves exactly as the one shown by our client at VCC. The big button lifts the load, a small lever near the hydraulic tank lowers the hoist and a safety interlock mechanically latches the vehicle based on preset spots on the lift, locking it securely in the event of hydraulics failure. I also worked on the Multimeter, implementing the process of connecting and disconnecting the leads onto the terminal, having a functional display mimicking the tested voltage and giving objects a “voltage” that can be probed by the Multimeter to accurately mimic a working multimeter. This was used in the later stages of the project to reduce the crunch time needed to resolve issues with implementation as the Multimeter and Hoist are one of the hardest to implement and implementing it during a time of reduced motivation near the end would not be ideal. Additionally, I also utilised components that my teammates also worked on. This includes the UX flow and how players should be introduced to each component through research and testing by the UX Specialist, replacing low fidelity prototypes developed by myself or placeholders with actual HD models, compiling documentation for the Project Manager and merging components built by other developers. 
            <h3>Code Consolidation and Mission Manager</h3>
            As the project expanded and more components started to have dependencies on other components, we needed a way to consolidate everything together and reorganise the codebase. One solution is to use Object Oriented Programming to implement a Mission Manager system. We start with a Mission Manager that keeps track of all tasks. Each Task inherits a base class called a Task Supervisor. It has its own implementation along with inherited methods to keep track of the current Tasks and triggered Colliders that cue the next set of actions to be taken. Once all the subtasks inside of a Task are completed, a call to Mission Manager is made to tell the Manager to cue the next Task and disable everything that is used in that Task to save system resources. For each task, a set of events (EventTrigger_C) is executed to allow for the display of UI elements for the UX flow, and to set up object states for the current or next subtask. Each EventTrigger_C has two fields, TGB() and UI Only(). TGB() events are triggered regardless of whether or not it is a UI element. These events set up the required elements; for example the position of the hoist, or the player’s position. UI Only events are concerned for the display of vital UI elements for the purposes of the training and tutorial mode in the game, where players are provided UI cues to aid in the dissemination of vital training information. 
            
            `, "collabs": ["Robin", "Carola", "Liting", "Shawn", "Kei"], "img_url": 'icons/VTC_icon.png', "url": "https://github.com/psaghafi/RootHacks2023"},

    {
        "name": "C++ 3D Game Engine", 
        "flairs": [{ "type": "Linear Algebra", "colour": "red" }, { "type": "C++", "colour": "cyan" }, { "type": "Computer Graphics", "colour": "pink" }, { "type": "Systems", "colour": "grey" }, { "type": "Personal", "colour": "silver" }], 
        "images": [{ 'title': 'RootHacks', 'url': 'images/render1.jpg' }, { 'title': 'RootHacks', 'url': 'images/render2.jpg' }, { 'title': 'RootHacks', 'url': 'images/render3.jpg' }, { 'title': 'RootHacks', 'url': 'images/render4.jpg' }, { 'title': 'RootHacks', 'url': 'images/render5.jpg' }],
        "short-body": "Efficient 3D graphics engine built with C++ capable of rendering up to 1M+ polygons per second.",
        "body": `
   <h3>Introduction</h3>This game engine is created using C++ with all of the code required for basic 3D rendering and game logic written from scratch. Environments are composed of GameObjects which form a basic structure that is used
    to build with and allow for encapsulation of the core rendering components which allows for easy deployment of scenes.
<h3>Use of OOP (Object Oriented Programming)</h3>
In previous iterations of the project, rendering is done through function calls. They set up the model, pass arguments through the linear algebra functions to set up the view and projection matrices and transform them to view space to be displayed on screen. The only concern is that for many objects in scene, we have to do that for every single object, so we use OOP to streamline and modularize the project for larger scenes, inspired by Unity's GameObject and Scene system.
<h3>The GameObject</h3>
GameObjects form a fundamental unit for all objects in the engine. They contains code for essential components such as the Camera, MeshRenderer, Object Transforms and other relevant code. At its core, it consists of three basic components:
<li>An ObjectTransform which represents its position, rotation and scale in three-dimensional euclidian space.</li>
<li>Virtual methods for Start() which is called once and Update() for each frame rendered. It can be expanded easily to support more functions such as collision detection through inheritance.</li>
<li>Additional GameObject components that can be inherited.</li><h3>Rendering</h3>
Objects are rendered with a five stage graphic pipeline that can be expandable.
    <li>Objects are broken up into triangles.</li>
    <li>Objects are transformed from Model Space (The span of points usually between (-1,-1,-1) to (1,1,1) normalized, pre-generated by a 3D modelling application such as Blender or Maya.) to a position in world space specified in the GameObject's Transform through transformation matrices.</li>
    <li>Those points ae then transformed into the camera's point of view using a view matrix.</li>
    <li>Finally those points are transformed into normalized screen-space (0,1) using a Projection Matrix and plotted as triangle points to a fragement shader that renders each triangle into frame using barycentric interpolation.</li>
.`, "collabs": [], "img_url": 'images/icons_renderer.png', "url": "https://github.com/kennyzhang620/3DRenderer_Cpp"
    },

    {
        "name": "Save our Roots", 
        "flairs": [{ "type": "C#", "colour": "green" }, { "type": "Unity", "colour": "black" }, { "type": "WINNER!", "colour": "gold" }, { "type": "SystemsHacks2023", "colour": "blue" }], 
        "images": [{ 'title': 'RootHacks', 'url': 'icons/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }],
        "short-body": "Winner of $100 Technical Achievement Award at RootHacks2023 - SystemHacks. Immersive video game where you as John, must traverse an expansive world in search for the World Health Organization.",
        "body": `In this video game, the player takes on the role of John, a man who wakes up from a coma to find himself in a world overrun by zombies. He discovers that he possesses antibodies that can cure the virus and sets out on a mission to reach the World Health Organization lab to deliver his blood and save humanity.
    
    The game is created using Unity, allowing for stunning graphics and immersive gameplay. But what sets it apart is the use of Livepeer video streaming technology, which enables real-time communication between players and game developers. This means that players can receive personalized guidance and support, making their gaming experience more engaging and interactive.

    With its compelling storyline, stunning visuals, and innovative use of technology, this video game promises to be an unforgettable gaming experience for players. So grab your controller and get ready to join John on his quest to save humanity!`, "collabs": ["Parmida Saghafi"], "img_url": 'icons/SOR_icon.svg', "url": "https://github.com/psaghafi/RootHacks2023"},
                  
    {
        "name": "Missing Mystery", 
        "flairs": [{ "type": "C#", "colour": "green" }, { "type": "Unity", "colour": "black" }, { "type": "WINNER!", "colour": "gold" }, { "type": "nwHacks2023", "colour": "blue" }], 
        "images": [{ 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }],
        "short-body": "Thrilling mystery investigation game that won Livepeer $500 award at nwHacks2023. Uses Livepeer API integration and video streaming at its core to convey effective storytelling.",
        "body": `Missing Mystery is an investigation mystery game with a bit of thrill. The main technical points were to integrate the unity3D game engine with the livepeer video streaming API. After seeing the livepeer presentation, we were inspired by the idea of a game that leveraged a decentralized video hosting source. Within the game the player prepares for a long day of investigating the Mayors sudden disappearance. After analyzing the video clip evidence, strange occurrences happen around the office, you decide to take a closer look into what's causing these bizarre events. This game uses Livepeer's REST API and decentralized video storage/streaming to store and present the mystery scenes in real time to enrich the story. It uses a combination of Unity's 3D rendering systems with the video streaming power of Livepeer's open source REST API.`, "collabs": ["Yousif El-Wishahy", "Parmida Saghafi"], "img_url": 'icons/missing_mystery.svg', "url": "https://github.com/kennyzhang620/nwHacks2023"
    },

    {
        "name": "Plant Scan", 
        "flairs": [{ "type": "Node.js", "colour": "green" }, { "type": "Express.js", "colour": "black" }, { "type": "AvaGrows", "colour": "gold" }, { "type": "ML/CNN", "colour": "red" }, { "type": "bcrypt", "colour": "purple" }], 
        "images": [{ 'title': 'RootHacks', 'url': 'images/ps1.jfif' }, { 'title': 'RootHacks', 'url': 'images/ps2.jfif' }, { 'title': 'RootHacks', 'url': 'images/ps3.jfif' }, { 'title': 'RootHacks', 'url': 'images/ps4.jfif' }, { 'title': 'RootHacks', 'url': 'images/ps5.jfif' }],
        "short-body": "Web application designed to aid botanists in efficiently classifying and identifying different plants using machine learning and artificial intelligence, wrapped in a easy to use UX.",
        "body": `<div id="description">
<h3>What is PlantScan?</h3>
PlantScan is a standalone web application designed for AVA Grows hydroponics management company, and it will allow users to identify a plant and analyze its health through a photo. Users will be able to login, take and upload photos of their plants to the application. The photos will be analyzed through the plant identification API [Plant.id] (https://web.plant.id/), which utilizes machine learning to identify the type of plant in the photo and also return any potential stressors, such as unusual coloration, growing mold, or the presence of pests. Users will also be able to filter photos by tags, such as plants with flowers. With our application, we aim to make caring for plants more easily accessible to plant owners, as well as provide a scaffolding for AVA Grows to integrate a similar technology into their existing platform.

<h3>Features</h3>
The features of PlantScan can be broken down into the following epics:

<li>Login/Register</li>
<li>Custom login using a PostgreSQL database</li>
<li>Responsive UI</li>
<li>Photo management</li>
<li>Taking and uploading photos</li>
<li>Storing photos in a backend database</li>
<li>Plant identification</li>
<li>Integration of external API for machine learning</li>
<li>Tag and sort plants by type</li>
<li>>Store the information for each photo to reduce requests to API
Health assessment</li>
<li>Integration of external API for machine learning</li>
<li>Report general health indicators including potential diseases and treatment</li>
Users will be able to login (or be prompted to create a new account), take or upload a picture of a plant, and see information regarding its identity and health using machine learning from the [Plant.id] (https://web.plant.id/) API. They will also be able to filter the plants being displayed on their dashboard by attributes such as whether the plant is healthy and whether the plant is edible.
</div>`, "collabs": ['Parmida Saghafi', 'Jodie Lee', 'Manthan Desai'], "img_url": 'icons/PSIcon.svg', "url": "https://github.com/kennyzhang620/plant_scan"
    },

    {
        "name": "Maztrik", 
        "flairs": [{ "type": "C#", "colour": "green" }, { "type": "Unity", "colour": "black" }, { "type": "Personal", "colour": "silver" }, { "type": "Rootfinding/Math", "colour": "red" }], 
        "images": [{ 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }],
        "short-body": "Inspired by depth-first search, a game where players escape randomly generated maps while minimizing the number of moves and avoiding the Hunter.",
        "body": `A 2.5D maze traversal game where players solve randomly generated mazes of varing difficulty while avoiding the Hunter. Players are graded for their performance and get Coins that can be used to unlock customization for their character.`, "collabs": [], "img_url": 'https://kennyzhang620.github.io/Maztrik/logo.png', "url": "https://kennyzhang620.github.io/Maztrik/index.html"
    },
                  
    {
        "name": "Infinite Block Madness", 
        "flairs": [{ "type": "C#", "colour": "green" }, { "type": "Unity", "colour": "black" }, { "type": "Personal", "colour": "silver" }], 
        "images": [{ 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }],
        "short-body": "Infinite block traversal game where players traverse a randomly generated parkour path that progressively gets more difficult.",
        "body": `A 3D platformer game where players must traverse a infinitely randomly generated level and score the highest by lasting as long as possible and collecting items and dodging obstacles.`, "collabs": [], "img_url": 'https://kennyzhang620.github.io/InfiniteBlockMayhem/logo.png', "url": "https://kennyzhang620.github.io/InfiniteBlockMayhem/index.html"
    },

    {
        "name": "Block-Align", 
        "flairs": [{ "type": "C#", "colour": "green" }, { "type": "Unity", "colour": "black" }, { "type": "Personal", "colour": "silver" }], 
        "images": [{ 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }],
        "short-body": "Tetris-inspired 3D puzzle game built with Unity with leaderboards powered by Node.js technology.",
        "body": `A 3D platformer game where players must traverse a infinitely randomly generated level and score the highest by lasting as long as possible and collecting items and dodging obstacles.`, "collabs": [], "img_url": 'https://kennyzhang620.github.io/Block-Align/logo.png', "url": "https://kennyzhang620.github.io/Block-Align/index.html"
    }


]

const jobdata = [{"image_url": "https://www.cpsbc.ca/themes/custom/college/logo.svg", 
"location": "College of Physicians and Surgeons of BC", 
"title": "IT Support Technician (Co-op)", 
"description": `Supported IT Helpdesk, resolving 20+ weekly tech requests.
Organized Teams Rooms demo for Hybrid Work Plan, easing home-to-office transition.
Explored Adobe Pro alternative, saving estimated $100,000 in 5 years.
Crafted PIA outlining privacy risks, presented to FOI director and gained app`},
                 
{"image_url": "https://upload.wikimedia.org/wikipedia/commons/b/b7/SFU-block-logo.svg", 
"location": "Simon Fraser University", 
"title": "Unity Developer", 
"description": `Upgraded Science World AR beehive exhibit to v2.0.
Enhanced UI, gesture control, performance, and scaling up to 21:9 ratios.
Resolved issues, improved user experience through UI changes.
Implemented Bee Manipulation script for faster AR bee response.
Achieved 6DoF manipulation with <200 ms delay.
Added tutorials, refined UX for simplicity.
Created 3D bee models (Drone, Worker, Queen) for Simon Fraser University.
Collaborated on model integration, coding, and logic.
Supported developer in AR functionality and app functionality.`},
                 
{"image_url": "icons/GOA_icon.png", 
"location": "Game of Apps", 
"title": "iOS Frontend Developer", 
"description": `Enhanced iOS Game of Apps Companion App.
Added Expand Your Knowledge feature, organizing lecture materials.
Improved main dashboard functionality.
Collaborated, aiding team in bug resolution and requirement fulfillment.
Upgraded Credits screen, incorporated new team members, aligned with design.`}
]


const volunteerdata = [
{"image_url": "icons/GOA_icon.png", 
"location": "Game of Apps", 
"title": `
Swift Developer for Team "IDK"`, 
"description": `Worked in a team of five people and prototyped the design of the app using Figma.
Developed the Zenplify task scheduling and management app for the Game of Apps mobile app development competition using the Swift programming language and Xcode.
Presented the app to library patrons at the Game of Apps Showcase at Richmond Public Library showcasing the app's history, the motivation for creating the app and a live demonstration of the app to library patrons.`},

{"image_url": "https://upload.wikimedia.org/wikipedia/commons/b/b7/SFU-block-logo.svg", 
"location": "Simon Fraser University", 
"title": "CS Peer Tutor", 
"description": `Assisted and helped students that are struggling with course concepts and coursework and provided guidance and debugging help when appropriate.`}
]

const awardsdata = [{"image_url": "icons/GOA_icon.png", 
"location": "Game of Apps", 
"title": `Best Developer Award - Game of Apps Season 2 [2019]`, 
"description": `Through excemplary work and attempting to implement features beyond of what is taught in Season 2 (such as implementing notifications and persistent data in Swift)`}
]
