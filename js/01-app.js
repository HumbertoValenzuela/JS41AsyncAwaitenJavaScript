// 1. Pero primero, que es Try Catch

(function(){

// ¿Qué se ejecuta primero? 
// Se ejecuta 1+1, pero hola(); no se ejecuta, porqué no esta definida y se detiene la ejecución. Es decir
// 2+2 nunca se ejecutará debido a que hola() no esta definida
console.log(1 + 1); // se ejecuta

//hola(); //No se ejecuta, porque no esta definida. JS detiene la ejecución

console.log(2 + 2); // Nunca se ejecuto

// Esto es lo que soluciona Try Catch, es decir, si existe un error pero sigue ejecutandose el código
try {
    hola();// da error
} catch (error) {
    console.log(error);// entrega mensaje de error
}
console.log(3 + 3);// pero el código sigue ejecutandose.

})(); 