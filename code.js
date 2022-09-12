window.onload= function(){
    document.querySelectorAll('.navegationBarItem').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    console.log("Ready");
}