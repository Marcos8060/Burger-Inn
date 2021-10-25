class UI{
  constructor(){
    this.qPrices = document.getElementById('qTotals');
    // this.sTotals = document.getElementById('sTotals');
  }

  showPrice(qtotal,qcrispy,qstuffed,qgluten,scrispy,sStuffed,sgluten,Tcrispy,Tstuffed,Tgluten,location){
    this.qPrices.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Crust</th>
          <th scope="col">Size</th>
          <th scope="col">Quantity</th>
          <th scope="col">Topping</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Crispy</th>
          <td>${scrispy}</td>
          <td>${qcrispy}</</td>
          <td>${Tcrispy}</td>
        </tr>
        <tr>
          <th scope="row">Stuffed</th>
          <td>${sStuffed}</td>
          <td>${qstuffed}</td>
          <td>${Tstuffed}</td>
        </tr>
        <tr>
          <th scope="row">Gluten Free</th>
          <td>${sgluten}</td>
          <td>${qgluten}</td>
          <td>${Tgluten}</td>
        </tr>
        <tr>
          <th scope="row">Totals</th>
          <td colspan="2">$${qtotal}</td>
        </tr>
      </tbody>
  </table>
  <h4>Your order will be delivered in ${location}</h4>
    `
  }
}
