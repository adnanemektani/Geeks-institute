// ====== Daily Challenge Daily challenge: Tell the story


 let form = document.getElementById('libform');

 form.addEventListener('submit', (event) => {
            event.preventDefault();
            let Noun = document.getElementById('noun').value;
            let Adj = document.getElementById('adjective').value;
            let person = document.getElementById('person').value;
            let Verb = document.getElementById('verb').value;
            let place = document.getElementById('place').value;

            if (Noun === "" || Adj === "" || person === "" || Verb === "" || place === "") {
                alert("u should be completee all cases!!");
                return;
            }
            let story = `Hada wa7ed l-khayna smitu ${person}. Wa7ed l-nhar mcha l ${place} bach i-${Verb} wa7ed l-${Noun} ${Adj}. Kolchi bqa kiy-chouf fih u kiy-de77ek!`;

            document.getElementById('story').innerText = story;

        })

 let shuffleBtn = document.getElementById('shuffle');

shuffleBtn.addEventListener('click', () => {
    
    let Noun = document.getElementById('noun').value;
    let Adj = document.getElementById('adjective').value;
    let person = document.getElementById('person').value;
    let Verb = document.getElementById('verb').value;
    let place = document.getElementById('place').value;

    
    let stories = [
        `Once upon a time, ${person} saw a ${Adj} ${Noun} in ${place} and decided to ${Verb} it!`,
        `In ${place}, everyone was shocked when ${person} started to ${Verb} with a ${Adj} ${Noun}.`,
        `${person} found a ${Adj} ${Noun} while they were trying to ${Verb} in the middle of ${place}.`
    ];

    let randomIndex = Math.floor(Math.random() * stories.length);
    document.getElementById('story').innerText = stories[randomIndex];
});

// ====== Daily Challenge 2

// ====== Daily Challenge 3
