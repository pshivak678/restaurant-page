import './style.css';
import burger from './burger.png';
import chicken from './chicken-leg.png';
import icecream from './ice-cream.png';
import pizza from './pizza.png';
import softdrink from './soft-drink.png';
import wine from './wine.png';

export default function menuList(){
    const content = document.querySelector('#content');

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menudiv');

    const burgerDiv = document.createElement('div');
    burgerDiv.classList.add('div');
    const burgerimg = document.createElement('img');
    burgerimg.src = burger;
    burgerimg.classList.add('image');
    burgerDiv.innerHTML='The name "hamburger" comes from the seaport town of<br> Hamburg, Germany, where it is thought that<br> 19th-century sailors brought back the<br> idea of raw shredded chicken<br>7$'
    burgerDiv.appendChild(burgerimg);
    menuDiv.appendChild(burgerDiv);
    content.appendChild(menuDiv);

    const chickenDiv = document.createElement('div');
    chickenDiv.classList.add('div');
    const chickenimg = document.createElement('img');
    chickenimg.src = chicken;
    chickenimg.classList.add('image');
    chickenDiv.innerHTML='A chicken nugget is a food product<br> consisting of a small piece of<br> deboned chicken meat that is breaded or<br> battered, then deep-fried or baked.<br> 10$'
    chickenDiv.appendChild(chickenimg);
    menuDiv.appendChild(chickenDiv);
    content.appendChild(menuDiv);
    

    const icecreamDiv = document.createElement('div');
    icecreamDiv.classList.add('div');
    const icecreamimg = document.createElement('img');
    icecreamimg.src = icecream;
    icecreamimg.classList.add('image');
    icecreamDiv.innerHTML='Ice cream is a sweetened frozen<br> food typically eaten as a snack or<br> dessert. It may be made from milk or cream <br>and is flavoured with a sweetener<br>5$'
    icecreamDiv.appendChild(icecreamimg);
    menuDiv.appendChild(icecreamDiv);
    content.appendChild(menuDiv);

    const pizzaDiv = document.createElement('div');
    pizzaDiv.classList.add('div');
    const pizzaimg = document.createElement('img');
    pizzaimg.src = pizza;
    pizzaimg.classList.add('image');
    pizzaDiv.innerHTML='Pizza is a dish of Italian origin<br> consisting of a usually round,<br> flat base of leavened wheat-based<br> dough topped with tomatoes, cheese,<br> and often various other ingredients<br> 15$'
    pizzaDiv.appendChild(pizzaimg);
    menuDiv.appendChild(pizzaDiv);
    content.appendChild(menuDiv);

    const softdrinkDiv = document.createElement('div');
    softdrinkDiv.classList.add('div');
    const softdrinkimg = document.createElement('img');
    softdrinkimg.src = softdrink;
    softdrinkimg.classList.add('image');
    softdrinkDiv.innerHTML='Cola is a carbonated soft drink <br>flavored with vanilla, cinnamon, citrus<br> oils and other flavorings.<br> Cola became popular worldwide after<br> the American pharmacist John Stith<br> 2$'
    softdrinkDiv.appendChild(softdrinkimg);
    menuDiv.appendChild(softdrinkDiv);
    content.appendChild(menuDiv);

    const wineDiv = document.createElement('div');
    wineDiv.classList.add('div');
    const wineimg = document.createElement('img');
    wineimg.src = wine;
    wineimg.classList.add('image');
    wineDiv.innerHTML='whiskey is a type of distilled<br> alcoholic beverage made <br>from fermented grain mash. Various grains <br>are used for different varieties.<br> $depends'
    wineDiv.appendChild(wineimg);
    menuDiv.appendChild(wineDiv);
    content.appendChild(menuDiv);
}

