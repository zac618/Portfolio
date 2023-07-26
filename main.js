let seeAbout = document.getElementById('about-me-item');
const aboutBtn = document.getElementById('about-button');
let seeProjects = document.getElementById('project-item');
const projectsBtn = document.getElementById('projects-button');
let seeContact = document.getElementById('contact-me-items');
const contactBtn = document.getElementById('contact-button');

aboutBtn.addEventListener("click", function(){
    seeAbout.scrollIntoView({block: "center"});
});

projectsBtn.addEventListener("click", function(){
    seeProjects.scrollIntoView({block: "center"});
})

contactBtn.addEventListener("click", function() {
    seeContact.scrollIntoView({block: "center"});
})