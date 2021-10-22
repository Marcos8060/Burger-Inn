// Init UI
const ui = new UI;

// get input fields
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById('phone');
const locationInput = document.getElementById('location');
const quantityInput = document.getElementById('quantity');
const deliverInput = document.getElementById('deliver');
const sizeInput = document.getElementById('size');
const priceBtn = document.getElementById('price');

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
                   deliverInput.value,sizeInput.value,(10 * quantityInput.value));
   }

//    price for medium size
   if(sizeInput.value == 'Medium'){
    ui.showOrders(nameInput.value,phoneInput.value,
        locationInput.value,quantityInput.value,
        deliverInput.value,sizeInput.value,(14 * quantityInput.value));
   }
// price for large size
   if(sizeInput.value == 'Large'){
    ui.showOrders(nameInput.value,phoneInput.value,
        locationInput.value,quantityInput.value,
        deliverInput.value,sizeInput.value,(18 * quantityInput.value));
   }

 e.preventDefault();
}

