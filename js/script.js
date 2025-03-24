

"use strict";


/**
 * Light and Dark mode
 * */ 

const /** {Node element} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /** {Node element} */ $HTML = document.documentElement;
let  /** {Beloon | String} */ isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

const changeTheme = () => {

    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

$themeBtn.addEventListener("click", changeTheme);

/**
 * TAB
 */

// const /**{Node list} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
// let /**{Node element} */ [lastActiveTab] = document.querySelectorAll("[data-tab-content]");
// let /**{Node element} */ [lastActiveTabBtn] = $tabBtn;

// $tabBtn.forEach(item => {
//     item.addEventListener("click", function () {
//         lastActiveTab.classList.remove("active");
//         lastActiveTabBtn.classList.remove("active");

//         const /**{Node element} */ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
//         $tabContent.classList.add("active");
//         this.classList.add("active");

//         lastActiveTab = $tabContent;
//         lastActiveTabBtn = this;

//     });
// });

/**
 * CHATGPT JS
 */

document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        document.querySelector(`[data-tab-content="${button.dataset.tabBtn}"]`).classList.add('active');
    });
});