let seeAbout = document.getElementById('about-me-heading');
const aboutBtn = document.getElementById('about-button');
let seeProjects = document.getElementById('project-heading');
const projectsBtn = document.getElementById('projects-button');
let seeContact = document.getElementById('connect-heading');
const contactBtn = document.getElementById('contact-button');

aboutBtn.addEventListener("click", function(){
    seeAbout.scrollIntoView();
});

// projectsBtn.addEventListener("click", function(){
//     seeProjects.scrollIntoView();
// })

contactBtn.addEventListener("click", function() {
    seeContact.scrollIntoView();
})