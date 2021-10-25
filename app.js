// init ui
const ui = new UI;

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
form.addEventListener('submit',getGlobalPrice);

function getGlobalPrice(e){

   // price for  global quantity
   if(quantityInput1.value !== '' || quantityInput2.value !== '' || quantityInput3.value !== ''){
      // show prices

      ui.showPrice((quantityInput1.value * 10)+ (quantityInput2.value * 10)+ 
                   (quantityInput3.value * 10),quantityInput1.value,
                   quantityInput2.value,quantityInput3.value);

   //  get different sizes
   if(sizeInput1.value !== '' || sizeInput2.value !== '' || sizeInput3.value !== ''){
      ui.showPrice((quantityInput1.value * 10)+ (quantityInput2.value * 10)
                    + (quantityInput3.value * 10),quantityInput1.value,quantityInput2.value,
                    quantityInput3.value,sizeInput1.value,sizeInput2.value,sizeInput3.value);
   }
   // get different toppings
    if(topping1.value !== '' || topping2.value !== '' || topping3.value !== ''){
      ui.showPrice((quantityInput1.value * 10)+ (quantityInput2.value * 10)
                  + (quantityInput3.value * 10),quantityInput1.value,quantityInput2.value,
                  quantityInput3.value,sizeInput1.value,sizeInput2.value,sizeInput3.value,
                  topping1.value,topping2.value,topping3.value);
    }
   //  get price for medium size(Input1)
   if(sizeInput1.value == 'medium'){
      ui.showPrice((quantityInput1.value * 15)+ (quantityInput2.value * 15)
                  + (quantityInput3.value * 15),quantityInput1.value,quantityInput2.value,
                  quantityInput3.value,sizeInput1.value,sizeInput2.value,sizeInput3.value,
                  topping1.value,topping2.value,topping3.value,);
   }
   // get price for large size(input1)
   if(sizeInput1.value == 'large'){
      ui.showPrice((quantityInput1.value * 18)+ (quantityInput2.value * 18)
                  + (quantityInput3.value * 18),quantityInput1.value,quantityInput2.value,
                  quantityInput3.value,sizeInput1.value,sizeInput2.value,sizeInput3.value,
                  topping1.value,topping2.value,topping3.value,);
   }
   // get price for medium size(input2)
   if(sizeInput2.value == 'medium'){
      ui.showPrice((quantityInput1.value * 15)+ (quantityInput2.value * 15)
                  + (quantityInput3.value * 15),quantityInput1.value,quantityInput2.value,
                  quantityInput3.value,sizeInput1.value,sizeInput2.value,sizeInput3.value,
                  topping1.value,topping2.value,topping3.value,);
   }
   // get price for large size(input2)
   if(sizeInput2.value == 'large'){
      ui.showPrice((quantityInput1.value * 18)+ (quantityInput2.value * 18)
                  + (quantityInput3.value * 18),quantityInput1.value,quantityInput2.value,
                  quantityInput3.value,sizeInput1.value,sizeInput2.value,sizeInput3.value,
                  topping1.value,topping2.value,topping3.value,);
   }
   // get price for medium size(input3)
   if(sizeInput3.value == 'medium'){
      ui.showPrice((quantityInput1.value * 15)+ (quantityInput2.value * 15)
                  + (quantityInput3.value * 15),quantityInput1.value,quantityInput2.value,
                  quantityInput3.value,sizeInput1.value,sizeInput2.value,sizeInput3.value,
                  topping1.value,topping2.value,topping3.value,);
   }
   // get price for large size(input3)
   if(sizeInput3.value == 'large'){
      ui.showPrice((quantityInput1.value * 18)+ (quantityInput2.value * 18)
                  + (quantityInput3.value * 18),quantityInput1.value,quantityInput2.value,
                  quantityInput3.value,sizeInput1.value,sizeInput2.value,sizeInput3.value,
                  topping1.value,topping2.value,topping3.value,);
   }
   if(locationInput.value !== ''){
      ui.showPrice((quantityInput1.value * 18)+ (quantityInput2.value * 18)
      + (quantityInput3.value * 18),quantityInput1.value,quantityInput2.value,
      quantityInput3.value,sizeInput1.value,sizeInput2.value,sizeInput3.value,
      topping1.value,topping2.value,topping3.value,locationInput.value);
   }
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


}
