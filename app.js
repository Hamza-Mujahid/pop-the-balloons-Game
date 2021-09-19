let popped = 0;
let score = 0;
document.addEventListener('mouseover', (e) => {

    if (e.target.className === "theballoon") {

        e.target.style.backgroundColor = "#afafaf";
        e.target.textContent = "POP!";
        popped++;
        score++;
        lie++;
        removeEvent(e);
        checkAllPopped();
    } else if (e.target.className === "balloon") {

        e.target.style.backgroundColor = "#afafaf";
        e.target.textContent = "Wrong!";
        popped--;
        score--;
        lie--;
        removeEvent(e);
        checkAllPopped();
    }
});

removeEvent = (e) => {
    e.target.removeEventListener('mouseover', () => {

    })
};

checkAllPopped = () => {
    if (popped === 3) {
        alert('all popped!');
        let gallery = document.querySelector('#balloons');
        let message = document.querySelector('#message');
        gallery.innerHTML = '';
        message.style.display = 'block';
    } else if (life === 0) {
        location.href = "tryAgain.html"
    }
};