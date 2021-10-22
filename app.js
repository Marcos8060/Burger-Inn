// Init UI
const ui = new UI;

// get input fields
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById('phone');
const locationInput = document.getElementById('location');
const quantityInput = document.getElementById('quantity');
const deliverInput = document.getElementById('deliver');
const sizeInput = document.getElementById('size');
const checkout = document.getElementById('checkout');

// add event
checkout.addEventListener('click',getTotals);
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

   if(deliverInput.value == 'Deliver'){
      // show modal alert
      ui.showOrders(nameInput.value,phoneInput.value,
         locationInput.value,quantityInput.value,deliverInput.value,
         sizeInput.value,(10 * quantityInput.value));
   }

 e.preventDefault();
}

// get checkout totals
function getTotals(e){
//  show checkout totals alert
    ui.showAlert('hello world', 'alert alert-danger')
   e.preventDefault();
}

