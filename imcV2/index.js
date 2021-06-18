

//ASIGNAT A VARIABLES CONSTANTES LOS OBJETOS HTML CON EL ID
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const boton = document.getElementById("boton");
const respuesta = document.getElementById("respuesta");
const msj = document.getElementById("resultado");

//APLICANDO LA FUNCION FLECHAS CUANDO EL USUARIO HACE CLICK EN EL OBJETO BOTON

//(IMC = peso [kg]/ estatura^2)
boton.addEventListener('click', () => {
    let imc = peso.value/Math.pow((altura.value)/100,2);
    imc=imc.toFixed(3);
    respuesta.innerHTML = "Su IMC es " + (imc);

    if(imc<18.5){
        msj.innerHTML = "BAJO PESO";
    }else if(imc>=18.5 && imc<25){
        msj.innerHTML = "PESO NORMAL"
    }else if(imc>=25 && imc<30){
        msj.innerHTML = "SOBREPESO y tiene risego AUMENTADO"
    }else if(imc>=30 && imc<35){
        msj.innerHTML = "OBESIDAD TIPO I y tiene risego MODERADO"
    }else if(imc>=35 && imc<40){
        msj.innerHTML = "OBESIDAD TIPO II y tiene risego SEVERO"
    }else if(imc>=40){
        msj.innerHTML = "OBESIDAD TIPO III y tiene risego MUY SEVERO"
    }
})
