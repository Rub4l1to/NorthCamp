let points = [
  { x: 125, y: 300, size: 30 },
  { x: 325, y: 100, size: 20 },
  { x: 625, y: 500, size: 20 },
  { x: 400, y: 400, size: 25 },
  { x: 500, y: 300, size: 30 },
  { x: 400, y: 600, size: 25 },
];
// 1. Renderiza un circulo por cada punto en points, utiliza las coordenadas especificadas

const createCircles = (arr) => {
  document.body.style.position = "relative";
  arr.forEach((element) => {
    let circle = document.createElement("div");
    circle.style.position = "absolute";
    circle.style.background = "black";
    circle.style.top = element.x + "px";
    circle.style.left = element.y + "px";
    circle.style.width = element.size + "px";
    circle.style.height = element.size + "px";
    circle.style.borderRadius = 20 + "px";
    circle.setAttribute("class", "circleHover");
    document.body.appendChild(circle);
  });
};
createCircles(points);
