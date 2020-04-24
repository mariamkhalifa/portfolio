import SkillsComponent from "./SkillsComponent.js"

export default {
    props: ['title'],

    template: `
    <div class="skills-con">
            <div class="vine-bar"></div>
            <img class="vine" src="images/vine.png" alt="">
            
            <div class="skills">
                <h3 class="skill-title">{{ skilltypes[0].title }}</h3>
                <ul class="ul-con">
                    <skills v-for="(skill, index) in motionskills"
                    :skill="skill" :key="index"/>
                </ul>
            </div>

            <div class="skills">
                <h3 class="skill-title">{{ skilltypes[1].title }}</h3>
                <ul class="ul-con">
                    <skills v-for="(skill, index) in devskills"
                    :skill="skill" :key="index"/>
                </ul>
            </div>

            <div class="skills">
                <h3 class="skill-title">{{ skilltypes[2].title }}</h3>
                <ul class="ul-con">
                    <skills v-for="(skill, index) in graphicskills"
                    :skill="skill" :key="index"/>
                </ul>
            </div>

        </div>
        

        
    `,

    data() {
        return {
            skilltypes: [
                { title: 'Motion Design Skills'},
                { title: 'Front-End Development Skills'},
                { title: 'Graphic Design Skills'},
            ],

            motionskills: [
                'Cinema 4D',  'After Effects',  'Premiere',
            ],

            devskills: [
                'HTML5',  'CSS3',  'Vanilla.js',  'Vue.js',  'Node.js',  'Ajax',  'PHP',  'MySQL',  'Sass',  'Bootstrap',  'Python',  'Git',
            ],

            graphicskills: [
                'Photoshop',  'Illustrator',  'XD',  'InDesign'
            ],
            
        }
    },

    components: {
        skills: SkillsComponent
    }
}