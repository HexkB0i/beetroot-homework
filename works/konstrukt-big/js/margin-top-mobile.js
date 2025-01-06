let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

// Adapting the navbar
let nav = document.getElementById('nav');

function padNav(){
    nav.style.paddingTop = '50px';
    nav.style.gap = '10px';
};

function resizeDecor(){
    document.querySelector('.black-bar').style.width = '20px';
};

function navAdapt(){
    if(vw < 400){
        padNav();
        resizeDecor();
    }else if(vw < 700){
        padNav();
    }else{};
};

navAdapt();