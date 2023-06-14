const header = document.querySelector('.header')
window.addEventListener("scroll", () => {
    
    header.classList.toggle('scroll', window.scrollY>7)
});

const menuHambuguer = document.querySelector("#menu-hamburguer")
const linkMobile = document.querySelectorAll("#linkM")
menuHambuguer.addEventListener("click", () => {
    let nav = document.querySelector(".navMobile")
   
    nav.classList.toggle('active')
})

function fecharNav(){
    let nav = document.querySelector(".navMobile")
    let input = document.querySelector("#menu-hamburguer")
    input.checked = false;
    nav.classList.toggle('active')
}

const fecharMobile = ()=>{
    let nav = document.querySelector(".navMobile")
    nav.classList.remove('active')
    removerFundo()
}

