export default {
    props: ['project'],

    template: `
        <li class="project">
            <div class="dev-images">
                <div class="dev-desktop-img-con"><img @click="chooseProject" :src="'images/' + project.img1" alt="desktop image"></div>
                <div class="dev-mobile-images">
                    <img v-if="project.img2" @click="chooseProject" class="dev-mobile-img" :src="'images/' + project.img2" alt="mobile image">  
                    <img v-if="project.img3" @click="chooseProject" class="dev-mobile-img" :src="'images/' + project.img3" alt="mobile image">  
                </div>
            </div>

            <div class="dev-text">
                <h4 class="dev-title">{{ project.title }}</h4>
                <h5 class="dev-subtitle">{{ subtitle1 }}</h5>
                <p class="dev-desc">{{ project.problem }}</p>
                <h5 class="dev-subtitle">{{ subtitle2 }}</h5>
                <p class="dev-desc">{{ project.desc }}</p>
                
                <a v-if="project.url" :href="project.url" class="dev-link url" target="_blank">{{ project.url }}</a>
                <a :href="project.github" class="dev-link" target="_blank">{{ project.github }}</a>
            </div>

            <a @click="chooseProject" class="dev-link">{{ link }}</a>
        </li>
    `,

    data() {
        return {
            subtitle1: 'The Problem:',
            subtitle2: 'The Solution:',
            link: 'Click for the case study'
        }
    },

    methods: {
        chooseProject() {
            this.$router.push({ name: 'casestudy', params: { 'liveproject' : this.project }})
        }
    }
}