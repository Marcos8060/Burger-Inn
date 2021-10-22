class UI {
    constructor() {
        this.orders = document.getElementById('orders');
        this.alert = document.getElementById('alert');
    }

    showOrders(name, phone, location, quantity, deliver, size, price) {
        this.orders.innerHTML = `
        <div class="row">
          <div class="col border-right">
            <h6>Name: ${name}</h6>
            <h6>Phone: ${phone}</h6>
            <h6>Location: ${location}</h6>
          </div>
          <div class="col">
            <h6>Quantity: ${quantity}</h6>
            <h6>Status: ${deliver}</h6>
            <h6>Size: ${size}</h6>
          </div>
          <button id="price" class="btn btn-success text-center mb-2">$${price}<button>
        </div>
        `
        let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
        myModal.show();
    }

};


