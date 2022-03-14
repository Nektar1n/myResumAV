"use strict"

const isMobile = {
    Android: () => {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: () => {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: () => {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: () => {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: () => {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: () => {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

const avatar=document.querySelector('.avatar')

if (isMobile.any()){
    document.body.classList.add('_touch')
    console.log('hey')
    document.querySelectorAll('.list').forEach((list)=>{
        list.style.fontSize='1.1rem'
        list.style.padding='40px'
    })
    // document.querySelector('.list').style.fontSize='15px'
    // document.querySelector('.list').style.padding='40px'
    document.querySelector('.avatar').style.marginTop='50px'
    document.querySelector('.info').style.fontSize='1.1rem'
    document.querySelector('.info').style.display='block'
    document.querySelector('.info').style.textAlign='center'
    document.querySelector('.avatar').style.height='300px'
}else {
    document.body.classList.add('_pc')
}

