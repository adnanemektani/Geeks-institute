
function playSound(letter) {
   
    const audio = document.querySelector(`audio[data-key="${letter.toUpperCase()}"]`);
    const key = document.querySelector(`.key[data-key="${letter.toUpperCase()}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    
    key.classList.add('playing');
}


window.addEventListener('keydown', (e) => {
    playSound(e.key);
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', function() {
        const letter = this.querySelector('kbd').textContent;
        playSound(letter);
    });
});

keys.forEach(key => {
    key.addEventListener('transitionend', function(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    });
});