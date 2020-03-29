export default {
    props: {
        img1: String,
        img2: String,
        img3: String,
        title: String,
        summary: Array,
        url: String,
        git: String,
        team: Array,
        description: String
    },

    template: `
        <li @click="$emit('make-selection', title, description, img1, img2, img3, url, git, team)"
        >
            <img class="project-img" :src="'images/' + project.img2" alt="project image">
            <div ref="popover" class="dev-popover-outer" :class="{'show':popover}">
                <div class="dev-popover-inner">
                    <h3>{{project.title}}</h3>
                    <ul>
                        <li v-for="item in project.summary">{{item}}</li>
                    </ul>
                </div>
            </div>
        </li>
    `,

    data: function() {
        return {
            devprojectsdata: [
                { title: "Keep It Neutral", 
                  img1: "kin-desktop.png", 
                  img2: "kin-mobile.png", 
                  img3: "kin-mobile2.png", 
                  description: "",
                  summary: ["HTML5", "CSS3", "Vue.js", "Ajax", "Sass", "PHP"],
                  team: [ 
                    { name: "Sandra Tsao (back-end developer)", git: "https://github.com/SandraTsao"},
                    { name: "Luisa Valero (designer)", git: "https://github.com/LuDesigner"},
                    { name: "Kahani Gajjar (designer)", git: "https://github.com/kahani22"},
                    { name: "Kayla Chang (motion designer + project manager)", git: "https://github.com/kchang00"},
                    { name: "Me (Front-end developer)", git: "https://github.com/mariamkhalifa"},
                  ],
                  git: "https://github.com/mariamkhalifa/Chang_Khalifa_Gajjar_Tsao_Valero_FIP" },

                  { title: "Roku Flashback", 
                  img1: "roku-desktop.png", 
                  img2: "roku-mobile.png", 
                  img3: "roku-mobile2.png", 
                  description: "",
                  summary: ["HTML5", "CSS3", "Vue.js", "Ajax", "Sass", "PHP"],
                  team: [ 
                    { name: "Kayla Chang (Designer)", git: "https://github.com/kchang00"},
                    { name: "Me (Developer)", git: "https://github.com/mariamkhalifa"}
                  ],
                  git: "https://github.com/mariamkhalifa/Chang_Kayla_Khalifa_Mariam_RokuFlashback" },

                { title: "M Media Player", 
                  img1: "mmp-desktop.png",
                  img2: "mmp-mobile.png",
                  img3: "mmp-mobile2.png",
                  description: "",
                  summary: ["HTML5", "CSS3", "Vue.js", "Bootstrap", "Sass"],
                  team: [
                      { name: "Me (Designer + Developer", git: "https://github.com/mariamkhalifa"}
                    ],
                  git: "https://github.com/mariamkhalifa/Khalifa_Mariam_AccessibiltyResearch" },

                { title: "Ontario Summer", 
                  img1: "on-summer-desktop.png",
                  img2: "on-summer-mobile.png",
                  img3: "on-summer-mobile2.png",
                  description: "This is a project I’m particularly proud of because it was a hack-a-thon midterm, where we were required to finish a project in 24 hours as a team of 5. I was the front-end developer where I worked with my amazing team to finish all the requirements for this project. I was tasked with building the website. I used HTML5, CSS3, Sass and Vue.js. This is a single page build through Vue Router and components for the different views. This project is when I first fell in love with Vue.js.",
                  summary: ["HTML5", "CSS3", "Vue.js", "Sass"],
                  team: [
                    { name: "Sandra Tsao (back-end developer)", git: "https://github.com/SandraTsao"},
                    { name: "Luisa Valero (designer)", git: "https://github.com/LuDesigner"},
                    { name: "Kahani Gajjar (designer)", git: "https://github.com/kahani22"},
                    { name: "Kayla Chang (motion designer + project manager)", git: "https://github.com/kchang00"},
                    { name: "Me (Front-end developer)", git: "https://github.com/mariamkhalifa"},
                  ],
                  git: "https://github.com/mariamkhalifa/Chang_Gajjar_Khalifa_Tsao_Valero_OntarioSummer" },

                { title: "Red Fox", 
                  img1: "red-fox-desktop.png",
                  img2: "red-fox-mobile.png",
                  img3: "red-fox-mobile2.png",
                  description: "This is a freelance project I did for a client during the summer holiday after the first year. The client had only a name and wanted a brand and a website. I created the logo and branding for the company. I made the website using HTML, CSS3 and vanilla JavaScript. I used GreenSock as well as CSS3 for animations.",
                  summary: ["HTML5", "CSS3", "Vanilla.js", "PHP"],
                  team: [
                      { name: "Just me (Designer + Developer)", git: "https://github.com/mariamkhalifa"}
                    ],
                  git: "https://github.com/mariamkhalifa/redFox",
                  url: "https://redfoxmedical.ca" },

                { title: "Roomba 614 Robot Vaccuum", 
                  img1: "irobot-desktop.png",
                  img2: "irobot-mobile.png",
                  img3: "irobot-mobile2.png",
                  description: "This was a school homework where we were required to create a web page for any product using Node.js and host the web page on Heroku. I chose Roomba614. I designed the page and wrote the code using HTML, CSS3, Sass and Node.js.",
                  summary: ["HTML5", "CSS3", "Node.js", "Sass", "Heroku"],
                  team: [
                    { name: "Just me (Designer + Developer)", git: "https://github.com/mariamkhalifa"}
                    ],
                  git: "https://github.com/mariamkhalifa/Khalifa_Mariam_HerokuTest",
                  url: "https://mariam-product-hw.herokuapp.com/" },

                { title: "Imagina", 
                  img1: "imagina-desktop.png",
                  img2: "imagina-mobile.png",
                  img3: "imagina-mobile2.png",
                  description: "This is a school team project. We were a team of 4. Two designers and 2 developers. I worked with my partner to write HTML, CSS, and javaScript. We used Sass for CSS and vanilla JavaScript. We were required to create a dynamic section where the content is pulled through a JavaScript object. We did that for the popover in the “team members” section, where hovering over an image displays the bio for this person over their image.",
                  summary: ["HTML5", "CSS3", "Vanilla.js", "Sass"],
                  team: [
                    { name: "Sandra Tsao (Front-end developer)", git: "https://github.com/SandraTsao" },
                    { name: "Luisa Valero (designer)", git: "https://github.com/LuDesigner" },
                    { name: "Kahani Gajjar (designer)", git: "https://github.com/kahani22" },
                    { name: "Me (Front-end developer)", git: "https://github.com/mariamkhalifa" },
                  ],
                  git: "https://github.com/SandraTsao/Gajjar_Khalifa_Tsao_Valero_Bootcamp" },

                { title: "TRAA", 
                  img1: "traa-desktop.png",
                  img2: "traa-mobile.png",
                  img3: "traa-mobile2.png",
                  description: "This was a school project. I worked with a partner to remake the Thames River Anglers Association website. We were required to preserve the branding and logo. We shared the design work equally. For the development, we used HTML5, CSS3, and Vanilla JavaScript. The website is fully responsive and was written mobile-first. For my part of the development, I wrote the HTML and CSS for the contact, blog and about pages. However, I didn't write the CSS animations in the about page, that was my awesome partner. I wrote the JavaScript for the sub-menu in the nav for the mobile version. I also used the Greensock library for the smooth scrolling.",
                  summary: ["HTML5", "CSS3", "Vanilla.js"],
                  team: [
                    { name: "Kayla Chang (Designer + Developer + Motion)", git: "https://github.com/kchang00" },
                    { name: "Me (Developer + Designer + Photo-editor)", git: "https://github.com/mariamkhalifa" }
                  ],
                  git: "https://github.com/kchang00/chang_k_khalifa_m_final_ia" },

            ],

            popover: false
        }
    },


}
