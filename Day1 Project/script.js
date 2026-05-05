const body = document.body;
const title = document.getElementById("title");
const nightBtn = document.getElementById("nightBtn");
const dayBtn = document.getElementById("dayBtn");

/* Apply Theme */
function setTheme(mode){
    body.classList.remove("dark", "light");

    if(mode === "dark"){
        body.classList.add("dark");
        title.innerText = "Under this moon, everything feels softer 🌙";
    } else {
        body.classList.add("light");
        title.innerText = "In your light, I feel alive 🌞";
    }

    localStorage.setItem("theme", mode);
}

/* Button Events */
nightBtn.addEventListener("click", () => setTheme("dark"));
dayBtn.addEventListener("click", () => setTheme("light"));

/* Load Saved Theme */
const savedTheme = localStorage.getItem("theme");

if(savedTheme){
    setTheme(savedTheme);
} else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
}