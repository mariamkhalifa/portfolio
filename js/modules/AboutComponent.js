// export default {
//     props: {
//         img: String
//     },

//     template: `
//     <section id="about">
//         <div class="about">
//             <h2 class="main-heading">A little bit about me..</h2>
//             <p class="about-text">
//                 <span>Hi there!</span><br>
//                 {{about.text}}
//             </p>

//             <img class="about-img" :src="'images/' + about.img" alt="mariam pic">
//         </div>
//         <div class="skills-con">
//             <div class="skills skills-m">
//                 <h3 class="skill-title">Motion Design Skills</h3>
//                 <ul class="ul-con">
//                     <li v-for="skill in motionskills"><i class="fas fa-square"></i>{{ skill.name }}</li>
//                 </ul>
//             </div>

//             <div class="skills skills-dev">
//                 <h3 class="skill-title">Front-End Development Skills</h3>
//                 <ul class="ul-con">
//                     <li v-for="skill in devskills"><i class="fas fa-square"></i>{{ skill.name }}</li>
//                 </ul>
//             </div>

//             <div class="skills skills-g">
//                 <h3 class="skill-title">Graphic Design Skills</h3>
//                 <ul class="ul-con">
//                     <li v-for="skill in graphicskills"><i class="fas fa-square"></i>{{ skill.name }}</li>
//                 </ul>
//             </div>
//         </div>
//     </section>
//     `,

//     data: function() {
//         return {
//             about: {
//                 img: "mariam1.jpg",
//                 text: `I’m a 2nd-year interactive media design student at Fanshawe College, London, Ontario, about to graduate next April/2020. 
//                 I'm a front-end developer who is in love with Javascript. As an honour-roll student, I have proven time management skills and teamwork ethic.
//                 Underneath my quiet nature is an adventurer, constantly seeking a new challenge. When I’m not working, you’ll find me reading or playing with my 2 little boys.`
//             },

//             motionskills: [
//                 { name: "Cinema 4D" },
//                 { name: "After Effects" },
//                 { name: "Premiere Pro" } 
//             ],

//             devskills: [
//                 { name: "HTML5" },
//                 { name: "CSS3" },
//                 { name: "Sass" },
//                 { name: "Vanilla.js" },
//                 { name: "Vue.js" },
//                 { name: "Node.js" },
//                 { name: "Ajax" },
//                 { name: "Bootstrap" },
//                 { name: "JQuery" },
//                 { name: "PHP" },
//                 { name: "MySql" },
//                 { name: "Drupal" },
//                 { name: "WordPress" },
//                 { name: "Python" },
//                 { name: "Git" },
//             ],

//             graphicskills: [
//                 { name: "Photoshop" },
//                 { name: "Illustrator" },
//                 { name: "XD" },
//                 { name: "InDesign" },
//             ]
//         }
//     }
// }