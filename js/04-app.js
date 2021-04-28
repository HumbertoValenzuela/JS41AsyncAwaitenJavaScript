(function(){

    // 1° Promise
    function descargaNuevosClientes() {
        return new Promise( resolve => {
            console.log('Descargando Clientes...');

            setTimeout(() => {
                resolve('Los Clientes fueron descargados');
            }, 5000);
        })
    }

    // 2° Promise
    function descargarNuevosPedidos() {
        return new Promise( resolve => {
            console.log('Descargando Pedidos...');

            setTimeout(() => {
                resolve('Los Pedidos fueron descargados');
            }, 3000);
        })        
    }

     // 3° Promise
     function iniciarSesion() {
        return new Promise( resolve => {
            console.log('1 Iniciando Sesión...');

            setTimeout(() => {
                resolve('2 Sesión Iniciada...');
            }, 5000);
        })
    }

    // 4° Promise
    function crearVariabledeSesion(usuario) {
        return new Promise( resolve => {
            console.log(`3 Creando Sesión de Usuario...${usuario}`);

            setTimeout(() => {
                resolve('4 Variables Iniciadas...');
            }, 3000);
        })        
    }


const app = async () => {
    try {
        // Cliente y Pedido No dependen del otro. Por tanto es posible ejecutarlos en paralelo
        // Promise.all( [ nameFunction(),  nameFunction() ] ) 
       const respuesta = await Promise.all( [ descargaNuevosClientes(), descargarNuevosPedidos() ] );// uno o mas funciones en el Array
        console.log(respuesta);// Entrega un Array de Respuestas
        console.log(respuesta[0]);// Obtener respuesta del array posición 0
        console.log(respuesta[1]);

        // iniciarSesion y crearVariabledeSesion ambas dependen de la otra.
        // Es decir los await deben ir por separado. 
        const usuario = await iniciarSesion();
        console.log(usuario);

        const sesion = await crearVariabledeSesion(usuario);
        console.log(sesion);

    } catch (error) {
        console.log(error);
    }
}
app();
})();