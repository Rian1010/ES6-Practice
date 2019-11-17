const LANGS = document.getElementsByClassName('langs');

        const LANGSEN = document.getElementsByClassName('langsEN');
        const THEEN = document.getElementsByClassName('theEN');

        const LANGSDE = document.getElementsByClassName('langsDE');
        const THEDE = document.getElementsByClassName('theDE');

        const ENBTN = document.getElementsByClassName('enBTN');
        const DEBTN = document.getElementsByClassName('deBTN');

        window.addEventListener('DOMContentLoaded', OnLoadFunc)

        function OnLoadFunc() {
            for (i = 0; i < LANGS.length; i++) {
                THEEN[i].style.display = "none";
                LANGSDE[i].style.display = 'none';
            }
        }

        for (i = 0; i < ENBTN.length; i++) {
            ENBTN[i].addEventListener('click', function () {
                // for (i = 0; i < ENBTN.length; i++) {
                //     let enTxt = LANGSEN.indexOf;
                //     let en = "[[en]]";
                //     if (enTxt == en) {
                //         en.style.display = none;
                //     }
                // }

                //LANGSEN[0].textContent.slice(0, 5);

                // let enSlice = LANGSEN[0].indexOf("[[en]]");
                // enSlice.style.display = "none";
                for (j = 0; j < LANGS.length; j++) {
                    THEEN[j].style.display = "none";
                    LANGSDE[j].style.display = 'none';
                    THEDE[j].style.display = "none";
                    LANGSEN[j].style.display = 'inline-block';
                }
            });
        }
        for (i = 0; i < DEBTN.length; i++) {
            DEBTN[i].addEventListener('click', function () {
                // for (i = 0; i < ENBTN.length; i++) {
                //     let enTxt = LANGSEN.indexOf;
                //     let en = "[[en]]";
                //     if (enTxt == en) {
                //         en.style.display = none;
                //     }
                // }

                //LANGSEN[0].textContent.slice(0, 5);

                // let enSlice = LANGSEN[0].indexOf("[[en]]");
                // enSlice.style.display = "none";
                for (j = 0; j < LANGS.length; j++) {
                    THEDE[j].style.display = "none";
                    LANGSEN[j].style.display = 'none';
                    THEEN[j].style.display = "none";
                    LANGSDE[j].style.display = 'inline-block';
                }
            });
        }