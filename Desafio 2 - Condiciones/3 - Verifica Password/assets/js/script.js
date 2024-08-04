let select1=document.getElementById('primero');
let select2=document.getElementById('segundo');
let select3=document.getElementById('tercero');
let textoResultado=document.querySelector('.resultado');

function VerificaPass(){
    let password=select1.value+select2.value+select3.value;
console.log(select1.value);
console.log(select2.value);
console.log(select3.value);
console.log(password)
// empiezo con las condiciones para verificar la password
if(password=='911'){
    textoResultado.innerHTML="Password 1 correcta";
}
else if(password=='714'){
    textoResultado.innerHTML="Password 2 correcta"
}
else {
     textoResultado.innerHTML="Password incorrecta"
}


}