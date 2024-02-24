function menssagem(){
    alert("Seja bem-vindo");
}

let texto = document.getElementById("texto")
let textoOrig = texto.innerHTML

texto.addEventListener("mouseover", function(){
    texto.innerHTML= "Minha biografia"
})

texto.addEventListener("mouseout", function(){
    texto.innerHTML= textoOrig
})

