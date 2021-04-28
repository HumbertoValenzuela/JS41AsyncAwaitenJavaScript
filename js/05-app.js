// 5. Async Await hacia una API con Fetch
const url = 'https://picsum.photos/id/0/info';

document.addEventListener('DOMContentLoaded', obtenerDatos);


// Comparando usando Fetch
function obtenerDatos() {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error));
}

// Comparando usando async await
async function obtenerDatos() {
    try {

        const respuesta = await fetch(url);//Espera a que termine
        const resultado = await respuesta.json();// espera a que termine
        console.log(resultado);

    } catch (error) {
        console.log(error);
    }
}