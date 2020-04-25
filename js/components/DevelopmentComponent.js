import ProjectComponent from "./ProjectComponent.js"

export default {
    template: `
    <section id="development" class="development">
        <h3 class="main-heading">{{ heading }}</h3>

        <ul class="dev-projects">
            <i class="fas fa-angle-left dev-slide-left"></i>
            <div class="slides">
                <project v-for="(project, index) in projects"
                :project="project" :key="index"/>
            </div> 
            <i class="fas fa-angle-right dev-slide-right"></i>       
        </ul>

    </section>
    `,

    data() {
        return {
            heading: 'Web Development Projects',
            projects: [
                { 
                title: 'Keep It Neutral', img1: 'kin-desktop.png', img2: 'kin-mobile.png', img3: 'kin-mobile-community.png',
                problem: `Create a dynamic and responsive website where all content is pulled from a database and can be updated through a CMS.`,
                desc: `As the front-end developer, I used Vue.js as the front-end framework as well as Ajax and PHP, using templates that can be repeated whenever possible. The most challenging part was creating a template for the hero section that would adapt with the changing layout from mobile to desktop.`
                },
                { 
                title: 'Roku Flashback', img1: 'roku-desktop.png', img2: 'roku-mobile.png', img3: 'roku-mobile2.png',
                problem: ``,
                desc: ``
                },
                { 
                title: 'Red Fox Medical', img1: 'red-fox-desktop.png', img2: 'red-fox-mobile.png', img3: 'red-fox-mobile2.png',
                problem: ``,
                desc: ``
                },
            ]
        }
    },

    components: {
        project: ProjectComponent
    }
}