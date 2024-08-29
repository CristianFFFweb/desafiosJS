let todoList = [{ id: 1666542503728, toDo: "Hacer tarea desafioLatam", estado: false },
{ id: 1724542666728, toDo: "Eliminar virus PC", estado: false },
{ id: 1726662503728, toDo: "Limpiar Habitación", estado: false },
];
let nrTareas = document.getElementById("nrTareas");
let tareasIniciales = document.getElementById("muestraTareas");
let nrRealizadas = document.getElementById("realizadas");
let eliminaTarea = document.querySelector(".eliminaTarea")
function renderizarLista() {
    let html = "";
    for (let elem of todoList) {
        html += `<article id="${elem.id}">
                        <div>ID = <b>${elem.id}</b></div>
                        <div>📑 <b>${elem.toDo}</b></div>
                        <div><input type="checkbox" id="${elem.id}" ${elem.estado ? 'checked' : ''}>
                            <label for="checkTarea">Realizada</label></div>
                        <div><button onclick="eliminarTareaLista(${elem.id})" class="eliminaTarea">❌</button> Eliminar Tarea</div>
          </article>`
         
    }
    
    tareasIniciales.innerHTML = html;
    nrTareas.innerHTML = todoList.length;
   

   

}
function contarTrue() {

    const tareasCompletadas = todoList.filter(tarea => tarea.estado == true);
    nrRealizadas.innerHTML = `${tareasCompletadas.length}`;
}

renderizarLista();
contarTrue();



function cambioEstado(lala, vf) {
    const indiceBuscado = todoList.findIndex(tarea => tarea.id == lala)
    console.log(indiceBuscado)
    if (vf == true) {
        todoList[indiceBuscado].estado = true;
        contarTrue()
    }
    else { todoList[indiceBuscado].estado = false; }
    console.log(todoList)
    contarTrue()

        ;
}
function eliminarTareaLista(id) {
    const indiceAeliminr = todoList.findIndex(tarea => tarea.id == id)
    console.log(indiceAeliminr)
   todoList.splice(indiceAeliminr,1)
    contarTrue();
    renderizarLista();

        
}



document.addEventListener('change', (event) => {


    realizadas = document.getElementById("realizadas");
    if (event.target.type === 'checkbox') {

        if (event.target.checked) {
            vf = true;
            console.log(event.target.id)
            cambioEstado(event.target.id, vf);

        } else {
            vf = false;
            cambioEstado(event.target.id, vf)


        }

    }

})



let btnAgregar = document.getElementById("btnAgregar");
let tareaInput = document.getElementById("ingresaTarea");

nrTareas.innerHTML = `${todoList.length}`

tareaInput.addEventListener('keypress', (presiona) => {
    if (presiona.key === 'Enter') {
        btnAgregar.click();
    }
});
btnAgregar.addEventListener("click", () => {


    tarea = tareaInput.value
    validador = tarea.trim()


    if (validador != "") {
        console.log(tarea)
        todoList.push({ id: Date.now(), toDo: tarea, estado: false })
        tareaInput.value = "";
        tareaInput.focus();

        renderizarLista();
        console.log(todoList);
    }

    else {
        alert("Debes ingresar una tarea");
    }
})

