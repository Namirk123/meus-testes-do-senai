// SCRIPT SUPER AVANÇADO DO MEU SITE
// feito por mim, programador profissional

// POPUP QUE APARECE NA CARA DO USUARIO
window.onload = function() {
    // alerta 1
    alert("BEM VINDO AO MEU SITE!!!! VOCE É O VISITANTE NUMERO 1.000.000!!!");

    // alerta 2
    alert("CLIQUE EM OK PARA CONTINUAR NAVEGANDO NO MELHOR SITE DO MUNDO");

    // alerta 3
    alert("NAO ESQUEÇA DE FAVORITAR ESTE SITE!! CTRL+D AGORA!!!!");

    // mostra popup
    document.getElementById("popup-overlay").style.display = "flex";

    // inicia contador
    iniciarContador();

    // inicia emojis flutuantes
    criarEmojisFlutuantes();

    // toca som (vai falhar mas tudo bem)
    try {
        var audio = new Audio("musica_fundo.mp3");
        audio.loop = true;
        audio.volume = 1.0;
        audio.play();
    } catch(e) {
        // ignora erro
    }
};

// FECHAR POPUP
function fecharPopup() {
    var popup = document.getElementById("popup-overlay");
    popup.style.display = "none";

    // confirma saida
    var resposta = confirm("Tem certeza que quer fechar? Você pode estar perdendo a MELHOR OFERTA DA SUA VIDA!!!!");
    if (resposta == false) {
        popup.style.display = "flex";
    }
}

// CONTADOR DE VISITAS FAKE
var numeroVisitas = 1847392;
function iniciarContador() {
    var el = document.getElementById("numero-visitas");
    if (!el) return;
    setInterval(function() {
        numeroVisitas = numeroVisitas + Math.floor(Math.random() * 5) + 1;
        el.textContent = String(numeroVisitas).padStart(8, "0");
    }, 800);
}

// CURSOR COM RASTRO
var rastros = [];
document.addEventListener("mousemove", function(e) {
    var rastro = document.createElement("div");
    rastro.style.cssText = "position:fixed;pointer-events:none;z-index:99999;font-size:16px;transition:all 0.5s;";
    rastro.textContent = "★";
    rastro.style.left = e.clientX + "px";
    rastro.style.top  = e.clientY + "px";
    rastro.style.color = ["#FF0000","#00FF00","#0000FF","#FF00FF","#FFFF00"][Math.floor(Math.random()*5)];
    document.body.appendChild(rastro);
    rastros.push(rastro);

    // remove depois de 600ms
    setTimeout(function() {
        if (rastro.parentNode) rastro.parentNode.removeChild(rastro);
    }, 600);

    // limita quantidade de rastros
    if (rastros.length > 50) {
        var velho = rastros.shift();
        if (velho && velho.parentNode) velho.parentNode.removeChild(velho);
    }
});

// EMOJIS FLUTUANTES ALEATORIOS
function criarEmojisFlutuantes() {
    var emojis = ["🎉","💥","⭐","🔥","💸","🏆","🎊","💎","🚀","❤️"];
    setInterval(function() {
        var emoji = document.createElement("div");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.cssText = [
            "position:fixed",
            "font-size:" + (20 + Math.random() * 30) + "px",
            "left:" + Math.random() * 90 + "vw",
            "top:100vh",
            "z-index:9998",
            "pointer-events:none",
            "transition:top 4s linear, opacity 1s",
            "opacity:1"
        ].join(";");
        document.body.appendChild(emoji);

        setTimeout(function() {
            emoji.style.top = "-10vh";
        }, 50);

        setTimeout(function() {
            emoji.style.opacity = "0";
        }, 3000);

        setTimeout(function() {
            if (emoji.parentNode) emoji.parentNode.removeChild(emoji);
        }, 4200);
    }, 1200);
}

// MUDANCA DE COR DO FUNDO A CADA SEGUNDO
var coresFundo = ["#00FF00","#FFFF00","#FF9900","#00FFFF","#FF00FF","#FF6666","#99FF99"];
var indiceCorFundo = 0;
setInterval(function() {
    document.body.style.backgroundColor = coresFundo[indiceCorFundo];
    indiceCorFundo = (indiceCorFundo + 1) % coresFundo.length;
}, 1500);

// ALERT AO TENTAR SAIR DA PAGINA
window.onbeforeunload = function() {
    return "ESPERA!!!! Você tem certeza que quer SAIR? Ainda tem SUPER OFERTAS aqui!!!";
};

// CLIQUE DIREITO BLOQUEADO COM MENSAGEM
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    alert("CLIQUE DIREITO BLOQUEADO!!! Este site é PROTEGIDO POR DIREITOS AUTORAIS!!! Proibido copiar!!!");
});

// BOTAO DE COMPRAR COM LOGICA HORRIVEL
function comprar(produto) {
    var confirma1 = confirm("Você realmente quer comprar " + produto + "?");
    if (!confirma1) {
        alert("Você perdeu a oferta! Preço pode aumentar a qualquer momento!!!");
        return;
    }

    var nome = prompt("Digite seu NOME COMPLETO:");
    if (!nome || nome.length < 2) {
        alert("NOME INVALIDO!!!");
        comprar(produto); // recursão infinita se o usuário errar
        return;
    }

    var cpf = prompt("Digite seu CPF (sem pontos e traços):");
    var cartao = prompt("Digite o NUMERO DO CARTÃO DE CREDITO:");
    var cvv = prompt("Digite o CVV do cartão:");
    var vencimento = prompt("Digite a data de vencimento:");

    alert("PEDIDO REALIZADO COM SUCESSO para " + nome + "!!! Produto: " + produto + " será entregue em 3 a 90 dias úteis!!!");
    alert("NUMERO DO PEDIDO: " + Math.floor(Math.random() * 999999) + " ANOTE ESTE NUMERO!!!");
}

// SCROLL QUE FAZ O SITE TREMER
var scrollCount = 0;
window.addEventListener("scroll", function() {
    scrollCount++;
    if (scrollCount % 5 === 0) {
        document.body.style.transform = "translateX(" + (Math.random() * 4 - 2) + "px)";
        setTimeout(function() {
            document.body.style.transform = "translateX(0)";
        }, 100);
    }
});

// TROCA DE TITULO DA ABA A CADA SEGUNDO
var titulos = [
    "🔥 SUPER OFERTA!!!",
    "⚡ COMPRE AGORA!!!",
    "💸 ECONOMIZE 90%!!!",
    "👉 CLIQUE AQUI!!!",
    "🎉 VOCE GANHOU!!!",
    "‼️ ULTIMA CHANCE!!!"
];
var indiceTitulo = 0;
setInterval(function() {
    document.title = titulos[indiceTitulo];
    indiceTitulo = (indiceTitulo + 1) % titulos.length;
}, 1000);

// POPUP DEPOIS DE 5 SEGUNDOS (nao relacionado ao primeiro)
setTimeout(function() {
    alert("OLHA SO!!! Você está há 5 segundos no site. Isso significa que você se interessa pelos nossos produtos!!! Aproveite o DESCONTO ESPECIAL de 0,5%!!!");
}, 5000);

// POPUP DEPOIS DE 10 SEGUNDOS
setTimeout(function() {
    var email = prompt("Cadastre seu EMAIL para receber PROMOÇÕES EXCLUSIVAS (não é opcional):");
    if (!email) {
        alert("Sem email = sem promoções. MAS TUDO BEM, vai ficar sem desconto mesmo.");
    } else {
        alert("Email " + email + " cadastrado!!!! Você receberá apenas 47 emails por dia!!!");
    }
}, 10000);

// FUNCAO QUE NAO FAZ NADA
function funcaoImportante() {
    var x = 1 + 1;
    return x;
}

// CONSOLE LOG DESNECESSARIO
console.log("Site carregado!!!");
console.log("Se você está lendo isso é porque é HACKER!! Saiba que vou te processar!!!");
console.log("Proibido mexer no codigo fonte deste site!!");