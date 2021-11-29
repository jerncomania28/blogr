const menuBtn = document.querySelector(".menu");
const menuBurger = document.querySelector(".menu-burger");

const nav = document.querySelector("nav");

const menu = document.querySelector("menus");



let showMenu = false;


menuBtn.addEventListener("click" ,toggleMenu);



function toggleMenu(){

    if(!showMenu){

        console.log(menuBurger);
        menuBurger.classList.add('open');
        nav.classList.add('open');


        showMenu = true;
    }else{
        menuBurger.classList.remove("open");
        nav.classList.remove('open');

        showMenu = false;
    }
}