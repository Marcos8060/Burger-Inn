class UI {
    constructor() {
        this.orders = document.getElementById('orders');
        this.alert = document.getElementById('alert');
    }

    showOrders(name, phone, location, quantity, deliver, size, price) {
        this.orders.innerHTML = `
        <div class="row">
          <div class="col border-right">
            <h6 class="mb-4">Name: ${name}</h6>
            <h6 class="mb-4">Phone: ${phone}</h6>
            <h6 class="mb-4">Location:Your order will be delivered to <b>${location.toUpperCase()}</b></h6>
          </div>
          <div class="col">
            <h6 class="mb-4">Quantity: ${quantity}</h6>
            <h6 class="mb-4">Status: ${deliver}</h6>
            <h6 class="mb-4">Size: ${size}</h6>
          </div>
          <button id="price" class="btn btn-success text-center mb-2">Totals:  $${price}<button>
        </div>
        `
        let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
        myModal.show();
    }

    // show checkout totals alert
    showAlert(message,className){
      // create a div element
      const div = document.createElement('div');
      // add class
      div.className = className;
      // append text
      div.appendChild(document.createTextNode(message));
      // get parent
      const searchContainer = document.querySelector('.searchContainer');
      // get search box
      const search = document.querySelector('.search');
      // insert text
      searchContainer.insertBefore(div,search);
    }

};


