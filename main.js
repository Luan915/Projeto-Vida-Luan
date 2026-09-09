const botoes = document.querrySelectorAll(".botao");

for (let i=0<botoes.lenght; i++) {
    botoes[i].onclick = function (){
        botoes[i].classlist.add("ativo");
    };
}
