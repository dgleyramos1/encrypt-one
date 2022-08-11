"use strict";


let conteudo = document.querySelector("#conteudo");
let buttonEncrypt = document.getElementById("criptografar");
let buttonDescrypt = document.getElementById("descriptografar");
let containerResposta = document.getElementById("resposta");
let resposta = document.querySelector("#paragrafo");

containerResposta.style.display = "none";

buttonEncrypt.addEventListener("click", () => {
    let texto = removerAcentos(conteudo.value.toLowerCase());
    let result = criptografar(texto);
    resposta.value = result;
    if(resposta.value){
        conteudo.value = "Seu texto foi criptografado com sucesso!";
        document.getElementById("default").style.display = "none";
        containerResposta.style.display = "flex";
        setTimeout(function () {conteudo.value = ""}, 1200)
    }else{
        conteudo.value = "Insira um conteúdo que seja valido!";
        setTimeout(function () {conteudo.value = ""}, 1200);
        document.getElementById("default").style.display = "flex";
        containerResposta.style.display = "none";       
    }
})

buttonDescrypt.addEventListener("click", () => {
    let texto = removerAcentos(conteudo.value.toLowerCase());
    let result = descriptografar(texto);
    resposta.value = result;
    if(resposta.value){
        conteudo.value = "Seu texto foi descriptografado com sucesso!";
        document.getElementById("default").style.display = "none";
        containerResposta.style.display = "flex";
        setTimeout(function () {conteudo.value = ""}, 1200)
    }else{
        conteudo.value = "Insira um conteúdo que seja valido!";
        setTimeout(function () {conteudo.value = ""}, 1200);
        document.getElementById("default").style.display = "flex";
        containerResposta.style.display = "none";       
    }
})


function removerAcentos(string) {
    return string.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
}

function criptografar(texto){
    let textoCriptografado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
    return textoCriptografado;
}

function descriptografar(texto){
    let textoDescriptografado = texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
    return textoDescriptografado;
}


document.getElementById("copiar").addEventListener('click', function(){
    if (resposta.value) {
        navigator.clipboard.writeText(resposta.value);
        conteudo.value = "Texto copiado com sucesso!"
        setTimeout(function() {conteudo.value = ""}, 1200);
        document.getElementById("default").style.display = "flex";
        containerResposta.style.display = "none";       
        resposta.value = "";
    } else {
        conteudo.value = "Não há nada para copiar!"; 
        setTimeout(function() {conteudo.value = ""}, 1200);
    }
})
