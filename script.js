let htmlEl = document.getElementById("html-el");

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlEl.classList.add('dark');
} else {
    htmlEl.classList.remove('dark');
}

function changeColorMode() {
    if(htmlEl.classList.contains("dark")) {
        htmlEl.classList.remove("dark");
    } else {
        htmlEl.classList.add("dark");
    }
    editButton();
}

function editButton() {
    let darkModeButton = document.getElementById("darkMode-btn");
    let dmDot = document.getElementById("dm-dot");
    if(htmlEl.classList.contains("dark")) {
        darkModeButton.className = "bg-gray-200 h-6 w-11 border-2 rounded-full cursor-pointer";
        dmDot.className = "translate-x-5 inline-block h-5 w-5 rounded-full bg-white shadow transition ease-in-out duration-200";
    } else {
        darkModeButton.className = "bg-gray-700 h-6 w-11 border-2 rounded-full cursor-pointer";
        dmDot.className = "translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transition ease-in-out duration-200";
    }
}
