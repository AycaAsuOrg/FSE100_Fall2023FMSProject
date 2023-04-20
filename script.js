var newScreenButton

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("red")
  newScreenButton = createButton("New Screen");
  newScreenButton.position(50,50)
  newScreenButton.mousePressed(clickedNewScreen);
}

function clickedNewScreen(){
  window.open("https://NewPageswithNewFile2.aycatuzmen.repl.co", "_self")
}
