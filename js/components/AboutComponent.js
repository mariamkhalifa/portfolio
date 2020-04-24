import SkillTypesComponent from "./SkillTypesComponent.js"

export default {
    template: `
    <section id="about">
        <div class="about">
            <h2 class="main-heading">{{ heading }}</h2>
            <p class="about-text" v-html="text"></p>
        </div>

        <skilltypes/>
    </section>
    `,

    data() {
        return {
            heading: 'A little about me..',
            text: `<span>Hi there!</span><br>I’m an interactive media design graduate from Fanshawe College. I'm a front-end developer who is in love with Javascript. As an honour-roll student, I have proven time management skills and teamwork ethic. Underneath my quiet nature is an adventurer, constantly seeking a new challenge. When I’m not working, you’ll find me reading or playing with my 2 little boys.`,
        }
    },

    components: {
        skilltypes: SkillTypesComponent
    }
}