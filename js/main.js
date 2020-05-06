let navItems = document.querySelectorAll('.header__inner__nav__data');
let navLine = document.querySelectorAll('.header__inner__nav__line');
let dots = document.querySelectorAll('.dot');

navItems = Array.from(navItems);
navLine = Array.from(navLine);
dots = Array.from(dots);

const dotSize = {
    small: 'M365 228C366.657 228 368 226.657 368 225C368 223.343 366.657 222 365 222C363.343 222 362 223.343 362 225C362 226.657 363.343 228 365 228Z',
    large: 'M573.5 326C577.09 326 580 323.09 580 319.5C580 315.91 577.09 313 573.5 313C569.91 313 567 315.91 567 319.5C567 323.09 569.91 326 573.5 326Z'
}

console.log(dotSize.large);


for (let i = 0; i < navItems.length; i++) {

    if (navLine[i].classList.contains('active')) {

        const activeItem = navItems[i].dataset.shore.toLowerCase();
        const activeDot = dots[i].dataset.dot.toLowerCase();

        if (activeItem === activeDot) {

            dots[i].classList.add('active');

            dots[i].setAttribute('d', dotSize.large);

            anime({
                targets: dots[i],
                opacity: 1,
                delay: 3000,
                duration: 300,
                easing: 'linear'
            });
        }
    }

}


window.onload = () => {
    console.log('Main.js loaded!');

    const map = document.querySelector('.header__map-svg');

    let shoreLine = document.querySelector('.shore-line');
    let currentLine = document.querySelector('.current-line');

    const shoreLineLength = shoreLine.getTotalLength();
    const currentLineLength = currentLine.getTotalLength();

    anime({
        targets: map,
        opacity: 1,
        delay: 0,
        duration: 1000,
        easing: 'linear'
    });

    let showDelay = 0;

    for (i = 0; i < dots.length; i++) {
        showDelay += 500;

        if (!dots[i].classList.contains('active')) {
            anime({
                targets: dots[i],
                opacity: 1,
                delay: showDelay,
                duration: 300,
                easing: 'linear'
            });
        }
    }

    anime({
        targets: shoreLine,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000
    });

    anime({
        targets: currentLine,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        delay: 1800,
        duration: 1000
    });
}




