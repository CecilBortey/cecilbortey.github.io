let navbar = document.getElementById('nav-bar');

window.onscroll = () =>{
    navbar.classList.toggle('shadow', window.scrollY)
}

let sendemailbtn = document.getElementById('button');

let clientemail;
let message;
let subject;
sendemailbtn.onclick = () =>{
    let params = {
        subject : document.getElementById('subject'),
        clientemail : document.getElementById('client-email').value,
        message : document.getElementById('client-message').value,
    }

    emailjs.send('service_kfvg3la','template_8wdedfr',params).then(alert('Email sent succesfully'))
}