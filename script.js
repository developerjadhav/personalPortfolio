let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

let sidemenu = document.getElementById("sidemenu");

let navLinks = document.getElementsByClassName("nav-links");

function openTab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openMenu() {
    sidemenu.style.right = "0";
}

function closeMenu() {
    sidemenu.style.right = "-200px";
}

// ---------------for closing nav links sidemenu on mobile device -------------

for(i = 0; i < navLinks.length; i++){
navLinks[i].addEventListener('click', () => {
    sidemenu.style.right = "-200px";
})
}

// ---------------For Contact Me Form submmition to google sheet----------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbzpyMEJDNWFGS7EW0fldjG-uiNz94-rL4p3FVRKBmRuGcKKmvCP0FUo9zKAHHq02vk/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(() => {
                msg.innerHTML = "";
            },2000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})