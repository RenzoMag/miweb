const cartel = document.querySelectorAll('.carteles');
const car = document.querySelectorAll('.cartelact');
console.log(car)
console.log(cartel)



cartel.forEach((carteles) => {
    carteles.addEventListener("click", () =>{
        carteles.classList.toggle("activado");
    });
});

cartel.forEach((carteles) => {
    carteles.addEventListener("click", () =>{
            car.forEach((cars) => {
                cars.classList.toggle("oculto");
            });
    });
});


