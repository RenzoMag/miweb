const cartel = document.querySelectorAll('.carteles');

cartel.forEach((carteles) => {

    carteles.addEventListener("click", () =>{
        carteles.classList.toggle("activado");
    });

});