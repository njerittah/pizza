function Order(size,crust,topping, number){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.number = number;
}

Order.prototype.total = function() {
  this.totalPrice = parseInt(this.size) + parseInt(this.crust) + parseInt(this.topping);
  return this.totalPrice * this.number;
}

$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
var size=$('input:radio[name=size]:checked').attr('value');
var crust = $('input[name=crust]:checked').attr('value');
var toppings=$('input[name=Topping]:checked').attr('value');
var delivery=$('input:radio[name=delivery]:checked').attr('value');
var number = $('#number').val();
// console.log(number);
// console.log(size);
// console.log(crust);
// console.log(toppings);
var order = new Order(size, crust, toppings, number);
// console.log(order.total());

// console.log(order.add());
// if (delivery ===1){
//   alert(order.Order());
//   alert('your bill is'+ order.total());
document.getElementById("tt").innerHTML = new Order();
document.getElementById("mm").innerHTML= order.total()

});
});
