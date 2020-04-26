import ProjectComponent from "./ProjectComponent.js"

export default {
    template: `
    <section id="development" class="development">
        <h3 class="main-heading">{{ heading }}</h3>

        <ul class="dev-projects">
            <i @click="navigate(-1)" class="fas fa-angle-left dev-slide-left"></i>
            
            <project v-for="(project, index) in projects"
            :project="project" :key="index" ref="projects"/>
            
            <i @click="navigate(1)" class="fas fa-angle-right dev-slide-right"></i>       
        </ul>

    </section>
    `,

    data() {
        return {
            heading: 'Web Development Projects',
            projects: [
                { 
                title: 'Keep It Neutral', img1: 'kin-desktop.png', img2: 'kin-mobile.png', img3: 'kin-mobile-community.png',
                github: 'https://github.com/mariamkhalifa/Chang_Khalifa_Gajjar_Tsao_Valero_FIP',
                problem: `Create a dynamic and responsive website where all content is pulled from a database and can be updated through a CMS.`,
                desc: `As the front-end developer, in a team of 5, I used Vue.js as the front-end framework as well as Ajax and PHP, using templates that can be repeated whenever possible. The most challenging part was creating a template for the hero section that would adapt to the changing layout from mobile to desktop. `
                },
                { 
                title: 'Roku Flashback', img1: 'roku-desktop.png', img2: 'roku-mobile.png', img3: 'roku-mobile2.png',
                github: 'https://github.com/mariamkhalifa/Chang_Kayla_Khalifa_Mariam_RokuFlashback',
                problem: `Create a media streaming app where a user can create an account, log in, logout and add other users. The app should have 3 different types of media; Movies, Television and music. Additionally, the app should filter media according to the genre as well as restrict certain content according to the age of the user. `,
                desc: `Working with a designer as my partner, I created a database for the media and the users. I used Vue.js as the front-end framework, as well as Ajax and PHP to pull from and add to the database. I gave users a permissions level which I used to filter content according to the user’s age. If the user has the admin role set they can edit other users, giving the parents the ability to control their kids’ accounts permission level.  I used the browser’s local storage to store the current user info until they logout.`
                },
                { 
                title: 'Red Fox Medical', img1: 'red-fox-desktop.png', img2: 'red-fox-mobile.png', img3: 'red-fox-mobile2.png',
                github: 'https://github.com/mariamkhalifa/redFox', url: 'https://redfoxmedical.ca',
                problem: `Create a logo and brand for a startup. As well as design and create a website to show their contact info and products. `,
                desc: `Through communication with the client, I was able to create the logo and brand that they envisioned. I designed and developed a one-page website through HTML5, CSS3, Sass and Vue.js. I created a contact using PHP and ajax. Then I hosted the website for the client. I still make updates to the website when they need to add new products.`
                },
                {
                title: 'Animal Tracks Music Mixer', img1: 'animal-tracks-desktop.png',
                github: 'https://github.com/kchang00/chang_k_khalifa_m_musicMixer',
                problem: `Create a music mixer where the user can mix and play different tracks by dragging and dropping tracks into the play area.`,
                desc: `Working with a designer as my partner, I used Vanilla.js along with HTML5 and CSS3 to build the web app. The app works by playing different animal sounds when they are dropped into the play area. The drop triggers the play function, as well as adds this particular track to the active tracks array. Clicking on the active animal takes them back to their initial location outside the play area and stops the track, as well as removes this particular track from the active tracks array. This ensures that multiple tracks can play simultaneously. I created custom controls Where the user can play/pause, or refresh the play area. Additionally, There are buttons that play different songs so the user can experiment with adding different animal sounds to the songs.`
                },
                
            ],
            counter: 0,
        }
    },

    mounted() {
        this.setCurrentSlide();
    },

    methods: {
        navigate(direction) {
            let projectsArray = document.querySelectorAll('.project'),
                arrayLength = projectsArray.length,
                currentProject = projectsArray[this.counter];

            currentProject.classList.remove('active');
            this.counter = this.counter + direction;

            if(direction == -1 && this.counter < 0) {
                this.counter = arrayLength - 1;
            }

            if(direction == 1 && !projectsArray[this.counter]) {
                this.counter = 0;
            }
            
            currentProject = projectsArray[this.counter];
            currentProject.classList.add('active'); 
        },

        setCurrentSlide() {
            document.querySelectorAll('.project')[0].classList.add('active');
        }
    },

    components: {
        project: ProjectComponent
    }
}