const lamborghini = document.getElementById('diablo');
let contador=0;

lamborghini.addEventListener('click',function()
{
   
    contador++; //comienza en cero y con un click ya va en 1
    let evaluador=contador%2;
    console.log(contador);
    if((evaluador)!==0){ //evaluare si es par o impar, si es impar es el primer click y el subsiguiente
                           //entonces, borde rojo 
                           console.log("el modulo es " +  evaluador);
        lamborghini.style.borderColor = "red";
        lamborghini.style.borderWidth = "2px";
        lamborghini.style.borderStyle = "solid";
    }
    else{ //caso par, quita borde rojo
        console.log("el modulo es " +  evaluador);
        lamborghini.style.borderColor = "";
        lamborghini.style.borderWidth = "";
        lamborghini.style.borderStyle = "";
    }
})