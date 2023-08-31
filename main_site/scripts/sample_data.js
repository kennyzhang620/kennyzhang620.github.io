
const projects = [
    {
        "name": "C++ 3D Game Engine", "flairs": [{ "type": "Linear Algebra", "colour": "red" }, { "type": "C++", "colour": "cyan" }, { "type": "Computer Graphics", "colour": "pink" }, { "type": "Systems", "colour": "grey" }, { "type": "Personal", "colour": "silver" }], "images": [{ 'title': 'RootHacks', 'url': 'images/render1.jpg' }, { 'title': 'RootHacks', 'url': 'images/render2.jpg' }, { 'title': 'RootHacks', 'url': 'images/render3.jpg' }, { 'title': 'RootHacks', 'url': 'images/render4.jpg' }, { 'title': 'RootHacks', 'url': 'images/render5.jpg' }], "body": `
   <h4>Introduction</h4>This game engine is created using C++ with all of the code required for basic 3D rendering and game logic written from scratch. Environments are composed of GameObjects which form a basic structure that is used
    to build with and allow for encapsulation of the core rendering components which allows for easy deployment of scenes.
<h4>Use of OOP (Object Oriented Programming)</h4>
In previous iterations of the project, rendering is done through function calls. They set up the model, pass arguments through the linear algebra functions to set up the view and projection matrices and transform them to view space to be displayed on screen. The only concern is that for many objects in scene, we have to do that for every single object, so we use OOP to streamline and modularize the project for larger scenes, inspired by Unity's GameObject and Scene system.
<h4>The GameObject</h4>
GameObjects form a fundamental unit for all objects in the engine. They contains code for essential components such as the Camera, MeshRenderer, Object Transforms and other relevant code. At its core, it consists of three basic components:
<li>An ObjectTransform which represents its position, rotation and scale in three-dimensional euclidian space.</li>
<li>Virtual methods for Start() which is called once and Update() for each frame rendered. It can be expanded easily to support more functions such as collision detection through inheritance.</li>
<li>Additional GameObject components that can be inherited.</li><h4>Rendering</h4>
Objects are rendered with a five stage graphic pipeline that can be expandable.
    <li>Objects are broken up into triangles.</li>
    <li>Objects are transformed from Model Space (The span of points usually between (-1,-1,-1) to (1,1,1) normalized, pre-generated by a 3D modelling application such as Blender or Maya.) to a position in world space specified in the GameObject's Transform through transformation matrices.</li>
    <li>Those points ae then transformed into the camera's point of view using a view matrix.</li>
    <li>Finally those points are transformed into normalized screen-space (0,1) using a Projection Matrix and plotted as triangle points to a fragement shader that renders each triangle into frame using barycentric interpolation.</li>
.`, "collabs": [], "img_url": 'images/icons_renderer.png', "url": "null"
    },


    {
        "name": "Save our Roots", "flairs": [{ "type": "C#", "colour": "green" }, { "type": "Unity", "colour": "black" }, { "type": "WINNER!", "colour": "gold" }, { "type": "SystemsHacks2023", "colour": "blue" }], "images": [{ 'title': 'RootHacks', 'url': 'icons/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }, { 'title': 'RootHacks', 'url': 'images/medium (1).png' }], "body": `In this video game, the player takes on the role of John, a man who wakes up from a coma to find himself in a world overrun by zombies. He discovers that he possesses antibodies that can cure the virus and sets out on a mission to reach the World Health Organization lab to deliver his blood and save humanity.
    
    The game is created using Unity, allowing for stunning graphics and immersive gameplay. But what sets it apart is the use of Livepeer video streaming technology, which enables real-time communication between players and game developers. This means that players can receive personalized guidance and support, making their gaming experience more engaging and interactive.

    With its compelling storyline, stunning visuals, and innovative use of technology, this video game promises to be an unforgettable gaming experience for players. So grab your controller and get ready to join John on his quest to save humanity!`, "collabs": ["Parmida Saghafi"], "img_url":'icons/SOR_icon.svg', "url": "null"},
                  
                  {"name": "Missing Mystery", "flairs": [{"type": "C#", "colour": "green"}, {"type": "Unity", "colour": "black"}, {"type": "WINNER!", "colour": "gold"}, {"type": "nwHacks2023", "colour": "purple"}], "images": [{'title':'RootHacks','url':'images/medium (1).png'},{'title':'RootHacks','url':'images/medium (1).png'},{'title':'RootHacks','url':'images/medium (1).png'},{'title':'RootHacks','url':'images/medium (1).png'}, {'title':'RootHacks','url':'images/medium (1).png'}], "body": `Missing Mystery is an investigation mystery game with a bit of thrill. The main technical points were to integrate the unity3D game engine with the livepeer video streaming API. After seeing the livepeer presentation, we were inspired by the idea of a game that leveraged a decentralized video hosting source. Within the game the player prepares for a long day of investigating the Mayors sudden disappearance. After analyzing the video clip evidence, strange occurrences happen around the office, you decide to take a closer look into what's causing these bizarre events. This game uses Livepeer's REST API and decentralized video storage/streaming to store and present the mystery scenes in real time to enrich the story. It uses a combination of Unity's 3D rendering systems with the video streaming power of Livepeer's open source REST API.`, "collabs": ["Yousif El-Wishahy", "Parmida Saghafi"], "img_url":'icons/missing_mystery.svg', "url": "null"},

                  {"name": "Maztrik", "flairs": [{"type": "C#", "colour": "green"}, {"type": "Unity", "colour": "black"}, {"type": "Personal", "colour": "silver"}, {"type": "Rootfinding/Math", "colour": "red"}], "images": [{'title':'RootHacks','url':'images/medium (1).png'},{'title':'RootHacks','url':'images/medium (1).png'},{'title':'RootHacks','url':'images/medium (1).png'},{'title':'RootHacks','url':'images/medium (1).png'}, {'title':'RootHacks','url':'images/medium (1).png'}], "body": `A 2.5D maze traversal game where players solve randomly generated mazes of varing difficulty while avoiding the Hunter. Players are graded for their performance and get Coins that can be used to unlock customization for their character.`, "collabs": [], "img_url":'https://kennyzhang620.github.io/Maztrik/logo.png', "url": "https://kennyzhang620.github.io/InfiniteBlockMayhem/index.html"},
                  
{"name": "Infinite Block Madness", "flairs": [{"type": "C#", "colour": "green"}, {"type": "Unity", "colour": "black"}, {"type": "Personal", "colour": "silver"}], "images": [{'title':'RootHacks','url':'images/medium (1).png'},{'title':'RootHacks','url':'images/medium (1).png'},{'title':'RootHacks','url':'images/medium (1).png'},{'title':'RootHacks','url':'images/medium (1).png'}, {'title':'RootHacks','url':'images/medium (1).png'}], "body": `A 3D platformer game where players must traverse a infinitely randomly generated level and score the highest by lasting as long as possible and collecting items and dodging obstacles.`, "collabs": [], "img_url":'https://kennyzhang620.github.io/InfiniteBlockMayhem/logo.png', "url": "https://kennyzhang620.github.io/InfiniteBlockMayhem/index.html"},

                  {"name": "Block-Align", "flairs": [{"type": "C#", "colour": "green"}, {"type": "Unity", "colour": "black"}, {"type": "Personal", "colour": "silver"}], "images": [{'title':'RootHacks','url':'images/medium (1).png'},{'title':'RootHacks','url':'images/medium (1).png'},{'title':'RootHacks','url':'images/medium (1).png'},{'title':'RootHacks','url':'images/medium (1).png'}, {'title':'RootHacks','url':'images/medium (1).png'}], "body": `A 3D platformer game where players must traverse a infinitely randomly generated level and score the highest by lasting as long as possible and collecting items and dodging obstacles.`, "collabs": [], "img_url":'https://kennyzhang620.github.io/Block-Align/logo.png', "url": "https://kennyzhang620.github.io/InfiniteBlockMayhem/index.html"}


]

const jobdata = [{"image_url": "https://www.cpsbc.ca/themes/custom/college/logo.svg", "location": "College of Physicians and Surgeons of BC", "title": "IT Support Technician (Co-op)", "description": `Supported IT Helpdesk, resolving 20+ weekly tech requests.
Organized Teams Rooms demo for Hybrid Work Plan, easing home-to-office transition.
Explored Adobe Pro alternative, saving estimated $100,000 in 5 years.
Crafted PIA outlining privacy risks, presented to FOI director and gained app`},
                 
   {"image_url": "https://upload.wikimedia.org/wikipedia/commons/b/b7/SFU-block-logo.svg", "location": "Simon Fraser University", "title": "Unity Developer", "description": `Upgraded Science World AR beehive exhibit to v2.0.
Enhanced UI, gesture control, performance, and scaling up to 21:9 ratios.
Resolved issues, improved user experience through UI changes.
Implemented Bee Manipulation script for faster AR bee response.
Achieved 6DoF manipulation with <200 ms delay.
Added tutorials, refined UX for simplicity.
Created 3D bee models (Drone, Worker, Queen) for Simon Fraser University.
Collaborated on model integration, coding, and logic.
Supported developer in AR functionality and app functionality.`},
                 
                 {"image_url": "https://media.licdn.com/dms/image/C560BAQHpc0m5mmVh1Q/company-logo_100_100/0/1599532264980?e=1700697600&v=beta&t=4G7OsQTs7eTTNxGVJwxlKzSCLAvmX_rs-aL2a-OYf6Y", "location": "Game of Apps", "title": "iOS Frontend Developer", "description": `Enhanced iOS Game of Apps Companion App.
Added Expand Your Knowledge feature, organizing lecture materials.
Improved main dashboard functionality.
Collaborated, aiding team in bug resolution and requirement fulfillment.
Upgraded Credits screen, incorporated new team members, aligned with design.`}
]


const volunteerdata = [{"image_url": "https://media.licdn.com/dms/image/C560BAQHpc0m5mmVh1Q/company-logo_100_100/0/1599532264980?e=1700697600&v=beta&t=4G7OsQTs7eTTNxGVJwxlKzSCLAvmX_rs-aL2a-OYf6Y", "location": "Game of Apps", "title": `
Swift Developer for Team "IDK"`, "description": `Worked in a team of five people and prototyped the design of the app using Figma.
Developed the Zenplify task scheduling and management app for the Game of Apps mobile app development competition using the Swift programming language and Xcode.
Presented the app to library patrons at the Game of Apps Showcase at Richmond Public Library showcasing the app's history, the motivation for creating the app and a live demonstration of the app to library patrons.`},
                 {"image_url": "https://upload.wikimedia.org/wikipedia/commons/b/b7/SFU-block-logo.svg", "location": "Simon Fraser University", "title": "CS Peer Tutor", "description": `Assisted and helped students that are struggling with course concepts and coursework and provided guidance and debugging help when appropriate.`}
]

const awardsdata = [{"image_url": "https://media.licdn.com/dms/image/C560BAQHpc0m5mmVh1Q/company-logo_100_100/0/1599532264980?e=1700697600&v=beta&t=4G7OsQTs7eTTNxGVJwxlKzSCLAvmX_rs-aL2a-OYf6Y", "location": "Game of Apps", "title": `
Best Developer Award - Game of Apps Season 2 [2019]`, "description": `Through excemplary work and attempting to implement features beyond of what is taught in Season 2 (such as implementing notifications and persistent data in Swift)`}
]
