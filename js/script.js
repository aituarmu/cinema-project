const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
let cost = 800; //цена билета 800 тенге
let totalPrice = 0; //по умолчанию 0, а потом будет увеличиваться
//Клик от пользователя Add event listener
schemeSvg.addEventListener('click', (event)=> { 
// понимать, какое место выбрано
//    console.log(event.target)
   if (!event.target.classList.contains('booked')) {
    event.target.classList.toggle('active');
    let totalSeats = schemeSvg.querySelectorAll('.active').length;
    totalPrice = totalSeats * cost; 
    totalPriceTag.textContent = totalPrice;
}
});