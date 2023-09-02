const propiedadesVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banos: 2,
        costo: 356000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: ' 789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 3,
        banos: 2,
        costo: 186000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 7,
        banos:4,
        costo: 819000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Cabaña acogedora Llifen',
        src: 'https://media.istockphoto.com/id/1141078602/es/foto/emerald-lake-en-un-d%C3%ADa-nublado-con-su-lago-descongelado-verano-y-diversi%C3%B3n-monta%C3%B1as-rocosas-de.jpg?s=612x612&w=0&k=20&c=QQ5OlM5s6xQ5K8A45edQ3qfe8LjAN5ha2o2a7dGS8xk=',
        descripcion: 'Acogedora cabaña ubicada al centro de la naturaleza de Llifén, con una vista espectacular cercana a ríos, lagos y cascadas',
        ubicacion: 'km 7, Llifén, comuna de Lago Ranco',
        habitaciones: 3,
        banos: 2,
        costo: 187000,
        smoke: true,
        pets: true
    }
]

const propiedadesAlquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazónde la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 200000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: ' 872 Mountain Everest, CA 23456',
        habitaciones: 4,
        banos: 2,
        costo: 189000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: 'Main Street, Anytown, CA 91234',
        habitaciones: 5,
        banos: 4,
        costo: 560000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Apartamento Vista al Lago',
        src: 'https://www.virapropiedades.cl/wp-content/uploads/departamento-en-arriendo-en-condominio-plaza-schwerter-puerto-varas-01.jpg',
        descripcion: 'Lujoso apartamento ubicado frente al lago Llanquihue',
        ubicacion: 'Antonio Varas, Puerto Varas, región de Los Ríos',
        habitaciones: 3,
        banos: 2,
        costo: 800000,
        smoke: true,
        pets: true
    }
]
console.log(window.location.pathname);
const locationHtml = window.location.pathname;
if (locationHtml == "/index.html") {
    const indexVentas = document.getElementById("index-ventas");
    console.log('indexVentas:' ,indexVentas );
    const indexAlquiler = document.getElementById("index-alquiler");
    let htmlIndexVentas = "";
    let htmlIndexAlquiler ="";
    for(let i = 0; i < 3;i++ ) {
        console.log('elemento: ', propiedadesVenta[i]);
        const smoke = (propiedadesVenta[i].smoke)
                        ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' 
                        : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
        const pet = (propiedadesVenta[i].pets)
                        ?'<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                        :'<p class="text-danger"><i class="fas fa-ban"></i> Mascotas no permitidas</p>'
        const smokeAlquiler = (propiedadesAlquiler[i].smoke)
                        ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' 
                        : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
        const petAlquiler = (propiedadesAlquiler[i].pets)
                        ?'<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                        :'<p class="text-danger"><i class="fas fa-ban"></i> Mascotas no permitidas</p>'
        htmlIndexVentas += `<div class="col-md-4 mb-4">
                                    <div class="card">
                                    <img
                                        src="${propiedadesVenta[i].src}"
                                        class="card-img-top"
                                        alt="${propiedadesVenta[i].descripcion}"
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">
                                        ${propiedadesVenta[i].nombre}
                                        </h5>
                                        <p class="card-text">
                                        ${propiedadesVenta[i].descripcion}
                                        </p>
                                        <p>
                                        <i class="fas fa-map-marker-alt"></i> ${propiedadesVenta[i].ubicacion}
                                        </p>
                                        <p>
                                        <i class="fas fa-bed"></i> ${propiedadesVenta[i].habitaciones} Habitaciones |
                                        <i class="fas fa-bath"></i> ${propiedadesVenta[i].banos} Baños
                                        </p>
                                        <p><i class="fas fa-dollar-sign"></i> ${propiedadesVenta[i].costo}</p>
                                        ${smoke}
                                        ${pet}
                                    </div>
                                    </div>
                                </div>`;
        htmlIndexAlquiler += `<div class="col-md-4 mb-4">
                                    <div class="card">
                                    <img
                                        src="${propiedadesAlquiler[i].src}"
                                        class="card-img-top"
                                        alt="${propiedadesAlquiler[i].descripcion}"
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">
                                        ${propiedadesAlquiler[i].nombre}
                                        </h5>
                                        <p class="card-text">
                                        ${propiedadesAlquiler[i].descripcion}
                                        </p>
                                        <p>
                                        <i class="fas fa-map-marker-alt"></i> ${propiedadesAlquiler[i].ubicacion}
                                        </p>
                                        <p>
                                        <i class="fas fa-bed"></i> ${propiedadesAlquiler[i].habitaciones} Habitaciones |
                                        <i class="fas fa-bath"></i> ${propiedadesAlquiler[i].banos} Baños
                                        </p>
                                        <p><i class="fas fa-dollar-sign"></i> ${propiedadesAlquiler[i].costo}</p>
                                        ${smokeAlquiler}
                                        ${petAlquiler}
                                    </div>
                                    </div>
                                </div>`;
    }
    indexVentas.innerHTML= htmlIndexVentas
    indexAlquiler.innerHTML = htmlIndexAlquiler
    
}
else if(locationHtml=="/propiedades_alquiler.html"){
    const alquileres = document.getElementById("alquiler");
    let htmlAlquiler ="";
    for(let alquiler of propiedadesAlquiler){
        console.log("elemento alquiler: ", alquiler)
        const smoke = (alquiler.smoke)
                        ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' 
                        : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
        const pet = (alquiler.pets)
                        ?'<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                        :'<p class="text-danger"><i class="fas fa-ban"></i> Mascotas no permitidas</p>'
        htmlAlquiler += `<div class="col-md-4 mb-4">
                            <div class="card">
                            <img
                                src="${alquiler.src}"
                                class="card-img-top"
                                alt="${alquiler.descripcion}"
                            />
                            <div class="card-body">
                                <h5 class="card-title">
                                ${alquiler.nombre}
                                </h5>
                                <p class="card-text">
                                ${alquiler.descripcion}
                                </p>
                                <p>
                                <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}
                                </p>
                                <p>
                                <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |
                                <i class="fas fa-bath"></i> ${alquiler.banos} Baños
                                </p>
                                <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
                                ${smoke}
                                ${pet}
                            </div>
                            </div>
                        </div>`;
    }
    alquileres.innerHTML = htmlAlquiler;
}
else {
    const ventas = document.getElementById("ventas");
    let htmlVentas ="";
    for(let venta of propiedadesVenta){
        console.log("elemento venta: ", venta)
        const smoke = (venta.smoke)
                        ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' 
                        : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
        const pet = (venta.pets)
                        ?'<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                        :'<p class="text-danger"><i class="fas fa-ban"></i> Mascotas no permitidas</p>'
        htmlVentas += `<div class="col-md-4 mb-4">
                            <div class="card">
                            <img
                                src="${venta.src}"
                                class="card-img-top"
                                alt="${venta.descripcion}"
                            />
                            <div class="card-body">
                                <h5 class="card-title">
                                ${venta.nombre}
                                </h5>
                                <p class="card-text">
                                ${venta.descripcion}
                                </p>
                                <p>
                                <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}
                                </p>
                                <p>
                                <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
                                <i class="fas fa-bath"></i> ${venta.banos} Baños
                                </p>
                                <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
                                ${smoke}
                                ${pet}
                            </div>
                            </div>
                        </div>`;
    }
    ventas.innerHTML = htmlVentas;
}