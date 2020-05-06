console.log('Slider ready!');


let titles = document.querySelectorAll('.header__inner__nav__title');


const headerTitle = document.getElementById('header__title');
const headerSubTitle = document.getElementById('header__subtitle');




titles = Array.from(titles);

navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        const navData = e.target.dataset.shore.toUpperCase();

        console.log(e);


        let headerTitleText = headerTitle.innerText;

        if (navData !== headerTitleText) {
            anime({
                targets: [headerTitle, headerSubTitle],
                translateX: 150,
                scale: 0,
                opacity: 0,
                duration: 200
            });

            setTimeout(function () {
                headerTitle.innerText = navData;

                anime({
                    targets: headerTitle,
                    translateX: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 200
                });
            }, 400);

            setTimeout(function () {

                switch (navData) {
                    case "NORTH SHORE":
                        headerSubTitle.innerText = 'RADICAL';
                        break;

                    case "SOUTH SHORE":
                        headerSubTitle.innerText = 'CALM';
                        break;

                    case "WEST SHORE":
                        headerSubTitle.innerText = 'WEST CALM';
                        break;

                    case "EAST SHORE":
                        headerSubTitle.innerText = 'EAST RADICAL';
                        break;
                }

                anime({
                    targets: headerSubTitle,
                    translateX: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 200
                });
            }, 500);

            for (i = 0; i < navLine.length; i++) {
                navLine[i].classList.remove('active');
            }
            e.target.nextElementSibling.classList.add('active');
        }
        else {
            anime({
                targets: [headerTitle, headerSubTitle],
                keyframes: [
                    { translateY: -100 },
                    { translateY: 0 }
                ],
                duration: 200,
                easing: 'easeOutElastic(1, .8)',
            });
        }
    });
});