const url = 'https://mindhub-xj03.onrender.com/api/amazing'; //La URL de la API
const inputTexto = document.querySelector("#texto")
const divChecks = document.getElementById("checks")
const lista = document.getElementById("lista")
let data = []

// Función para crear tarjetas
function crearTarjetas(arrayDeEventos) {
    const contenedor = document.querySelector(".card-container"); // El contenedor donde hay que agregar las tarjetas
    let tarjetasCreadas = 0;


    // Itera sobre cada objeto en el array
    arrayDeEventos.forEach((evento) => {



        if (fechaVerificada(evento, data.currentDate)) {
            // Crea un nuevo elemento de tarjeta

            // Dentro de la función crearTarjetas(arrayDeEventos)
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("col-md-4", "col-sm-6", "mb-3", "d-flex", "align-items-stretch");

            // Crea la estructura de la tarjeta
            tarjeta.innerHTML =
                `<div class="card" style="margin: 1vw">

                <div style="height: 200px; width: 100%; overflow: hidden; position: relative;">
                <img src="${evento.image}" class="card-img-top" alt="Card Image" style="object-fit: cover; width: 100%; height: 100%; position: absolute; top: 50%; transform: translateY(-50%);">
            </div>
            
                        <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${evento.name}</h5>

                        <p class="card-text mb-4" style="margin-bottom:0">${evento.description}</p>
                        <p style="margin: 0; visibility:hidden;line-height:0">
                        _______________________________________
                        _________________________________________</p>
                        
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" style="margin-top:0">Category: ${evento.category}</li>
                            <li class="list-group-item">Place: ${evento.place}</li>
                        </ul>
                        <div class="card-body" style= "margin-bottom: 0vh">
                            <p class="card-text">Date: ${evento.date}</p>
                            <p class="card-text">Price: $ ${evento.price}</p>
                        </div>
                        <div class="card-footer">
      <div style="position: absolute; bottom: 10px; right: 10px">
                <a href="./details.html?id=${evento._id}" class="btn btn-primary">Details</a>
            </div>
    </div>
                        
                        </div>
                        
                    </div>
                    
            </div>`
            // Agrega la tarjeta al contenedor
            contenedor.appendChild(tarjeta);
            tarjetasCreadas++;
        }
    });
    // Verifica si no se crearon tarjetas y muestra un mensaje en ese caso
    if (tarjetasCreadas === 0) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("col-lg-4", "mb-3", "d-flex", "align-items-stretch");

        // Crea la estructura de la tarjeta

        tarjeta.innerHTML =
            `<div class="card" style="width: 80vw; margin: 1vw;"> 
        <img src="./amazing_brand.png" class="card-img-top" alt="Card Image">
                        <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Ningún evento coincide con el criterio de búsqueda</h5>
                                                
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Category: N/A</li>
                            <li class="list-group-item">Place: N/A</li>
                        </ul>
                        <div class="card-body">
                            <p class="card-text">Date: N/A</p>
                            <p class="card-text">Price: $ N/A</p>
                        
                        </div>
                        
                        </div>
                    </div>
            </div>`
        // Agrega la tarjeta al contenedor
        contenedor.appendChild(tarjeta);
    }
}
function crearDetails(evento) {
    const contenedor = document.querySelector(".card-container"); // El contenedor donde hay que agregar las tarjetas

    // Crea un nuevo elemento de tarjeta

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("col-md-8", "col-sm-6", "mb-3", "d-flex", "align-items-stretch");

    // Crea la estructura de la tarjeta

    tarjeta.innerHTML =
        `<div class="card" style="width: 80vw; margin: 1vw;"> 
        <img src="${evento.image}" class="card-img-top" alt="Card Image">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text mb-4">${evento.description}</p>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">Category: ${evento.category}</li>
                          <li class="list-group-item">Place: ${evento.place}</li>
                          <li class="list-group-item">Capacity: ${evento.capacity}</li>
                          <li class="list-group-item">Assistance/Estimated: ${evento.assistance || evento.estimate}</li>
                          <li class="list-group-item">Date: ${evento.date}</li>
                          <li class="list-group-item">Price: $ ${evento.price}</li>
                      </ul>
                      <div class="card-footer" style= "margin-top: 1vh">
      <div style="position: absolute; bottom: 10px; right: 10px">
      <a href="./contact.html" class="btn btn-primary">Contact us</a>
            </div>
    </div>
                    </div>
                    </div>;
          </div>`

        
    // Agrega la tarjeta al contenedor
    contenedor.appendChild(tarjeta);

}

//Devuelve la verificacion de la fecha dependiendo de la página que lo solicite
function fechaVerificada(event, cDate) {
    if (document.title === "Home" || document.title === "Details") {
        return true
    }
    if (document.title === "Past Events")
        return cDate > event.date;

    if (document.title === "Upcoming Events")
        return cDate <= event.date;
}

//Detecta la escritura instantanea en searchbar
inputTexto.addEventListener("input", () => {
    filtroCruzado();
})

//Detecta el change en el checkbox
divChecks.addEventListener("change", () => {
    filtroCruzado();
})

//Filtra por texto ingresado en searchBar
function filtrarPorTexto(arregloDeElementos, texto) {
    let elementosFiltrados = arregloDeElementos.filter(elemento => elemento.toLowerCase().includes(texto.toLowerCase()));
    return elementosFiltrados;
}
//Filtra por categoría utilizando los checkbox
function filtrarPorCategoria(arregloDeElementos) {
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    let checkboxesArray = Array.from(checkboxes)
    let checkboxesFiltrados = checkboxesArray.filter(check => check.checked)
    let checkboxesValue = checkboxesFiltrados.map(check => check.value)
    console.log(checkboxesValue)
    if (checkboxesValue.length == 0) {
        return arregloDeElementos;
    }
    let elementosFiltrados = arregloDeElementos.filter(elemento => checkboxesValue.some(categoria => elemento.toLowerCase().includes(categoria)))
    return elementosFiltrados
}

//Sincroniza el uso del filtro de categoría por checkbox y texto por searchbar
function filtroCruzado() {
    // Obtiene las casillas de verificación seleccionadas
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    let categoriasSeleccionadas = Array.from(checkboxes).map((checkbox) => checkbox.value.toLowerCase());

    // Obtiene la entrada del usuario desde la barra de búsqueda
    let entradaUsuario = inputTexto.value.toLowerCase();

    // Filtra los eventos según las categorías seleccionadas y la entrada del usuario
    let eventosFiltrados = data.events.filter((evento) => {
        return (
            (categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(evento.category.toLowerCase())) &&
            (entradaUsuario === "" || evento.name.toLowerCase().includes(entradaUsuario) || evento.description.toLowerCase().includes(entradaUsuario)
                || evento.category.toLowerCase().includes(entradaUsuario) || evento.place.toLowerCase().includes(entradaUsuario))
        );
    });

    // Limpia las tarjetas existentes
    limpiarTarjetas();

    // Si no hay filtros, muestra todas las tarjetas originales, de lo contrario, muestra las tarjetas filtradas
    if (categoriasSeleccionadas.length === 0 && entradaUsuario === "") {
        crearTarjetas(data.events);
    } else {
        crearTarjetas(eventosFiltrados);
    }
}

// Función para limpiar las tarjetas existentes
function limpiarTarjetas() {
    const contenedor = document.querySelector(".card-container");
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}


//Crea los filtros checkbox por categoría -> Puede reducirse
function crearCheckbox(arrayDeEventos) {
    const categoriasUnicas = Array.from(new Set(arrayDeEventos.map(evento => evento.category)));
    const divChecks = document.getElementById("checks");

    categoriasUnicas.forEach(categoria => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = categoria;
        checkbox.className = "btn-check";
        checkbox.id = `btncheck${categoria.replace(/\s+/g, '')}`; // Elimina espacios en blanco de la categoría para el ID
        const label = document.createElement("label");
        label.className = "btn btn-outline-primary";
        label.htmlFor = `btncheck${categoria.replace(/\s+/g, '')}`;
        label.textContent = categoria;
        label.style.margin = "0.3vw";

        divChecks.appendChild(checkbox);
        divChecks.appendChild(label);
    });
}




fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json(); // Obtener datos JSON
  })
  .then(apiData => {
    // Manejar los datos aca
    data = apiData;
    console.log(data); // Esto muestra los datos en la consola
    

    // Llama a la función para crear las tarjetas utilizando el array de eventos o el evento por id, 
    // dependiendo del titulo de página

    if (document.title === "Home" || document.title === "Past Events" || document.title === "Upcoming Events") {
        crearCheckbox(data.events)
        crearTarjetas(data.events)
    }
    if (document.title === "Details") {
        //Obtengo el ID de la tarjeta en la que estoy tras presionar "More"
        const queryString = location.search;
        const params = new URLSearchParams(queryString);
        const id = params.get("id");

        let eventoPorID = data.events.find(evento => evento._id == id)
        crearDetails(eventoPorID)
}



  })
  .catch(error => {
    // Manejar errores aca
    console.error(error);
  });