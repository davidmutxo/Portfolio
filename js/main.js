//skills animation


function skill(){
    const skills= document.querySelector("#skills")
    skills.style.opacity='1'
    skills.style.top ='-150px'
}

const skillsBtn= document.querySelector("#skillsBtn")
skillsBtn.addEventListener('click', skill)