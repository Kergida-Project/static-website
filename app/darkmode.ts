const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("prefers-color-scheme: dark)").matches;
/*
const iconToggle = () => {
    moonIcon?.classList.toggle("invisible");
    sunIcon?.classList.toggle("invisible");
};
*/

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
       // document.documentElement.classList.add("dark");
  //      moonIcon?.classList.add("invisible");
        return;
    }
   // sunIcon?.classList.add("invisible");
};

const themeSwitch = () => {
    if(document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
     //   iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    //iconToggle();
};

/*sunIcon?.addEventListener("click", () => {
    themeSwitch();
});

moonIcon?.addEventListener("click", () => {
    themeSwitch();
});
*/

themeCheck();

export const Theme = {
   // sunIcon,
   // moonIcon,
    userTheme,
    systemTheme,
   // iconToggle,
    themeCheck,
    themeSwitch,
}