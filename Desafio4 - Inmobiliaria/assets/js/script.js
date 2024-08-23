 const propiedades_alquiler = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones:4,
        baños:4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños:1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños:3,
        costo: 4500,
        smoke: false,
        pets: true
    },

    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&xid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños:2,
        costo: 2000,
        smoke: false,
        pets: true
    }

]

const propiedades_venta = [
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños:3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños:2,
        costo: 2200,
        smoke: false,
        pets: false
    },

    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños:3,
        costo: 4500,
        smoke: false,
        pets: true
    },

    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&xid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños:2,
        costo: 2000,
        smoke: false,
        pets: true
    }

   
]



const botonVentas=document.getElementById("btnVenta");
const botonAlquiler=document.getElementById("btnAlquiler");
/* const botonTodasVentas=document.getElementById("ventaTodo");
const botonTodoAlquiler=document.getElementById("alquilerTodo") */
let html="";

;
let cuentaclickVenta=1;
let cuentaclickAlquiler=1;

function iterarPropiedades(propiedades,param,numeroMostrar)
{ 
  
  let contador=1;
for (let props of propiedades){

  if (contador<=numeroMostrar){
html +=`
<div class="col-md-4 mb-4">
            <div class="card">
<img src="${props.src}" class="card-img-top" alt="Imagen del departamento"/>

<div class="card-body">
<h5 class="card-title">${props.nombre}</h5>
<p class="card-text">${props.descripcion}</p>
<p>
  <i class="fas fa-map-marker-alt"></i>${props.ubicacion}
</p>
<p>
  <i class="fas fa-bed"></i>${props.habitaciones} Habitaciones |
  <i class="fas fa-bath"></i>  ${props.baños} Baños
</p>
<p><i class="fas fa-dollar-sign"></i> ${props.costo}</p>
 ${props.smoke ?  
        `<p class="text-success">
          <i class="fas fa-smoking"></i> Permitido fumar
        </p>`
      : `<p class="text-danger">
          <i class="fas fa-smoking-ban"></i> No se permite fumar

        </p>`}
      ${props.pets ?  
        `<p class="text-success">
          <i class="fas fa-paw"></i> Mascotas permitidas
        </p>`
      : `<p class="text-danger">
          <i class="fas fa-ban"></i> No se permiten mascotas
        </p>`}
</div>
</div>
</div>`;

}

contador++;
}
datos.innerHTML=html;
boton = document.getElementById(`${param}Prop`);
boton.innerHTML=`<a href="/propiedades_${param}.html" class="btn btn-dark" id="${param}Todo">Ver todas las propiedades en ${param}</a
        >`
html="";        
}


botonVentas.addEventListener('click', function()
  { let numeroMostrar=3;
    let acum=cuentaclickVenta;
    let h2Venta=document.getElementById("h2Venta");
  h2Venta.innerHTML="Propiedades en Venta" ;
  let param='venta';
  cuentaclickVenta++;
  console.log(`van ${acum} clics`);
  datos=document.getElementById("ventaTarjeta");
  if (acum<=1){
  iterarPropiedades(propiedades_venta,param,numeroMostrar)};

}); 

botonAlquiler.addEventListener('click', function()

 { let numeroMostrar=3;
  let acum=cuentaclickAlquiler;
  let h2Alquiler=document.getElementById("h2Alquiler");
  h2Alquiler.innerHTML="Propiedades en Alquiler" 
  let param='alquiler';
  cuentaclickAlquiler++;
  console.log(`van ${acum} clics`);
  datos=document.getElementById("alquilerTarjeta");
  if (acum<=1){
  iterarPropiedades(propiedades_alquiler,param,numeroMostrar)}; 
  
}); 


