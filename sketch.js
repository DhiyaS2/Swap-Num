var a = prompt("Enter a Number")
var b = prompt("Enter another Number")
function setup() {
  createCanvas(400, 400);
  var bt = createButton("Click to Swap")
  bt.mousePressed(swap)
}

function draw() {
  background(220);
}

function swap(){
  [a,b] = [b,a]
  console.log ("firstnumber"+a)
  console.log ("secondnumber"+b)
}