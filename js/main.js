(() => {

console.log("!");

let vm = new Vue({

    el: "#app",

    date: {
        about: {
            img: "mariam1.jpg",
            text: `I’m a 2nd-year interactive media design student at Fanshawe College, London, Ontario, about to graduate next April/2020. 
            I'm a front-end developer who is in love with Javascript. As an honour-roll student, I have proven time management skills and teamwork ethic.
            Underneath my quiet nature is an adventurer, constantly seeking a new challenge. When I’m not working, you’ll find me reading or playing with my 2 little boys.`
        },

        motionskills: [
            { name: "Cinema 4D" },
            { name: "After Effects" },
            { name: "Premiere Pro" } 
        ],

        devskills: [
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Sass" },
            { name: "Vanilla.js" },
            { name: "Vue.js" },
            { name: "Node.js" },
            { name: "Ajax" },
            { name: "Bootstrap" },
            { name: "JQuery" },
            { name: "PHP" },
            { name: "MySql" },
            { name: "Drupal" },
            { name: "WordPress" },
            { name: "Python" },
            { name: "Git" },
        ],

        graphicskills: [
            { name: "Photoshop" },
            { name: "Illustrator" },
            { name: "XD" },
            { name: "InDesign" },
        ]
    }
    
});



// let waypoint1 = new Waypoint({
//     element: document.getElementById('about'),
//     handler: function(direction) {
//         document.querySelector('#about').style.opacity = 1;
//         gsap.to('#about', {y: -10, duration: .2});
//     },
//     offset: 300
// });



// let waypoint2 = new Waypoint({
//     element: document.getElementById('development'),
//     handler: function(direction) {
//         console.log('here');
//         document.querySelector('#development').style.opacity = 1;
//         gsap.to('#development', {y: -10, duration: .2});
//     },
//     offset: 300
// });


// let waypoint3 = new Waypoint({
// 	element: document.getElementById('motion'),
// 	handler: function(direction) {
//         document.querySelector('#motion').style.opacity = 1;
//         gsap.to('#motion', {y: 10, duration: .2});
//     },
//     offset: 300
// });

// let waypoint4 = new Waypoint({
// 	element: document.getElementById('contact'),
// 	handler: function(direction) {
//         document.querySelector('#contact').style.opacity = 1;
//         gsap.to('#contact', {y: 10, duration: .2});
//     },
//     offset: 300
// });

})();