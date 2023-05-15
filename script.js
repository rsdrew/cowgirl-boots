document.getElementById('ticket').addEventListener('click', (e) => {
    let button = e.target;
    button.innerHTML = 'LOADING';
    setTimeout(() => {
        button.classList.add('hidden');
        document.getElementById('success').classList.remove('hidden');
        button.addEventListener('click', () => {return false;});
    }, 2000);
});