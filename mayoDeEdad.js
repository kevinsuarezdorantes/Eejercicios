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





