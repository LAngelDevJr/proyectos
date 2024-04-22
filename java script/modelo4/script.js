let sumando=0;

function sumar(){
    const sumando2=document.getElementById("num").value;
    const resultado=parseInt(sumando2) + sumando;
    document.getElementById("resultado").innerHTML=resultado;
    sumando=resultado;
    document.getElementById("num").Value ="";
}
