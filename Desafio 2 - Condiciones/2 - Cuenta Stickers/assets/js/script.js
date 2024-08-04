let valueMercedes = document.querySelector('.mercedes');
let valueOpel = document.querySelector('.opel');
let valuePorsche = document.querySelector('.porsche');
function Verificar (){
    let suma=Number(valueMercedes.value)+Number(valueOpel.value)+Number(valuePorsche.value);
    let textoValidado=document.querySelector('.textoVerificado')
console.log(valueMercedes.value);
console.log(valueOpel.value);
console.log(valuePorsche.value);
//alert("la suma de los valores da " + suma)
if (suma===0 || suma<0){
    textoValidado.innerHTML="No tienes stickers";
}
else if (suma<=10){
    textoValidado.innerHTML="Te llevas "+suma+" stickers" ;
}
else {
    textoValidado.innerHTML="Muchos stickers ("+suma+"). Recuerda que el maximo es 10" ;
}

}