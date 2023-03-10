let SearchBtn = document.querySelector('#search-btn');
let SearchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('#.navbar');
let videobtn=document.querySelectorAll('#vid-btn');



window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBtn.classList.remove('active');
}

menu.classList.remove('fa-times');
navbar.classList.remove('active');

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

SearchBtn.addEventListener('click',() =>{
    SearchBtn.ClassList.toggle('fa-times');
    SearchBtn.ClassList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active')
})


formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});



videobtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})