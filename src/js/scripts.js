const menuBtn = document.querySelector('.menu__btn-nav');
const nav = document.querySelector('.nav');

const soundBtn = document.querySelector('.controls__sound-btn');
const controleAudio = document.querySelector('.controls__audio')

menuBtn.addEventListener("click", () =>{
    toggle(menuBtn, nav)
});

soundBtn.addEventListener("click", () =>{
    toggle(soundBtn, controleAudio)
});


function toggle (btn, menu)  {
    const isOpen = btn.ariaExpanded === "true";
    const isClosed = !isOpen;

    menu.ariaHidden = isOpen;
    btn.ariaExpanded = isClosed;
}