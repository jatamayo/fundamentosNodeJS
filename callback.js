function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log("hola " + nombre);
        miCallback();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log("adios " + nombre);
        otroCallback();
    }, 1000);
}

console.log("Iniciando proceso");
hola("tamayo", function () {
    adios("tamayo", function(){
        console.log("Terminando proceso");
    })
});
