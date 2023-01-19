import './style.css';

export default function homePage(){
    const content = document.querySelector("#content");
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-div');

    const homeText = document.createElement('div');
    homeText.classList.add('home');
    homeText.innerHTML="HOME";
    homeDiv.appendChild(homeText);

    const aboutus = document.createElement('div');
    aboutus.classList.add('aboutus');
    aboutus.innerText ="Since our modest beginnings in 2005 with a little space in Torontos stylish Yorkville locale, Brody Bar development has been enlivened with the energy to cook and serve solid, Indian - roused takeout food.In contrast to other Indian eateries, brody bar was made with the explicit expectation to appear as something else.We realize numerous individuals love Indian sustenance, yet a large number of them loathe or are unconscious of the regularly unfortunate fixings that make run - of - the - mill Indian nourishment taste so great.Our menu highlights things that utilize the sound and fragrant flavors, however, forget the stuffing ghee, spread, oil, and overwhelming cream.";
    homeDiv.appendChild(aboutus);

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML="Monday 10AM-10PM<br>Tuesday 10AM-10PM<br>Wednesday 10AM-10PM<br>Thursday 10AM-10PM<br>";
    homeDiv.appendChild(hours);

    const location = document.createElement('div');
    location.classList.add('location');
    location.innerHTML="1333 SOUTH PARK STREET<br> Halifax";
    homeDiv.appendChild(location);
    content.appendChild(homeDiv);
}

