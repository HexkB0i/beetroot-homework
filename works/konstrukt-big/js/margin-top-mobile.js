let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

let nav = document.getElementById('nav');
//let blackBar = document.querySelector('.black-bar');

if(vw < 430){
    nav.style.marginTop = '50px';
    nav.style.gap = '10px';
    document.querySelector('.black-bar').style.width = '20px';
}else{};
