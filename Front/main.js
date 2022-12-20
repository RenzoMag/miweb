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
});

    const cartel2 = document.getElementById('arc');
    const cont2 = document.getElementById('arcc');

cartel2.addEventListener("click", () =>{
    cartel2.classList.toggle("activado");
    cont2.classList.toggle("oculto");
});

const cartel3 = document.getElementById('qbas');
const cont3 = document.getElementById('qbass');

cartel3.addEventListener("click", () =>{
cartel3.classList.toggle("activado");
cont3.classList.toggle("oculto");
});

const proyecto = document.getElementsByClassName('adms');
const proyecto2 = document.getElementsByClassName('admscart');

proyecto[0].onmouseover= function(){
    proyecto2[0].classList.add("admscarton")
};

proyecto[0].onmouseout= function(){
    proyecto2[0].classList.remove("admscarton")
};