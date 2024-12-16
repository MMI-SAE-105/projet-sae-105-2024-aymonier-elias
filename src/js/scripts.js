const menuBtn = document.querySelector('.menu__btn-nav');
const nav = document.querySelector('.nav');


menuBtn.addEventListener("click", () =>{
    toggle(menuBtn, nav)
});


function toggle (btn, menu)  {
    const isOpen = btn.ariaExpanded === "true";
    const isClosed = !isOpen;

    menu.ariaHidden = isOpen;
    btn.ariaExpanded = isClosed;
}