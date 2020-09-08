
// SLIDE

window.load = slide(1);
var bgNumber = 1;
 
function slide(n) {
    var todasImg = 3;

    document.getElementById('imagemFundo').style.backgroundImage = `url('img/${n}.png')`;
    
    if(n == 1) {
        document.getElementById('txtImagem').innerHTML = '<div id="txtImagem">> Como forma de aprendizado, criei essa descontraida página para apresentar minha trajetória dentro da programação!<br> Sempre evoluindo...</div><div><img src="img/ash.png" id="ash"></div>'
    } else if(n == 2) {
        document.getElementById('txtImagem').innerHTML = '<div id="txtImagem2">> Todo conteúdo da página foi desenvolvido por mim em JavaScript, HTML5, CSS3 e Python.</div><div><img src="img/ash2.png" id="ash2"></div>'
    } else {
        document.getElementById('txtImagem').innerHTML = '<div id="txtImagem3">“Algo poderoso que aprendi enquanto programador e que devemos aplicar na realidade é:ERRAR RÁPIDO!”<br> (Ayrton Yagami)</div><div><img src="img/ash3.png" id="ash3"></div>'
    }

    botoes(n, todasImg);
    todasImg = n;
}


// Setas Anterior e Proximo

function anterior() {
    if(bgNumber > 1) {
        bgNumber --;
        slide(bgNumber);
    }
}

function proximo() {
    if(bgNumber < 3) {
        bgNumber ++;
        slide(bgNumber);
    }
}



// Efeito dos Botoes (1, 2 e 3)

function botoes(n, m) {
    document.getElementById('botoes').innerHTML = "";
    for(a = 1; a <= m; a++) {
        if(a == n) {
            document.getElementById('botoes').innerHTML += `<li id='selec' onclick='slide("${a}")'>${a}</li>`;
            document.getElementById('botoes').innerHTML += `<li id='anel'></li>`;
        } else {
            document.getElementById('botoes').innerHTML += `<li id='naoselec' onclick='slide("${a}")'>${a}</li>`;
        }
    }
}

