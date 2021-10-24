// get input fields
const locationInput = document.getElementById('location');
// quantity
const quantityInput1 = document.getElementById('quantity1');
const quantityInput2 = document.getElementById('quantity2');
const quantityInput3 = document.getElementById('quantity3');
// sizes
const sizeInput1 = document.getElementById('size1');
const sizeInput2 = document.getElementById('size2');
const sizeInput3 = document.getElementById('size3');
// toppings
const topping1 = document.getElementById('top1');
const topping2 = document.getElementById('top2');
const topping3 = document.getElementById('top3');

// add event
form.addEventListener('submit',getName);

function getName(e){

   console.log(sizeInput1.value);

   e.preventDefault();
}

// // Init UI
// const ui = new UI;

// // get input fields
// const nameInput = document.getElementById("name");
// const phoneInput = document.getElementById('phone');
// const locationInput = document.getElementById('location');
// const quantityInput = document.getElementById('quantity');
// const deliverInput = document.getElementById('deliver');
// const sizeInput = document.getElementById('size');
// const checkout = document.getElementById('checkout');

// // add event
// checkout.addEventListener('click',getTotals);
// form.addEventListener('submit',getName);

// // execute function
// function getName(e){

//    if(nameInput.value !== '' && phoneInput.value !== '' && 
//       locationInput.value !== '' && quantityInput.value !== '' &&
//       deliverInput.value !== '' && sizeInput.value !== ''){
//     //   show orders
//      ui.showOrders(nameInput.value,phoneInput.value,
//                    locationInput.value,quantityInput.value,
//                    deliverInput.value,sizeInput.value,(10 * quantityInput.value));
//    }

// //    price for medium size
//    if(sizeInput.value == 'Medium'){
//     ui.showOrders(nameInput.value,phoneInput.value,
//         locationInput.value,quantityInput.value,
//         deliverInput.value,sizeInput.value,(14 * quantityInput.value));
//    }
// // price for large size
//    if(sizeInput.value == 'Large'){
//     ui.showOrders(nameInput.value,phoneInput.value,
//         locationInput.value,quantityInput.value,
//         deliverInput.value,sizeInput.value,(18 * quantityInput.value));
//    }

//    if(deliverInput.value == 'Deliver'){
//       // show modal alert
//       ui.showOrders(nameInput.value,phoneInput.value,
//          locationInput.value,quantityInput.value,deliverInput.value,
//          sizeInput.value,(10 * quantityInput.value));
//    }

//  e.preventDefault();
// }

// // get checkout totals
// function getTotals(e){
// //  show checkout totals alert
//     ui.showAlert('hello world', 'alert alert-danger')
//    e.preventDefault();
// }



