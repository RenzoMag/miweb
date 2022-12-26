    const linea = document.getElementById('linea');

    const cartel = document.getElementById('mic');
    const cont = document.getElementById('micc');

cartel.addEventListener("click", () =>{
    cartel.classList.toggle("activado");
    cont.classList.toggle("oculto");

    cartel1.classList.remove("activado");
    cont1.classList.remove("oculto");
    cartel2.classList.remove("activado");
    cont2.classList.remove("oculto");
    cartel3.classList.remove("activado");
    cont3.classList.remove("oculto");

    linea.classList.toggle("lineapri")
});

    const cartel1 = document.getElementById('pyc');
    const cont1 = document.getElementById('pycc');

cartel1.addEventListener("click", () =>{
    cartel1.classList.toggle("activado");
    cont1.classList.toggle("oculto");

    cartel.classList.remove("activado");
    cont.classList.remove("oculto");
    cartel2.classList.remove("activado");
    cont2.classList.remove("oculto");
    cartel3.classList.remove("activado");
    cont3.classList.remove("oculto");

    linea.classList.toggle("lineasec")
});

    const cartel2 = document.getElementById('arc');
    const cont2 = document.getElementById('arcc');

cartel2.addEventListener("click", () =>{
    cartel2.classList.toggle("activado");
    cont2.classList.toggle("oculto");

    cartel1.classList.remove("activado");
    cont1.classList.remove("oculto");
    cartel.classList.remove("activado");
    cont.classList.remove("oculto");
    cartel3.classList.remove("activado");
    cont3.classList.remove("oculto");

    linea.classList.toggle("lineapri")
});

const cartel3 = document.getElementById('qbas');
const cont3 = document.getElementById('qbass');

cartel3.addEventListener("click", () =>{
    cartel3.classList.toggle("activado");
    cont3.classList.toggle("oculto");

    cartel1.classList.remove("activado");
    cont1.classList.remove("oculto");
    cartel2.classList.remove("activado");
    cont2.classList.remove("oculto");
    cartel.classList.remove("activado");
    cont.classList.remove("oculto");

    linea.classList.toggle("lineasec")
});

const proyecto = document.getElementsByClassName('adms');
const proyecto2 = document.getElementsByClassName('admscart');

proyecto[0].onmouseover= function(){
    proyecto2[0].classList.add("admscarton")
};

proyecto[0].onmouseout= function(){
    proyecto2[0].classList.remove("admscarton")
};

