const frasesPato = 
[
    "¡El pato es genial!",
    "Ando aburrido.",
    "Estoy en modo reflexivo.",
    "...",
    "¿Crees que soy raro? :3",
    "Hay mucho frio",
    "Cuac Cuac",
    "Sabias que tengo mas frases?",
    ":3",
    "Me extrañas? :3",
    "Como va tu dia?",
    "Tengo algo secreto que contarte.",
    "Aún tengo muchas historias que contar.",
    "Yes, I am",
    "¿Te has reído hoy?",
    "show me how!",
    "I know, right?",
    "Si comiste vdd?",
    "Count me in!",
    "¿Adivinas qué? Tengo más sorpresas.",
    ":D",
    "¡El café nunca falla!",
    "¿Te gustaría que habláramos más? :3",
    "¡El sol brilla hoy!",
    "¡La música suena increíble!",
    "No comí todavía, pero tengo hambre.",
    "Actualizare seguido esto",
    "¿Algún plan para el fin de semana?",
    "Teach me your ways!",
    "Solo soy un patito :3",
    "Son mas de 10 frases :D",
    "🦆",
    "😅"
];

const frasesSobre = 
[
    "Sabias que si le picas al pato tambien te dice frases?",
    "¡La felicidad se encuentra en los pequeños momentos!",
    "¡Sigue tus sueños, siempre te guiarán!",
    "¡Me gusto que me volvieras curioso :3!",
    "¡Haz de hoy el mejor día de tu vida!",
    "¡Las estrellas te están mirando, sigue adelante!",
    "¿Sabías que si miras al cielo puedes ver tu futuro?",
    "¡Lo mejor de la vida está justo frente a ti, solo tienes que verlo!",
    "¡Hoy es el día perfecto para hacer algo increíble!",
    "¡La vida es un viaje, disfruta del camino!",
    "¡Feliz Navidad :3!",
];

function obtenerFraseAleatoriaPato() 
{
    const indiceAleatorio = Math.floor(Math.random() * frasesPato.length);
    return frasesPato[indiceAleatorio];
}

function obtenerFraseAleatoriaSobre() 
{
    const indiceAleatorio = Math.floor(Math.random() * frasesSobre.length);
    return frasesSobre[indiceAleatorio];
}

document.getElementById("patoIcono").addEventListener("click", function() 
{
    const fraseContainer = document.getElementById("frasesContainer");
    const fraseElemento = document.getElementById("frase");
    fraseElemento.textContent = obtenerFraseAleatoriaPato();
    fraseContainer.style.display = "block";
});

    const sobre = document.getElementById('cover');
    const abrirSobreBtn = document.getElementById('open');
    const cerrarSobreBtn = document.getElementById('close');
    const mensajeElemento = document.getElementById('mainMessage');

    abrirSobreBtn.addEventListener('click', function () 
    {
        sobre.classList.add('sobre-abierto');
        mensajeElemento.textContent = obtenerFraseAleatoriaSobre();
        abrirSobreBtn.style.display = 'none';
        cerrarSobreBtn.style.display = 'inline-block';
    });

    cerrarSobreBtn.addEventListener('click', function () 
    {
        sobre.classList.remove('sobre-abierto');
        abrirSobreBtn.style.display = 'inline-block';
        cerrarSobreBtn.style.display = 'none';
        mensajeElemento.textContent = '';
    });