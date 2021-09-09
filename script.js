//Hidding all projects
let projects = document.getElementsByClassName('project');
for (let i = 0; i< projects.length; i++){
    projects[i].style.display = 'none'
};
//Hide and show Mixed Messages Project
const mixedMessagesProject = document.getElementById('mixed-messages');
const mixedTitle = document.getElementById('mixed-title');
function sHMixed(){
    if (mixedMessagesProject.style.display === 'none'){
        mixedMessagesProject.style.display = 'flex';
    } else{
        mixedMessagesProject.style.display = 'none';
    }
}
mixedTitle.addEventListener('click', sHMixed)
//Hide and show Company Homepage Project
const companyHomepageProject = document.getElementById('company-homepage');
const companyTitle = document.getElementById('company-title');
function sHCompany(){
    if(companyHomepageProject.style.display === 'none'){
        companyHomepageProject.style.display = 'flex';
    } else{
        companyHomepageProject.style.display = 'none';
    }
}
companyTitle.addEventListener('click', sHCompany)
//Hide and show CSS Cheatsheet project
const cheatsheetProject = document.getElementById('css-cheatsheet');
const cheatsheetTitle = document.getElementById('cheatsheet-title');
function sHCheatsheet(){
    if(cheatsheetProject.style.display === 'none'){
        cheatsheetProject.style.display = 'flex';
    } else{
        cheatsheetProject.style.display = 'none'
    }
}
cheatsheetTitle.addEventListener('click', sHCheatsheet)