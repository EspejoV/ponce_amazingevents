const url = 'https://mindhub-xj03.onrender.com/api/amazing'; //La URL de la API
let data = []
let categorias = []

//Itera el array de eventos para determinar cuál posee mayor asistencia, devuelve el evento como objeto
function mayorAsistencia(arrayDeEventos) {
    let eventoConMayorAsistencia = {};
    let mayorAsistencia = 0;

    arrayDeEventos.forEach((evento) => {
        let asistencia = (evento.assistance * 100) / evento.capacity;
        if (asistencia > mayorAsistencia) {
            eventoConMayorAsistencia = evento;
            mayorAsistencia = asistencia;
        }
    })
    return eventoConMayorAsistencia;
}

//Itera el array de eventos para determinar cuál posee menor asistencia, devuelve el evento como objeto
function menorAsistencia(arrayDeEventos) {
    let eventoConMenorAsistencia = {};
    let menorAsistencia = arrayDeEventos[0].assistance * 100 / arrayDeEventos[0].capacity;

    arrayDeEventos.forEach((evento) => {
        let asistencia = (evento.assistance * 100) / evento.capacity;
        if (asistencia < menorAsistencia) {
            eventoConMenorAsistencia = evento;
            menorAsistencia = asistencia;
        }
    })
    return eventoConMenorAsistencia;
}

//Itera el array de eventos para determinar cuál posee mayor capacidad, devuelve el evento como objeto
function mayorCapacidad(arrayDeEventos) {
    let eventoConMayorCapacidad = {};
    let mayorCapacidad = 0;

    arrayDeEventos.forEach((evento) => {
        let capacidad = evento.capacity;
        if (capacidad > mayorCapacidad) {
            eventoConMayorCapacidad = evento;
            mayorCapacidad = capacidad;
        }
    })
    return eventoConMayorCapacidad;
}

//Recibe un array de eventos y una categoría, devuelve un objeto de categoría.
function estadisticaPorCategoriaEventosPasados(arrayDeEventos, categoria) {
    let revenues = 0;
    let attendance = 0;
    let capacity = 0;

    arrayDeEventos.forEach((evento) => {

        if (evento.category === categoria && evento.assistance != null) {
            revenues += (evento.assistance * evento.price);
            attendance += evento.assistance;
            capacity += evento.capacity;
            console.log(revenues, attendance, capacity, evento.assistance, evento.price)
        }
    })
    attendance = (attendance * 100) / capacity;
    return { category: categoria, revenues: revenues, attendance: attendance };

}

//Recibe un array de eventos y una categoría, devuelve un objeto de categoría.
function estadisticaPorCategoriaEventosFuturos(arrayDeEventos, categoria) {
    let revenues = 0;
    let attendance = 0;
    let capacity = 0;

    arrayDeEventos.forEach((evento) => {

        if (evento.category === categoria && evento.assistance == null) {
            revenues += (evento.estimate * evento.price);
            attendance += evento.estimate;
            capacity += evento.capacity;
            console.log(revenues, attendance, capacity, evento.estimate, evento.price)
        }
    })
    attendance = (attendance * 100) / capacity;
    return { category: categoria, revenues: revenues, attendance: attendance };

}

function crearEventsStatistics(arrayDeEventos) {
    //Determino el evento con Mayor Asistencia
    let contenedor = document.querySelector(".mayorAsistencia"); // El contenedor donde hay que agregar el botón

    let eventoResultante = document.createElement("div")
    eventoResultante.innerHTML =
        `
                    <a href="./details.html?id=${mayorAsistencia(arrayDeEventos)._id}" class="btn btn-primary">${mayorAsistencia(arrayDeEventos).name}</a>
                    `

    contenedor.appendChild(eventoResultante);

    //Determino el evento con Menor Asistencia
    contenedor = document.querySelector(".menorAsistencia"); // El contenedor donde hay que agregar el botón

    eventoResultante = document.createElement("div")
    eventoResultante.innerHTML =
        `
                    <a href="./details.html?id=${menorAsistencia(arrayDeEventos)._id}" class="btn btn-primary">${menorAsistencia(arrayDeEventos).name}</a>
                    `

    contenedor.appendChild(eventoResultante);

    //Determino el evento con Mayor Capacidad
    contenedor = document.querySelector(".mayorCapacidad"); // El contenedor donde hay que agregar el botón

    eventoResultante = document.createElement("div")
    eventoResultante.innerHTML =
        `
                    <a href="./details.html?id=${mayorCapacidad(arrayDeEventos)._id}" class="btn btn-primary">${mayorCapacidad(arrayDeEventos).name}</a>
                    `

    contenedor.appendChild(eventoResultante);
}

function crearUpcomingPorCategoria(arrayDeEventos, arrayDeCategorias) {
    let contenedor = document.querySelector(".tableContainer tbody"); // Selecciona el cuerpo de la tabla

    //Creo mi table header
    let divisor = document.createElement("tr");
    divisor.innerHTML =
        `        
                <th colspan="3">Upcoming events statistics by category</th>
                `
    contenedor.appendChild(divisor);

    //Creo los títulos de cada columna
    let divisorTitulos = document.createElement("tr");
    divisorTitulos.innerHTML =
        `
                    <td style="font-weight: bold">Category</td>
                    <td style="font-weight: bold">Revenues</td>
                    <td style="font-weight: bold">Percentage of assistance</td>
                    `
    contenedor.appendChild(divisorTitulos);

    //Por categoría, creo un tr. Cada categoria es un objeto, ver: método estadisticaPorCategoriaEventosPasados
    arrayDeCategorias.forEach((categoria) => {
        let categoriaActual = estadisticaPorCategoriaEventosFuturos(arrayDeEventos, categoria);
        let categoriaResultante = document.createElement("tr");
        if (categoriaActual.revenues != 0 && categoriaActual.attendance != 0) {

            categoriaResultante.innerHTML = `
            <td style="font-weight: bold">${categoriaActual.category}</td>
            <td>${categoriaActual.revenues.toLocaleString('es-ES', { style: 'currency', currency: 'USD' })}</td>
            <td>${categoriaActual.attendance.toFixed(2) + '%'}</td>
        `
            contenedor.appendChild(categoriaResultante);
        }
    });
}

function crearPastPorCategoria(arrayDeEventos, arrayDeCategorias) {
    let contenedor = document.querySelector(".tableContainer tbody"); // Selecciona el cuerpo de la tabla
    
    //Creo mi table header
    let divisor = document.createElement("tr");
    divisor.innerHTML =
        `        
                <th colspan="3">Past events statistics by category</th>
                `
    contenedor.appendChild(divisor);

    //Creo los titulos de cada columna
    let divisorTitulos = document.createElement("tr")
    divisorTitulos.innerHTML =
        `
                    <td style="font-weight: bold">Category</td>
                    <td style="font-weight: bold">Revenues</td>
                    <td style="font-weight: bold">Percentage of assistance</td>
                    `
    contenedor.appendChild(divisorTitulos);

    //Por categoría, creo un tr. Cada categoria es un objeto, ver: método estadisticaPorCategoriaEventosPasados
    arrayDeCategorias.forEach((categoria) => {
        let categoriaActual = estadisticaPorCategoriaEventosPasados(arrayDeEventos, categoria);
        let categoriaResultante = document.createElement("tr");
        if (categoriaActual.revenues != 0 && categoriaActual.attendance != 0) {
            categoriaResultante.innerHTML = `
            <td style="font-weight: bold">${categoriaActual.category}</td>
            <td>${categoriaActual.revenues.toLocaleString('es-ES', { style: 'currency', currency: 'USD' })}</td>
            <td>${categoriaActual.attendance.toFixed(2) + '%'}</td>
        `
            contenedor.appendChild(categoriaResultante);
        }
    });
}

function crearTabla() {
    let contenedor = document.querySelector(".tableContainer"); // El contenedor donde hay que agregar la tabla
    let tablaResultante = document.createElement("table")
    tablaResultante.classList.add("bg-body-tertiary");

    tablaResultante.innerHTML =
        ` 
                    <tr>
                        <th colspan="3">Events Statistics</th>
                    </tr>

                    <tr style="font-weight: bold">
                        <td>Events with higher % of assistance</td>
                        <td>Events with lower % of assistance</td>
                        <td>Events with larger capacity</td>
                    </tr>

                    <tr>
                        <td class="mayorAsistencia"></td>
                        <td class="menorAsistencia"></td>
                        <td class="mayorCapacidad"></td>
                    </tr>
                `
    contenedor.appendChild(tablaResultante)
}


fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json(); // Obtener datos JSON, sin uso por ahora
    })
    .then(apiData => {
        //Guardo en mi array vacío lo que traigo de la API
        data = apiData; 
        //Guardo las categorias, separadas, en mi array vacío de Categorias
        categorias = Array.from(new Set(data.events.map(evento => evento.category))) 

        //Creo la base de la tabla. Las demás secciones van a funcionar de manera modular.
        crearTabla()
        //Agrego la estadistica principal
        crearEventsStatistics(data.events)
        //Creo las secciones de Upcoming y Past
        crearUpcomingPorCategoria(data.events, categorias)
        crearPastPorCategoria(data.events, categorias)
    })
    .catch(error => {
        // Manejar errores aca, sin uso por ahora
        console.error(error);
    });