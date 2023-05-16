document.getElementById('ticket').addEventListener('click', (e) => {
    let button = e.target;
    button.innerHTML = 'LOADING';
    let x = 0;
    let loadingAnimation = setInterval(() => {
        let percent = x * .3;
        x++;
        button.style.background = `linear-gradient(to right, var(--dark-yellow) ${percent}%, var(--bright-yellow) ${percent}%)`;

        if(percent >= 120) {
            clearInterval(loadingAnimation);

            let body = document.getElementById('body');
            let info = document.getElementById('info');
            let divider = document.getElementById('divider');

            body.style.opacity = 0;
            info.style.opacity = 0;
            divider.style.opacity = 0;
            button.style.opacity = 0;

            setTimeout(() => {
                info.classList.add('hidden');
                button.classList.add('hidden');

                let youreIn = document.getElementById('youre-in');
                let code = document.getElementById('code');
                
                code.classList.remove('hidden');
                youreIn.classList.remove('hidden');

                setTimeout(() => {
                    body.style.opacity = 1;
                    code.style.opacity = 1;
                    divider.style.opacity = 1;
                    youreIn.style.opacity = 1;
                }, 500);
            }, 500);
        }
    }, 1);
});