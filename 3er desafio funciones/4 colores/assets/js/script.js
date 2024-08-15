

function pintaNegro(evento) {
   
    const clickDiv = evento.target;
    clickDiv.style.backgroundColor = "black";
    
   
  }

 
  const divs = document.querySelectorAll('div');
  divs.forEach(div => div.addEventListener('click', pintaNegro)); 

