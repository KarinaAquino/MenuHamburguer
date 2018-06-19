const menu = document.querySelector("aside");
const botao = document.querySelector("div");
const linha2 = document.querySelector("#linha2")
const linha1 = document.querySelector ("#linha1")
const linha3 = document.querySelector ("#linha3")

function tirarlinha2(){
    if(linha2.classList.contains("ativo")){
        linha2.classList.remove("ativo");
    }
    else{
        linha2.classList.add("ativo");
    }
}

function girarbaixo(){
    if(linha1.classList.contains("work")){
        linha1.classList.remove("work");
    }
    else{
        linha1.classList.add("work");
    }
}

function girarcima(){
    if(linha3.classList.contains("agoravai")){
        linha3.classList.remove("agoravai");
    }
    else{
        linha3.classList.add("agoravai");
    }
}

function deslizar(){
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
    }
    else{
        menu.classList.add("active");
    }
}

botao.onclick = deslizar;
linha2.onclick = tirarlinha2;
linha1.onclick = girarbaixo;
linha3.onclick = girarcima;