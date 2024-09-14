var typed= new Typed(".text", {
    strings: ["Frontend Developer," , "Web Developer," , "Freelancer"],
    typeSpeed:90,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}