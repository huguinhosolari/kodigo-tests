// Clase base
class Vehiculo{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

//Clase heredada
class Automovil extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo); //llama al constructor del padre
    }

    mostrarInfo(){
        return `Automóvil creado 🚗: ${this.marca} - ${this.modelo}`;
    }

    mostrarVin(){
        return `Mi chasis VIN es: 1GHHBJU787JNMJ187`;
    }

    correr(){
        return `Voy a 100 Km/h`;
    }
}

//como trigger, llamamos a la funcion
function crearAutomovil(){
    const miAuto = new Automovil("Toyota","Hilux");
    const mensaje = miAuto.mostrarInfo();
    console.log(mensaje);

    const resultado = document.getElementById("resultado");
    resultado.textContent = mensaje;
    //resultado.classList.remove("d-none");

    console.log(miAuto.mostrarVin);
}