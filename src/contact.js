import './style.css';

export default function contactList(){
    const content = document.querySelector('#content');

    const contactcontent = document.createElement('div');
    contactcontent.classList.add('contactDiv');

    const phone = document.createElement('div');
    phone.classList.add('phone');
    phone.innerHTML = 'PHONE NUMBER<br><b>902-999-9999</b>'
    contactcontent.appendChild(phone);

    const email = document.createElement('div');
    email.classList.add('email');
    email.innerHTML = 'EMAIL<br><b>brody@toronto.com</b>'
    contactcontent.appendChild(email);

    content.appendChild(contactcontent);
}