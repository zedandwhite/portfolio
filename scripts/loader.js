let loaderwrapper = document.getElementById('loader-wrapper');
let loaderFG = document.getElementsByClassName('loader-fg');
let loaderBar = document.getElementById('loader-bar');
let maxWidth = loaderBar.offsetWidth;
let currentValue = 0;

function startLoader(){

    function updateCounter() {
        if (currentValue < 100) {
            let increament = Math.floor(Math.random() * 10) + 1;
            currentValue = Math.min(currentValue + increament, 100);
            loaderFG[0].style.width = (currentValue / 100) * maxWidth + 'px';

            let delay = Math.floor(Math.random() * 200) + 25;
            setTimeout(updateCounter, delay);

        }
    }
    updateCounter();
}

startLoader();

function loaderCompletion() {
    if (currentValue >= 100) {
        tl.to(
            loaderBar, {
                duration:0.5,
                clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)',
                ease: 'power4.inOut',
            }
        );
        tl.to(
            loaderwrapper,{
                duration:1,
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
                ease: 'power4.inOut',
            }
        );
    } else {
        setTimeout(loaderCompletion, 100);
    }
}

loaderCompletion();
