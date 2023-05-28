const header = document.querySelector('.header')
window.addEventListener("scroll", () => {
    
    header.classList.toggle('scroll', window.scrollY>7)
});

const menuHambuguer = document.querySelector("#menu-hamburguer")
menuHambuguer.addEventListener("click", () => {
    let nav = document.querySelector(".navMobile")
   
    nav.classList.toggle('active')
})
const fecharMobile = ()=>{
    let nav = document.querySelector(".navMobile")
    nav.classList.remove('active')
    removerFundo()
}

