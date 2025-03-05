function setup() {
    const canvas = createCanvas(1920, 1800);
    canvas.removeAttribute('style');
    canvas.parent('canvas-container');

    background(247, 245, 237);
    fill(0, 0, 0);
    noStroke();
}       

function draw() {
  // put drawing code here
  if(mouseIsPressed)
 {
   circle(mouseX, mouseY, 15);

 }

}

function clearCanvas() {
  background(247, 245, 237);
}

function changeColor(red, green, blue) {
  document.getElementById('selected-color').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  fill(red, green, blue);
}   

function changetoEraser() {
  fill(247, 245, 237);
}

function changetoBrush(){
    fill(0, 0, 0);
}
    