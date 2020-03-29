import devProjects from './DevProjects.js'

export default {
    components: {
        devProjects
    },

    template: `
    <section id="development">
        <div class="development">
            <h2 class="main-heading">Web Development Projects</h2>
            
            <div class="dev-projects-con">
                <ul class="dev-projects">
                    <dev-projects @make-selection="loadProject"
                    v-for="(project, index) in devprojectsdata"
                    class="project"
                    :title="project.title"
                    :img2="project.img2"
                    :key="index">
                    </dev-projects>
                </ul>

                <div class="project animal-tracks">
                    <img class="project-img" :src="'images/' + animaltracks.img2" alt="project image">
                    
                    <div ref="popover" class="dev-popover-outer" :class="{'show':popover}">
                        <div class="dev-popover-inner">
                            <h3>{{animaltracks.title}}</h3>
                            <ul>
                                <li v-for="item in animaltracks.summary">{{item}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="portfolio-piece">
                <h3 class="title">{{portfoliotitle}}</h3>
                <div class="dt-img-con">
                    <img class="dt-img" :src="'images/' + portfolioimg1 " alt="project desktop image">
                </div>
                <div class="desc">
                    <h4>Project Description:</h4>
                    <p class="project-desc">{{portfoliodesc}}</p>

                    <h4>Team Members:</h4>
                    <p class="project-team">{{portfolioteam}}</p>

                    <h4>Github Link:</h4>
                    <a :href="portfoliogit" class="project-link">{{portfoliogit}}</a>
                </div>
                <div class="m-img">
                    <img :src="'images/' + portfolioimg2" alt="project mobile image 1">
                    <img :src="'images/' + portfolioimg3" alt="project mobile image 2">
                </div>
            </div>
        </div>
    </section>
    `,

    data: function() {
        return {
            animaltracks: { title: "Animal Tracks", 
            img2: "animal-tracks-desktop.png",
            description: "This is a music mixer web app. This was a school homework where I worked with a partner. She did the design work and I was the developer. I wrote the javaScript. The music mixer works y dragging the animal icons to the middle section drop area. Also, there are track buttons to choose from. The animal sounds create the beats that go with the tracks. The app allows the user o add any number of animals they want with only one track playing. The user can add animals or remove them as they like. There is a play/pause button and a restart button to allow the user to restart everything without having to refresh the page.",
            summary: ["HTML5", "CSS3", "Vanilla.js"],
            team: [
              { name: "Kayla Chang (Designer)", git: "https://github.com/kchang00"},
              { name: "Me (Developer)"}
            ],
            git: "https://github.com/kchang00/chang_k_khalifa_m_musicMixer" },

            popover: false,

            portfoliotitle: "",
            portfolioimg1: "", 
            portfolioimg2: "", 
            portfolioimg3: "",
            portfolioteam: [],
            portfoliogit: "",
            portfoliourl: "",
            portfoliodesc: "" 

        }
    },

    methods: {
        loadProject(title, description, img1, img2, img3, url, git, team) {
            console.log('!');
            this.portfoliotitle = title;
            this.portfolioimg1  = img1; 
            this.portfolioimg2  = img2; 
            this.portfolioimg3  = img3;
            this.portfolioteam  = team;
            this.portfoliogit   = git;
            this.portfoliourl   = url;
            this.portfoliodesc  = description;
        },
    }
    

    
}