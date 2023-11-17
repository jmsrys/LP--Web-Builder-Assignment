let menubtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menubtn.onclick = () => {
    menubtn.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


window.onscroll = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }

    menubtn.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

window.onload = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }
}


// home animation
document.querySelector('.home').onmousemove = (e) => {

    document.querySelectorAll('.home-parallax').forEach(element => {
        let speed = element.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        element.style.transform = `translateX(${y}px) translateY(${x}px)`;

    });
};

document.querySelector('.home').onmouseleave = () => {

    document.querySelectorAll('.home-parallax').forEach(element => {

        element.style.transform = `translateX(0px) translateY(0px)`;

    });
};





// featured swiper
let fwrapper = document.querySelector('.featured-wrapper-box');
let fActBox = fwrapper.querySelectorAll('.box');
let FActLable = document.querySelector('.fActCircle').querySelectorAll('.fa-circle')
let fNextBtn = document.querySelector('#fNextBtn');
let fPreBtn = document.querySelector('#fPreBtn');

let fImgInd = 0;

fNextBtn.onclick = ()=>{
    fImgInd++;
    fChangeBox();
}

fPreBtn.onclick = ()=>{
    fImgInd--;
    fChangeBox();
}

let fChangeBox = () =>{
    
    if(fImgInd > fActBox.length - 1){
        fImgInd = 0;
    } else if(fImgInd < 0){
        fImgInd = fActBox.length - 1;
    }

    for(let i = 0; i < fActBox.length; i++){
        if(i === fImgInd){
            fActBox[i].classList.add('active');
            FActLable[i].classList.add('fa-solid');
            if(window.screen.width > 768){
                fwrapper.style.transform = `translateX(${fImgInd * -21}vw)`;
            }
            
        } else{            
            fActBox[i].classList.remove('active');
            FActLable[i].classList.remove('fa-solid');
        }
    }
}


// selling carousel
let rWrapper = document.querySelector('.reviewselling-wrapper-box');
let rActBox = rWrapper.querySelectorAll('.box');
let rActLable = document.querySelector('.rActCircle').querySelectorAll('.fa-circle')
let rNextBtn = document.querySelector('#rNextBtn');
let rPreBtn = document.querySelector('#rPreBtn');

let rImgInd = 0;

rNextBtn.onclick = ()=>{
    rImgInd++;
    rChangeBox();
}

rPreBtn.onclick = ()=>{
    rImgInd--;
    rChangeBox();
}

let rChangeBox = () =>{
    
    if(rImgInd > rActBox.length - 1){
        rImgInd = 0;
    } else if(rImgInd < 0){
        rImgInd = rActBox.length - 1;
    }
    for(let i = 0; i < rActBox.length; i++){
        if(i === rImgInd){
            rActBox[i].classList.add('active');
            rActLable[i].classList.add('fa-solid');
            if(window.screen.width > 768){
                rWrapper.style.transform = `translateX(${rImgInd * -24}vw)`;
            }  
        } else{            
            rActBox[i].classList.remove('active');
            rActLable[i].classList.remove('fa-solid');
        }
    }
}

// ---------------------------buying carousel
let bWrapper = document.querySelector('.reviewbuying-wrapper-box');
let bActBox = bWrapper.querySelectorAll('.box');
let bActLable = document.querySelector('.bActCircle').querySelectorAll('.fa-circle')
let bNextBtn = document.querySelector('#bNextBtn');
let bPreBtn = document.querySelector('#bPreBtn');

let bImgInd = 0;

bNextBtn.onclick = ()=>{
    bImgInd++;
    bChangeBox();
}

bPreBtn.onclick = ()=>{
    bImgInd--;
    bChangeBox();
}

let bChangeBox = () =>{
    
    if(bImgInd > bActBox.length - 1){
        bImgInd = 0;
    } else if(bImgInd < 0){
        bImgInd = bActBox.length - 1;
    }
    for(let i = 0; i < bActBox.length; i++){
        if(i === bImgInd){
            bActBox[i].classList.add('active');
            bActLable[i].classList.add('fa-solid');
            if(window.screen.width > 768){
                bWrapper.style.transform = `translateX(${bImgInd * -24}vw)`;
            } 
        } else{            
            bActBox[i].classList.remove('active');
            bActLable[i].classList.remove('fa-solid');
        }
    }
}