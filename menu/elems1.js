function createElems1() {
    let div = document.createElement("div");
    div.setAttribute("ontouchstart", "");

    div.innerHTML = `  
        <div class="elems1">  
            <a href="/block5/menu/menu.html" aria-label="Выйти в меню">  
                <div class="back"></div>  
            </a>  
            <div class="sound"></div>  
        </div>  
    `;
    document.body.prepend(div);
}
createElems1();


// музыка для страниц меню

const audioElem = document.getElementById("music");
const url = window.location.href;
audioElem.src = "/block5/music/menu.ogg";
audioElem.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
});
audioElem.play();

const sound = document.querySelector(".sound");
audioElem.muted = true;
sound.classList.add("no-sound");
sound.addEventListener("click", () => {
    audioElem.muted = !audioElem.muted;
    sound.classList.toggle("no-sound");
});
