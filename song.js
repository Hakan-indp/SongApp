window.addEventListener(`load` , () => {
    const sounds = document.querySelectorAll(`.sound`);
    const pads = document.querySelectorAll(`.pads div`);
    console.log(sounds[0])
    const visual = document.querySelector(`.visual`)
    const colors = [
        " #33FF39 ",
        " #FF336B",
        " #33ECFF",
        "#C62540 ",
        "#25C62E ",
        "#25B0C6 "
    ]

pads.forEach(pad, index => {
    pad.addEventListener("click", function() {
        sounds[index].currentTime = 0;
        sounds[index].play();
        createBunbbles(index);

    });
    
});


const createBunbbles = () => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
}
});