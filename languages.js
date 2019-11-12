

// Reload anchors
// var dataReload = document.querySelectorAll("[data-reload]");

// Translations
var languages = {
    german: {
        welcome: "Herzlich Willkommen!",
        thanks: "Dankeschön für Ihren Besuch!",
        goodbye: "Auf Wiedersehen!"
    },
    english: {
        welcome: "Welcome everyone!",
        thanks: "Thank you for your visit!",
        goodbye: "Goodbye!"
    }
};

function changeLang(language) {
    welcomeTxt.textContent = languages[language].welcome;
    thankYou.textContent = languages[language].thanks;
    goodbye.textContent = languages[language].goodbye;
}

// function changeLang(language) {
//     if (language == 'german') {
//         welcomeTxt.textContent = languages.german.welcome;
//         thankYou.textContent = languages.german.thanks;
//         goodbye.textContent = languages.german.goodbye;
//     }
//     else if (language == 'english') {
//         welcomeTxt.textContent = languages.english.welcome;
//         thankYou.textContent = languages.english.thanks;
//         goodbye.textContent = languages.english.goodbye;
//     }
// }



// // Define language reload onclick illiteration
// for (i = 0; i <= dataReload.length; i++) {
//     dataReload[i].onclick = function() {
//         location.reload(true);
//     };
//     console.log(dataReload);
// }

/*
const LANGID = document.getElementById("languagesID").innerHTML = "Hello, my name is Rian.";

const SWITCHLANGBTN = document.getElementById("switchLang");

var txt = "";
var navLang = navigator.language;
var DE = "de";
var navLang = DE;

txt += "<p>Browser Language: " + navigator.language + "</p>";

SWITCHLANGBTN.addEventListener("click", LangFunction);

function LangFunction() {
    if(navigator.language == "en-GB") {
        let allTxt = document.getElementsByTagName("*");

        for(let i = 0; i < allTxt; i++) {
            allTxt[i](function() {
                eval(this);
                this.removeAttribute("lang");
                this.classList.toggle = navLang;
            });
        }
    }
}

var userLang = navigator.language || navigator.userLanguage;
alert ("The language is: " + userLang);


console.log(txt);
*/

/*LANGID.addEventListener("DOMContentLoaded", langSettings);

function langSettings() {
    return navigator.language;
};
*/