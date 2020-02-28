






function Pizza(size,crust,Toppings){
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

function Size(xl=2000,large=1500,medium=1000, small=500){
  this.xl=xl;
  this.large= large;
  this.medium= medium;
  this.small= small;
}

function Crust(thin=100,flatbread=200,focaccia=200,custom=150,glutenfree=300){
  this.thin="thin"
  this.flatbread="flatbread"
  this.focaccia="focaccia"
  this.custom="custom"
  this.glutenfree= "glutenfree"
}

function Toppings(pepperoni, mushrooms, onions, sausage, bacon, blackolives, greenpeppers){
this.pepperoni= pepperoni
this.mushrooms= mushrooms
this.onions= onions
this.sausage= sausage
this.bacon = bacon
this.blackolives= blackolives
this.greenpeppers= greenpeppers
}

var

$(document).ready(function(){
  $("form").submit(function() {
var size=$("#siz").val()
var crus = $("#crus").val()
var toppings= $("#toppin").val()
var number=$("#num").val()
var deliver=$("#deliv").val()


var =$("#num").val()
var delive = $("#deliv").val()
