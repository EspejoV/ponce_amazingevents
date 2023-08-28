let eventos = [{
    _id: 1,
    image: "food_fair.jpg",
    name: "Festival of the collectivities",
    date: "2022-12-12",
    description: "Enjoy your favorite dishes from different countries in a unique event for the whole family.",
    category: "Food Fair",
    place: "Room A",
    capacity: 45000,
    assistance: 42756,
    price: 5
},
{
    _id: 2,
    image: "outing_to_the_museum.jpg",
    name: "Art Exhibition",
    date: "2022-11-02",
    description: "Let's go to the art museum for an incredible tour to learn about the largest dinosaurs.",
    category: "Museum",
    place: "Field",
    capacity: 82000,
    assistance: 65892,
    price: 15
},
{
    _id: 3,
    image: "costume_party.jpg",
    name: "Halloween Night",
    date: "2024-02-12",
    description: "Come in your scariest costume character to win amazing prizes.",
    category: "Costume Party",
    place: "Room C",
    capacity: 12000,
    estimate: 9000,
    price: 12
},
{
    _id: 4,
    image: "music_concert.jpg",
    name: "Metallica in concert",
    date: "2024-01 - 22",
    description: "The only concert of the most emblematic band in the world",
    category: "Music Concert",
    place: "Room A",
    capacity: 138000,
    estimate: 138000,
    price: 150
},
{
    id: 5,
    image: "marathon.jpg",
    name: "10K for life",
    date: "2022-03-01",
    description: "Come and exercise, improve your health and lifestyle.",
    category: "Race",
    place: "Soccer Field",
    capacity: 30000,
    assistance: 25698,
    price: 3
},
{
    _id: 6,
    image: "books.jpg",
    name: "School Book Fair",
    date: "2022 - 10 - 15",
    description: "Bring your unused school book and bring the one you need.",
    category: "Book Exchange",
    place: "Room D1",
    capacity: 150000,
    assistance: 123286,
    price: 1
},
{
    _id: 7,
    image: "cinema.jpg",
    name: "Avengers",
    date: "2023-10-15",
    description: "Marvel's Avengers 3d premiere the start of an epic saga with your best superheroes",
    category: "Let's go to the cinema",
    place: "Room D1",
    capacity: 9000,
    estimate: 9000,
    price: 250
}]

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

// Función para crear tarjetas
function crearTarjetas(arrayDeEventos) {
    const contenedor = document.querySelector(".card-container"); // El contenedor donde deseas agregar las tarjetas



    // Itera sobre cada objeto en el array
    arrayDeEventos.forEach((evento) => {



        if (fechaVerificada(evento) == true) {
            // Crea un nuevo elemento de tarjeta
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("col-lg-4", "mb-3", "d-flex", "align-items-stretch");

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
                        </ul>
                        <div class="card-body">
                            <p class="card-text">Date: ${evento.date}</p>
                            <p class="card-text">Price: $ ${evento.price}</p>
                            <a href="#" class="btn btn-primary">Details</a>
                        </div>
                        
                        </div>
                    </div>;
            </div>`
            // Agrega la tarjeta al contenedor
            contenedor.appendChild(tarjeta);
        }
    });
}
function separarFecha(fecha) {
    let year = "";
    let month = "";
    let day = "";
    let contador = 0;
    for (let letra of fecha) {
        if (letra == "-") {
            contador++;
        }
        else {
            if (contador == 0) {
                year += letra;
            }
            if (contador == 1) {
                month += letra;
            }
            if (contador == 2) {
                day += letra;
            }
        }
    }
    console.log("fecha es", year, month, day)
    return {
        year: year,
        month: month,
        day: day
    };
}

// Para upcoming: 1) Si el año current > event entonces True, independiente de mes y dia.
//          2) Si año current === event Y mes current > event , significa que el mes va a venir despues, entonces True
//          3) Si año current === event Y mes current === event , entonces día debe ser current > event para True
function fechaVerificada(event) {
    objetoFechaActual = separarFecha(data.currentDate);
    let cYear = objetoFechaActual.year;
    let cMonth = objetoFechaActual.month;
    let cDay = objetoFechaActual.day;

    objetoFechaEvento = separarFecha(event.date);
    let eYear = objetoFechaEvento.year;
    let eMonth = objetoFechaEvento.month;
    let eDay = objetoFechaEvento.day;

    return (cYear > eYear)
        || (cYear === eYear && cMonth > eMonth)
        || (cYear === eYear && cMonth === eMonth && cDay > eDay);
}
// Llama a la función para crear las tarjetas utilizando el array de eventos
//crearTarjetas(eventos);

crearTarjetas(data.events);

