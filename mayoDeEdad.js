
const btnNum = document.getElementById('btnNumMayor');


btnNum.onclick = () => {
    compararNumero();
}




async function compararNumero() {

    var num1 = prompt("Ingrese su primer numero por favor");
    var num2 = prompt("Ingrese su segundo numero por favor");
    var num3 = prompt("Ingrese tercer numero por favor");

    if (num1 > num2 && num1 > num3) {

        alert("El número " + num1 + " es el mayor de todos");

    } 
    if (num2 > num1 && num2 > num3) {

        alert("El número " + num2 + " es el mayor de todos");

    }
    
    if (num3 > num1 && num3 > num2) {

        alert("El número " + num3 + " es el mayor de todos");

    }

}


const btnInventario = document.getElementById('btnInventario');

var inventario = {
    "sopa": 12,
    "cacahuates": 10,
    "nork suiza": 54
};

async function consultarStock() {
    var producto = prompt("que es lo que quires buscar?");

    if (inventario.hasOwnProperty(producto)) {

        alert("Del producto: " + producto + " hay en stock: " + inventario[producto] + " unidades");
    } else {
        alert("No se encontro el producto " + producto);
    }
}


const btnIniciar = document.getElementById('btn');


btnIniciar.onclick = () => {
    verificarEdad();
}


async function verificarEdad() {
    var edad = 18
    var edad_usuario = prompt("ingresa tu edad")

    if (edad_usuario >= edad) {
        alert("ay perro ya puedes ir a la carcel legalmente")
    } else {

        alert("Hijole carnal no puedes votar por un presidente aun, te me esperas :(")
    }

}




const btnFigura = document.getElementById('btnFig');



btnFigura.onclick = () => {
    calcularArea();
}


async function calcularArea() {

    var figura = prompt("¿De que figura quieres calcular el area?, ingresa: a-->cuadrado  b-->triangulo")

    var altura = 0;
    var base = 0;

    var lado = 0;

    if (figura == "b") {


        altura = prompt("ingresa la medida  altura")
        base = prompt("ingresa la medida  base")
        var calculart = (base * altura) / 2;
        alert("el area de tu figura es: " + calculart)


    } else {

        if (figura == "a") {


            lado = prompt("ingresa la medida de uno de los lados del cuadrado")
            var calcularc = lado * lado;
            alert("el area de tu figura es: " + calcularc)


        } else {

            alert("Ey you vos sos pero retrasado o te pario un teletubie? porque pusiste una opcion que no esta ehh, considera ir al psicologo")

        }

    }

}

