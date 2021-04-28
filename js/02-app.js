// 2. Nuestro Primer Ejemplo de Async Await y que es lo que hace

// Es una alternativa a Promise, pero funcionan sobre los Promise
(function(){

    function descargarClientes() {
        return new Promise((resolve, reject) => {
            const error = true;// Bandera para pasar de resolve a reject

            setTimeout(() => {
                if(!error){
                    resolve('Lista Cliente Descargado');
                } else {
                    reject('Error en la conexión');
                }
            }, 3000);
        })
    }

    // Async await
    // Async tiene que ser la función padre, es decir, la función sobre la cual se ejecutando el Promise
    // await irá en la parte que va a esperar a que se ejecute el Promise
    // ¿Qué hace await? manda a llamar a descargarClientes
    // pero JS dice voy a esperar a que finalice la función setTimeOut
    // es decir, hasta que se resuelva el Promise. Y luego seguir con la sgte. línea de código.
    // En este ejemplo 5+5 tiene que esperar a que termine descargarClientes

    // Cuando el flag es true, la función pasa a reject. Try Catch detecta el error. Por lo que 5+5 y resolve no se ejecutarán
    async function ejecutar(){//function declaration
        try {
            console.log(4 + 4);
            const respuesta = await descargarClientes();
            console.log(5 + 5);
            console.log(respuesta);// Resolve
        } catch (error) {
            console.log(error);// Reject
        }
    }

    ejecutar();
})();