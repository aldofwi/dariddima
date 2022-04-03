import allInstrumentals from 'music-list';

const   wrapper = document.querySelector(".wrapper"),
        musicImg = wrapper.querySelector(".img-area img"),
        musicName = wrapper.querySelector(".song-details .name");

let musicIndex = 0; 

window.addEventListener("load", () => {
    loadMusic(musicIndex); // Calling load music function once window loaded.
})

console.log("Nom du son --> ", allInstrumentals[musicIndex].name);

// load music function
function loadMusic(indexNumb) {
    musicName.innerText = allInstrumentals[indexNumb].name;
    musicImg.src = `images/${allInstrumentals[indexNumb - 1].img}.png`;
}
