    const cartel = document.getElementById('mic');
    const cont = document.getElementById('micc');

cartel.addEventListener("click", () =>{
    cartel.classList.toggle("activado");
    cont.classList.toggle("oculto");
});

    const cartel1 = document.getElementById('pyc');
    const cont1 = document.getElementById('pycc');

cartel1.addEventListener("click", () =>{
    cartel1.classList.toggle("activado");
    cont1.classList.toggle("oculto");
    cartel1.classList.toggle("pyccc");
});

    const cartel2 = document.getElementById('arc');
    const cont2 = document.getElementById('arcc');

cartel2.addEventListener("click", () =>{
    cartel2.classList.toggle("activado");
    cont2.classList.toggle("oculto");
});