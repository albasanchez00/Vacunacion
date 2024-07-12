// Todo lo refetente a la vacunacion




// Todo lo referente a la accesibilidad
document.querySelector("#aumentar").addEventListener("click", () => {
    ajustarFuente(1);
})

document.querySelector("#reducir").addEventListener("click", () => {
    ajustarFuente(-1);
})

document.querySelector("#escalaGris").addEventListener("click", escalaGrises);

document.querySelector("#altoContras").addEventListener("click", altoContraste);

document.querySelector("#reset").addEventListener("click", resetTodo);



// Botón de Aumentar y Disminuir Fuente
function ajustarFuente(cambio) {
    let elementos = document.querySelectorAll("body *:not(.accesibilidad, .accesibilidad *)"); //Selecciona todos los elementos excepto accesibilidad.
    elementos.forEach(function (elem) {
        let estilo = window.getComputedStyle(elem); //Toma el estilo de cada elemento.
        let fontSize = parseFloat(estilo.fontSize); //Toma el estilo de cada elemento.
        console.log(fontSize);
        elem.style.fontSize = fontSize + cambio + "px";
    })
}


//  Botón de Escala de grises.
function escalaGrises() {
    // 222222
    document.body.style.filter = "grayscale(100%)";
}


//  Botón de Alto Contraste.
function altoContraste() {
    document.body.style.backgroundColor = "#1c1d22";
    let elementos = document.querySelectorAll("body *");
    let img = document.querySelectorAll("img");  //Imagenes
    elementos.forEach(function (elem) {
        let estilo = window.getComputedStyle(elem);
        elem.style.color = "#ffd700";
    })
    img.forEach(function (elem) { //Invertimos el color de las img
        let estilo = window.getComputedStyle(elem);
        elem.style.filter = "brightness(0) invert(1)"; //Invierte el color de las imagenes

    })
}


// Botón de Reset.
function resetTodo() {
    let elementos = document.querySelectorAll("body *");
    elementos.forEach(function (elem) {
        elem.style.fontSize = "";
        elem.style.color = "";
    })
    let img = document.querySelectorAll("img");
    img.forEach(function (elem) {
        elem.style.filter = "";
    })
    document.body.style.backgroundColor = "";
    document.body.style.filter = "";
}


// Botón de Mostrar y Ocultar.
function mostrarOcultar() {
    let barra = document.querySelector(".accesibilidad");
    let boton = document.querySelector(".icon-accesibilidad");
    barra.classList.toggle("mostrar"); //Intercambia las clases, si la tieen, la quita, sino la coloca.
    boton.classList.toggle("mostrar");
}



// Boton Vacunas
let tablaVacunas = new Map([["prenatal", "Vacunas: Difteria, Tétanos y Tosferina."], ["2 meses", "vacunas: Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Meningococo B y Neumococo."], ["4 meses", "Vacunas: Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Meningococo B, Meningococo C y Neumococo."], ["11 meses", "Vacunas:Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B y  Neumococo."], ["12 meses", "Vacunas: Sarampión, Rubeola, Parotiditis, Meningococo B y Meningococo C."], ["15 meses", "Vacunas: Varicela."], ["4 años", "Vacunas: Sarampión, Rubeola, Parotiditis y Varicela."], ["6 años", "Vacunas: Difteria, Tétanos, Tosferina y Poliomielitis."], ["12 años", "Vacunas: Varicela, Meningococo ACWY y Papilomavirus."], ["14 años", "Vacunas: Difteria y Tétanos."], ["65 años", "Vacunas: Difteria, Tétanos, Herpes Zóster y Neumococo"], ["80 años", "Vacunas: Herpes Zóster"]]);

let select = document.getElementById('edades');

for (let [edad, vacunas] of tablaVacunas) {
    const option = document.createElement('option');
    option.value = edad;
    option.textContent = edad;
    select.appendChild(option);
}

select.addEventListener("change", ()=>{
    let respuesta=document.querySelector("#respuesta");
    for (let [edad, vacunas] of tablaVacunas) {
        if (select.value==edad) {
            respuesta.innerHTML= vacunas;
            
        } else if (select.value==""){
            respuesta.innerHTML="";
        }
    }
})



// // Función para llenar el select con las comunidades
// function llenarSelect(id) {
//     const select = document.getElementById(id);
//     comunidades.forEach(comunidad => {
//         const option = document.createElement('option');
//         option.value = comunidad;
//         option.textContent = comunidad;
//         select.appendChild(option);
//     });
// }

// // Llenar ambos selects al cargar la página
// document.addEventListener('DOMContentLoaded', () => {
//     llenarSelect('origen');
// });

// function calcularEnvio() {
//     // Obtener valores seleccionados
//     const origen = document.getElementById('origen');
//     switch (origen) {
//         case 'prenatal':
//             resultado = 'Vacunas: a b c'
//             break;

//         default:
//             break;
//     }
// }


