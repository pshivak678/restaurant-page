
import './style.css';
import  './home'
import homePage from './home';
import './menu'
import './contact'
import menuList from './menu';
import contactList from './contact';

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contactbtn = document.getElementById('contactus');

function defaultScreen(){
    const content = document.querySelector('#content');
    content.style="";
    while(content.children.length > 1){
        content.children[1].remove();
    }
}

home.addEventListener('click',function(){
    defaultScreen();
    homePage();
})

menu.addEventListener('click',function(){
    defaultScreen();
    menuList();
})

contactbtn.addEventListener('click',function(){
    defaultScreen();
    contactList();
})
