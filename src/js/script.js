import allInstrumentals from './music-list';

const   wrapper = document.querySelector(".wrapper"),
        musicName = document.querySelector(".song-details .name"),
        musicImg = document.querySelector(".img-area img");

let musicIndex = 3; 

window.addEventListener("load", () => {
    loadMusic(musicIndex); // Calling load music function once window loaded.
})

// load music function
function loadMusic(indexNumb) {

    document.querySelector(".song-details .name").innerText = allInstrumentals[indexNumb - 1].name;
    document.querySelector(".img-area img").src = require(`../images/${allInstrumentals[indexNumb - 1].img}.png`); 
}

/*
    console.log("IMG => ", allInstrumentals[0].img);
    console.log("NAME => ", allInstrumentals[0].name);
    console.log("SRC => ", allInstrumentals[0].src);

    console.log("Wrapper =", wrapper);
    console.log("musicImg =", musicImg);
    console.log("musicName =", musicName);
*/