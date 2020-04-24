import AboutComponent from "./AboutComponent.js";
import DevelopmentComponent from "./DevelopmentComponent.js";
import MotionComponent from "./MotionComponent.js";
import ContactComponent from "./ContactComponent.js";

export default {
    name: 'home',

    template:`
    <section>
        <h2 class="hidden">Home Page</h2>

        <about/>

        <development/>

        <motion/>

        <contact/>

    </section>
    `,

    components: {
        about : AboutComponent,
        development: DevelopmentComponent,
        motion: MotionComponent,
        contact: ContactComponent
    }
}