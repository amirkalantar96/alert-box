"use strict";

(function dis() {
    const el = document.getElementsByClassName("opa")[0];
    
    window.addEventListener("load", () => {
        el.style.display = "flex";
    })
    // show element

    el.addEventListener("click", () => {
        el.style.display = "none";
    })
    // hide element
})()