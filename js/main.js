import AboutComponent from './components/AboutComponent.js'
import DevelopmentComponent from './components/DevelopmentComponent.js'
import DesignComponent from './components/DesignComponent.js'
import ContactComponent from './components/ContactComponent.js'

(() => {

let router = new VueRouter({
    routes: [
        { path: '/', name: 'about', component: AboutComponent },
        { path: '/development',  name: 'development', component: DevelopmentComponent },
        { path: '/design',  name: 'design', component: DesignComponent },
        { path: '/contact',  name: 'contact', component: ContactComponent },
    ]
});

const vm = new Vue({
    date: {},

    methods: {},

    router: router
}).$mount('#app'); 


})();