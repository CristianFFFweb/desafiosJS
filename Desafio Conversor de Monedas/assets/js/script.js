const monedaSection = document.getElementById("monedaSelect");
const apiURL = "https://mindicador.cl/api";
const inputValor = document.getElementById("inputValor");
const btnConvertir = document.getElementById("btnConvertir")
const resultado = document.getElementById("resultado")
const chartDOM = document.getElementById("myChart");

let datosMonedas = {};
let myChart; 




async function getValor() {
  try {
    const valores = await fetch(apiURL);
    const datosMonedas = await valores.json();
    return datosMonedas;
  } catch (error) {
    alert(error.message);
  }
}

async function actualizarDOM() {
  try {
    const datos = await getValor();
    let html = "<option>Selecciona un tipo de cambio</option>"


    for (let prop in datos) {
      if (datos.hasOwnProperty(prop)) {

        const moneda = datos[prop];
        if (moneda.codigo && moneda.unidad_medida === "Pesos") {
          html += `<option value="${moneda.codigo}">${moneda.nombre}</option>`;
          datosMonedas[moneda.codigo] = { ...moneda }
        }
      }

    }
    console.log(datosMonedas)
    monedaSection.innerHTML = html;

  } catch (error) {
    console.error('Error al actualizar el DOM:', error);
  }
}
console.log(datosMonedas)


btnConvertir.addEventListener('click', () => {
  const valorIngresado = inputValor.value;
  console.log(valorIngresado)
  const monedaSeleccionada = datosMonedas[monedaSection.value];
  console.log(monedaSeleccionada)
  console.log(monedaSeleccionada.valor)
  let conversor = valorIngresado * monedaSeleccionada.valor
  resultado.innerHTML = conversor;
  
}

)


monedaSection.addEventListener('change', function () {
  let seleccion = document.querySelector(".boxMoneda");
  
  const opcionSeleccionada = monedaSection.options[monedaSection.selectedIndex];
  valorSeleccionado = opcionSeleccionada.value;
  //console.log(`lalalala  ${opcionSeleccionada}`);
  //console.log(`wajawajajaj ${valorSeleccionado}`);
  const endpoint = `https://mindicador.cl/api/${valorSeleccionado}`;
  //console.log(endpoint)
  
  async function graficaOpcion(valorSeleccionado) {
    
    console.log(endpoint)
    const res = await fetch(endpoint);
    const seleccionGrafico = await res.json();
    console.log(seleccionGrafico)
    return seleccionGrafico;
  }

  function prepararConfiguracionParaLaGrafica(seleccionGrafico) {

    const tipoDeGrafica = "line";
    const datosHistoricos = seleccionGrafico.serie;
    console.log(datosHistoricos)
    const ejeTiempo = datosHistoricos.slice(-10).map((el) => 
      el.fecha);
    const titulo = `${valorSeleccionado}`;
    const colorDeLinea = "red";
    const valores = datosHistoricos.map((el) => {
      const valor = el.valor.toString().replace(",", ".");
      return Number(valor);
      
    });
  
  const config = {
    type: tipoDeGrafica,
    data: {
      labels: ejeTiempo,
      datasets: [{
        label: titulo,
        backgroundColor: colorDeLinea,
        data: valores
      }
      ]
    }
  };
 return config;}
 
 async function renderGrafica() {
 
  const monedas = await graficaOpcion();
  const config = prepararConfiguracionParaLaGrafica(monedas);
  
  
  
    if (myChart) {
      myChart.destroy();
    }
  
 
 myChart= new Chart(chartDOM, config);
  }
  renderGrafica();
 
  
    
  
  seleccion.innerHTML = `<h3> El valor de ${valorSeleccionado} es ${datosMonedas[valorSeleccionado].valor} pesos</h3>
  `
  resultado.innerHTML = ""; 
});

actualizarDOM();  