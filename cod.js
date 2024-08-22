const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const munieco = document.querySelector(".caja-muneico");
var contenedor = document.querySelector(".cajon-parrafo");
var respuesta = document.querySelector(".texto-respuesta");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(textoDone){
    changeMess();
    var cuadrotexto = recuperarTexto()
    respuesta.textContent = encriptarTexto(textoDone)
    cuadrotexto = cuadrotexto.toLowerCase();
    
    
    if (!cuadrotexto.trim()){
    alert('El campo de texto está vacío. Ingrese el texto a encriptar')
    return;
    }
    respuesta.textContent = encriptar(cuadrotexto);  
    
}


function desencriptar(){
    changeMess();
    var cuadrotexto = recuperarTexto()
    respuesta.textContent = desencriptarTexto(cuadrotexto);
}

function recuperarTexto(){
    var cuadrotexto = document.querySelector(".cuadrotexto")
    return cuadrotexto.value
}

function changeMess(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoDone = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoDone = textoDone + "ai"
        }
        else if(texto[i] == "e"){
            textoDone = textoDone + "enter"
        }
        else if(texto[i] == "i"){
            textoDone = textoDone + "imes"
        }
        else if(texto[i] == "o"){
            textoDone = textoDone + "ober"
        }
        else if(texto[i] == "u"){
            textoDone = textoDone + "ufat"
        }
        else{
            textoDone = textoDone + texto[i]
        }
    }
    return textoDone;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoDone = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoDone = textoDone + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoDone = textoDone + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoDone = textoDone + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoDone = textoDone + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoDone = textoDone + "u"
            i = i+3;
        }
        else{
            textoDone = textoDone + texto[i];
        }
        
    }

    return textoDone;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-respuesta").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
    alert("El mensaje encriptado ha sido copiado con éxito")
});

