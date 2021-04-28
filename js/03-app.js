// 3. Async Await en function express y Declaration
(function(){
    function descargarClientes (){
        return new Promise((resolve, reject) => {
            const error = false;

            setTimeout(() => {
                if(!error) {
                    resolve('Descarga Cliente Listo');
                } else {
                    reject('Error en la conexión');
                }
            }, 3000);
        })
    }

    // async await
    const ejecutar = async () => {//Funtion express
        try {
            console.log(6 + 6);
            const respuesta = await descargarClientes();
            console.log(7 + 7);
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    }

    ejecutar();
})();
