// Scroll into view

let scrollSections = document.getElementsByClassName('scroll-section')
let scrollBtns = document.getElementsByClassName('scroll-btn');
let aside_nav_btns = document.getElementsByClassName('aside-nav-btn');

// For large device
for (let index = 0; index < scrollBtns.length; index++) {
    scrollBtns[index].addEventListener('click', () => {
        scrollSections[index].scrollIntoView({ behavior: "smooth" });
    });

};

// For mobile and small device
for (let index = 0; index < aside_nav_btns.length; index++) {
    aside_nav_btns[index].addEventListener('click', () => {
        scrollSections[index].scrollIntoView({ behavior: "smooth" });
    });
};



// To Menu
let to_menu_btn = document.getElementById('to-menu-btn');
to_menu_btn.addEventListener('click', () => {
    scrollSections[2].scrollIntoView({ behavior: "smooth" });
});


// Aside Bar

function asideShow() {
    document.getElementById('aside').classList.toggle('aside-on');
};

let nav_menu_btn = document.getElementById('nav-menu-btn');
nav_menu_btn.addEventListener('click', asideShow);



// From left & right animation

let aniLefts = document.querySelectorAll('.aniLeft');
let aniRights = document.querySelectorAll('.aniRight');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("aniLeft")) {
        entry.target.classList.add("animation-from-left");
      }
      if (entry.target.classList.contains("aniRight")) {
        entry.target.classList.add("animation-from-right");
      }
    }
  });
});


aniLefts.forEach(el => observer.observe(el));
aniRights.forEach(el => observer.observe(el));




// Sending email account for subscrition

function sendEmailAccount(event) {
    event.preventDefault();
    let EmailAccount = document.getElementById('email').value;
    if (EmailAccount == '') {
        return;
    };

    let userEmail = { email: EmailAccount };
    let postUrl = "https://jsonplaceholder.typicode.com/posts";

    let sendEmail = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(userEmail)
    };

    async function sendData() {
        try {
            let postResponce = await fetch(postUrl, sendEmail);
            let postedData = await postResponce.json();
            console.log(postedData);
        } catch (error) {
          console.log(error);
            
        };
    };

    sendData();

};



let submitBtn = document.getElementById('form-submit-btn');
submitBtn.addEventListener('click', sendEmailAccount);