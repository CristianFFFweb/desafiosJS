let color = "";
const nuevoDiv = document.createElement('div');
document.querySelector('body').appendChild(nuevoDiv)
nuevoDiv.id = "key";
nuevoDiv.style.width = "200px"
nuevoDiv.style.height = "200px"
nuevoDiv.style.backgroundColor = "white";
nuevoDiv.style.border = "2px solid black"
const nuevoDiv2 = document.createElement('div');
        document.querySelector('body').appendChild(nuevoDiv2)
        nuevoDiv2.id = "key2";
        nuevoDiv2.style.width = "200px"
        nuevoDiv2.style.height = "200px"
        nuevoDiv2.style.backgroundColor = "white";
        nuevoDiv2.style.border = "2px solid black";
        nuevoDiv2.style.display = "none";

document.addEventListener("keydown", function (event) {
    if (event.key === 'a' || event.key === 'A') {
        color = "pink";
        console.log(color)
        pintarDiv(color)


    }
    else if (event.key === 's' || event.key === 'S') {
        color = "orange";
        console.log(color)
        pintarDiv(color)
    }
    else if (event.key === 'd' || event.key === 'D') {
        color = "skyblue";
        console.log(color)
        pintarDiv(color)
    }
    if (event.key === 'q' || event.key === 'Q' || event.key === 'w' || event.key === 'W' || event.key === 'e' || event.key === 'E'){
        nuevoDiv2.style.display = "block"; 
        
        if (event.key === 'q' || event.key === 'Q') {
            color = "purple";
            console.log(color)
            pintarDiv2(color)
    
    
        }
        else if (event.key === 'w' || event.key === 'W') {
            color = "gray";
            console.log(color)
            pintarDiv2(color)
        }
        else if (event.key === 'e' || event.key === 'E') {
            color = "sienna";
            console.log(color)
            pintarDiv2(color)
        }
        else { 
            nuevoDiv2.style.display = "none";
          }
    }
})


function pintarDiv(color) {
    nuevoDiv.style.backgroundColor = color;
}
function pintarDiv2(color) {
    nuevoDiv2.style.backgroundColor = color;
}
