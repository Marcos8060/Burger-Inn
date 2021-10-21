// Init UI
const ui = new UI;

// get input fields
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById('phone');
const locationInput = document.getElementById('location');
const quantityInput = document.getElementById('quantity');
const deliverInput = document.getElementById('deliver');
const sizeInput = document.getElementById('size');
// const Btn = document.getElementById('btn');

// add event
form.addEventListener('submit',getName);

// execute function
function getName(e){

   if(nameInput.value !== '' && phoneInput.value !== '' && 
      locationInput.value !== '' && quantityInput.value !== '' &&
      deliverInput.value !== '' && sizeInput.value !== ''){
    //   show orders
     ui.showOrders(nameInput.value,phoneInput.value,
                   locationInput.value,quantityInput.value,
                   deliverInput.value,sizeInput.value);
   }
  
//    prices for the individual sizes
    


 e.preventDefault();
}

