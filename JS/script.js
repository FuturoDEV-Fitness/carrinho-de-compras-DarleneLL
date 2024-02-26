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

function modificarPerfil(){
    window.location.href = "./modificarPerfil.html"
}

function validarFormulario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
       
    if (nome === "") {
        alert("Por favor, preencha o campo nome.");
    }

    if (email === "") {
        alert("Por favor, preencha o campo e-mail.");
    }
}