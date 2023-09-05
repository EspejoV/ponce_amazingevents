const data = {
    currentDate: "2023-01-01",
    events: [
        {
            _id: "639c723b992482e5f2834be9",
            name: "Collectivities Party",
            image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
            date: "2022-12-12",
            description:
                "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            assistance: 42756,
            price: 5,
            __v: 0,
        },
        {
            _id: "639c723b992482e5f2834beb",
            name: "Korean style",
            image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
            date: "2023-08-12",
            description:
                "Enjoy the best Korean dishes, with international chefs and awesome events.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            price: 10,
            __v: 0,
            estimate: 42756,
        },
        {
            _id: "639c723c992482e5f2834bed",
            name: "Jurassic Park",
            image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
            date: "2022-11-02",
            description:
                "Let's go meet the biggest dinosaurs in the paleontology museum.",
            category: "Museum",
            place: "Field",
            capacity: 82000,
            price: 15,
            __v: 0,
            assistance: 65892,
        },
        {
            _id: "639c723c992482e5f2834bef",
            name: "Parisian Museum",
            image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
            date: "2023-11-02",
            description:
                "A unique tour in the city of lights, get to know one of the most iconic places.",
            category: "Museum",
            place: "Paris",
            capacity: 8200,
            estimate: 8200,
            price: 3500,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf1",
            name: "Comicon",
            image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
            date: "2022-02-12",
            description:
                "For comic lovers, all your favourite characters gathered in one place.",
            category: "Costume Party",
            place: "Room C",
            capacity: 120000,
            assistance: 110000,
            price: 54,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf3",
            name: "Halloween Night",
            image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
            date: "2023-02-12",
            description: "Come with your scariest costume and win incredible prizes.",
            category: "Costume Party",
            place: "Room C",
            capacity: 12000,
            estimate: 9000,
            price: 12,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf5",
            name: "Metallica in concert",
            image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
            date: "2023-01-22",
            description: "The only concert of the most emblematic band in the world.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            estimate: 138000,
            price: 150,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf7",
            name: "Electronic Fest",
            image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
            date: "2022-01-22",
            description:
                "The best national and international DJs gathered in one place.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            assistance: 110300,
            price: 250,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bf9",
            name: "10K for life",
            image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
            date: "2022-03-01",
            description: "Come and exercise, improve your health and lifestyle.",
            category: "Race",
            place: "Soccer field",
            capacity: 30000,
            assistance: 25698,
            price: 3,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bfb",
            name: "15K NY",
            image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
            date: "2023-03-01",
            description:
                "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            category: "Race",
            place: "New York",
            capacity: 3000000,
            price: 3,
            __v: 0,
            estimate: 2569800,
        },
        {
            _id: "639c723d992482e5f2834bfd",
            name: "School's book fair",
            image: "https://i.postimg.cc/Sst763n6/book1.jpg",
            date: "2023-10-15",
            description: "Bring your unused school book and take the one you need.",
            category: "Book Exchange",
            place: "Room D1",
            capacity: 150000,
            estimate: 123286,
            price: 1,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bff",
            name: "Just for your kitchen",
            image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
            date: "2022-11-09",
            description:
                "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            category: "Book Exchange",
            place: "Room D6",
            capacity: 130000,
            assistance: 90000,
            price: 100,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c01",
            name: "Batman",
            image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
            date: "2022-3-11",
            description: "Come see Batman fight crime in Gotham City.",
            category: "Cinema",
            place: "Room D1",
            capacity: 11000,
            assistance: 9300,
            price: 225,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c03",
            name: "Avengers",
            image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
            date: "2023-10-15",
            description:
                "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            category: "Cinema",
            place: "Room D1",
            capacity: 9000,
            estimate: 9000,
            price: 250,
            __v: 0,
        },
    ],
};
const inputTexto = document.querySelector("#texto")
const divChecks = document.getElementById("checks")
const lista = document.getElementById("lista")
// Función para crear tarjetas
function crearTarjetas(arrayDeEventos) {
    const contenedor = document.querySelector(".card-container"); // El contenedor donde hay que agregar las tarjetas
    let tarjetasCreadas = 0;


    // Itera sobre cada objeto en el array
    arrayDeEventos.forEach((evento) => {



        if (fechaVerificada(evento)) {
            // Crea un nuevo elemento de tarjeta

            // Dentro de la función crearTarjetas(arrayDeEventos)
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("col-md-4", "col-sm-6", "mb-3", "d-flex", "align-items-stretch");

            // Crea la estructura de la tarjeta
            tarjeta.innerHTML =
                `<div class="card" style="margin: 1vw;">

                <div style="height: 200px; overflow: hidden; position: relative;">
                <img src="${evento.image}" class="card-img-top" alt="Card Image" style="object-fit: cover; width: 100%; height: 100%; position: absolute; top: 50%; transform: translateY(-50%);">
            </div>
            
                        <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text mb-4">${evento.description}</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Category: ${evento.category}</li>
                            <li class="list-group-item">Place: ${evento.place}</li>
                        </ul>
                        <div class="card-body" style= "margin-bottom: 1vh">
                            <p class="card-text">Date: ${evento.date}</p>
                            <p class="card-text">Price: $ ${evento.price}</p>
                            
                        </div>
                        <div class="card-footer" style= "margin-top: 1vh">
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

    // Itera sobre cada objeto en el array

    // Crea un nuevo elemento de tarjeta

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("col-md-8", "col-sm-6", "mb-3", "d-flex", "align-items-stretch");

    // Crea la estructura de la tarjeta

    // <div class="card" style="width: 15rem; margin: 1vw;"> 
    tarjeta.innerHTML =
        //`<div class="card" >
        `<div class="card" style="width: 80vw; margin: 1vw;"> 
        <img src="${evento.image}" class="card-img-top" alt="Card Image">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text mb-4">${evento.description}</p>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">Category: ${evento.category}</li>
                          <li class="list-group-item">Place: ${evento.place}</li>
                          <li class="list-group-item">Capacity: ${evento.capacity}</li>
                          <li class="list-group-item">Assistance: ${evento.assistance}</li>
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
function fechaVerificada(event) {
    if (document.title === "Home" || document.title === "Details") {
        return true
    }
    if (document.title === "Past Events")
        return data.currentDate > event.date;

    if (document.title === "Upcoming Events")
        return data.currentDate <= event.date;
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



// Llama a la función para crear las tarjetas utilizando el array de eventos o el evento por id, 
// dependiendo del titulo de página

if (document.title === "Home" || document.title === "Past Events" || document.title === "Upcoming Events") {
    crearCheckbox(data.events); // Llama a la función para crear los checkboxes basados en el array de eventos
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

