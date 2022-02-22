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

if (isMobile.any()){
    document.body.classList.add('_touch')
    console.log('hey')
    document.querySelector('.list').style.fontSize='15px'
    document.querySelector('.list').style.padding='40px'
    document.querySelector('.avatar').style.marginTop='200px'
    document.querySelector('.info').style.fontSize='30px'
}else {
    document.body.classList.add('_pc')
}
