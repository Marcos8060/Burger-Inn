class UI {
   constructor(){
      this.productsContainer = document.querySelector('.products');
      this.cartItems = document.querySelector('.cartItems');
      this.subTotal = document.querySelector('.subtotal');
   }

    displayProducts(imgSrc,title,price,size,topping,id){
       this.productsContainer.innerHTML +=`
       <div class="col">
        <div class="card mt-3" style="width: 18rem;">
         <img src=${imgSrc} class="card-img-top" alt="...">
          <div class="card-body">
          <p class="card-title">Crust: ${title}</p>
          <p>Price: $${price}</p>
          <p>Size: ${size}</p>
          <label for="cars">Choose topping:</label>
            <select name="cars" id="cars">
                <option value="mushroom">${topping}</option>
                <option value="pepperoni">pepperoni</option>
                <option value="bacon">bacon</option>
            </select>
            <buttton class="button" onClick="addToCart(${id})">Add to cart</button>
        </div>
       </div> 
       `
    }
    appendToCart(imgSrc,title,size,price,id,numberOfUnits){
       this.cartItems.innerHTML += `
       <div class="cartSection">
        <div>
         <img class="cartImg" src=${imgSrc} class="card-img-top" alt="...">
             <h5>${title}</h5>
        </div>
            <div><h5>${size}</h5></div>
            <div><h5>$${price}</h5></div>
            </div>
           <div class="units">
          <div class="btn minus" onClick="changeNumberOfUnits('minus',${id})">-</div>
         <div class="number">${numberOfUnits}</div>
        <div class="btn plus" onClick="changeNumberOfUnits('plus',${id})">+</div>    
       </div>
       `
    }
    getSubTotal(totalprice,totalUnits){
       this.subTotal.innerHTML = `
         Subtotal (${totalUnits} items): $${totalprice}
       
       `
    }
}