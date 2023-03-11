/*  animação do menu  */

function ativarMenu(ativado){
    const bar1 = document.querySelector(".menu-bar1");
    const bar2 = document.querySelector(".menu-bar2");
    const bar3 = document.querySelector(".menu-bar3");
    const button = document.querySelector(".menu-button");

    const options = document.querySelector(".menu-options");

    if(ativado){   
        bar2.setAttribute("style", "transform: scale(0);");
        setTimeout(() => {
            bar1.setAttribute("style", "top: 18px;");
            bar3.setAttribute("style", "top: 18px;");
        }, 100);
        setTimeout(() => {
            bar1.setAttribute("style", "top: 18px; transform: rotate(45deg);");
            bar3.setAttribute("style", "top: 18px; transform: rotate(-45deg);");
            button.setAttribute("onclick", "ativarMenu(false)");
        }, 400);

        options.setAttribute("style", "transform: translate(0%);");

    }else{            
        bar1.setAttribute("style", "top: 18px; transform: rotate(0deg);");
        bar3.setAttribute("style", "top: 18px; transform: rotate(0deg);");            
        setTimeout(() => {
            bar1.setAttribute("style", "top: 6px;");
            bar3.setAttribute("style", "top: 30px;");
        }, 300);
        setTimeout(() => {
            bar2.setAttribute("style", "transform: scale(1);");
            button.setAttribute("onclick", "ativarMenu(true)");
        }, 400);

        options.setAttribute("style", "transform: translate(-100%);");
    };
};

function ativarMenuOtherScreen() {
        const options = document.querySelector(".menu-options");
        const optionsOtherScreen = document.querySelector(".menu-options-other-screen");

        const button = document.querySelector(".menu-button");

    if(window.innerWidth > 769) {
        options.setAttribute("class", "menu-options-other-screen");
        options.setAttribute("style", "transform: scale(0);");
        setTimeout(() => {
            options.setAttribute("style", "transform: scale(1); transition: all .3s ease;");
        }, 300);

        button.setAttribute("style", "transform: scale(0);");
        setTimeout(() => {
            button.setAttribute("style", "display: none;");
        },300);
    }else{
        optionsOtherScreen.setAttribute("class", "menu-options");
        optionsOtherScreen.setAttribute("style", "transform: scale(0); transition: all 0s ease");
        setTimeout(() => {
            optionsOtherScreen.setAttribute("style", "translate(-100%); transition: all .8s ease;");
            ativarMenu(false);
        }, 300);
        setTimeout(() => {
            optionsOtherScreen.setAttribute("style", "transform: scale(1) trasnlate(-100%);");
        }, 1100);

        button.setAttribute("style", "transform: scale(1);");
        setTimeout(() => {
            button.setAttribute("style", "display: block;");
        },300);
    };
};
ativarMenuOtherScreen();