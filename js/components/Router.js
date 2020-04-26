import HomeComponent from './HomeComponent.js'
import CaseStudyComponent from './CaseStudyComponent.js'

const router = new VueRouter({
    routes : [
        { path: '/', name: 'home', component: HomeComponent },
        { path: '/casestudy', name: 'casestudy', component: CaseStudyComponent, props: true }
    ]
})

export default router