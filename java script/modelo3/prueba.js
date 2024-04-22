function cambiarImagen(){ 
    const imagen=document.getElementById("imagen").src
    if(imagen==="http://127.0.0.1:5500/modelo3/sup2.jpeg"){//esto funciona en la direccion que da la pagina
        document.getElementById("imagen").src="superman.avif"
    }else{
        document.getElementById("imagen").src="sup2.jpeg"
    }
}

function nomostrar(){
    document.getElementById("imagen").style.display="none"
}

function mostrar(){document.getElementById("imagen").style.display= "block"
}

function mostrar_ruta_imagen(){ //puede ser let,cons o var para declarar una variable
    const imagen=document.getElementById("imagen").src;
    alert(imagen);
}

function condicion(){
    var numero=document.getElementById("numIput").value;//obtiene el valor del input
    numero=parseInt(numero);//cambia el valor a entero
    if(numero==1){
        document.getElementById("imagen").src="superman.avif"
    }
    else if(numero==2){
        document.getElementById("imagen").src="sup2.jpeg"
    }
    else{
        alert("elige bien carajo XDDDD!!!!!")
    }
}