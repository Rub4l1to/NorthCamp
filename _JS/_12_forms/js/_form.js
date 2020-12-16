// Nodos option
function createNode(tag, parent) {
  let node = document.createElement(tag);
  parent.appendChild(node);
  return node;
}
function addInput(placeholder, type, id) {
  let node = createNode("input", form);
  node.setAttribute("placeholder", placeholder);
  node.setAttribute("type", type);
  node.setAttribute("id", id);
  if (type === "submit") {
    node.setAttribute("value", "Get Started");
  }
}

const checkData = (e) => {
  e.preventDefault();
  const { firtsName, lastName, correo, passw } = e.target;
  firtsName.value.length < 6
    ? firtsName.setAttribute("class", "border")
    : firtsName.classList.remove("border");
  lastName.value.length < 6
    ? lastName.setAttribute("class", "border")    : lastName.classList.remove("border");
  correo.value.indexOf("@") < 0
    ? correo.setAttribute("class", "border")
    : correo.classList.remove("border");
  passw.value.length < 8
    ? passw.setAttribute("class", "border")
    : passw.classList.remove("border");
};

let form = createNode("form", document.querySelector(".container"));
addInput("First Name*", "text", "firtsName");
addInput("Last Name*", "text", "lastName");
addInput("Email Address*", "email", "correo");
addInput("Set A Password*", "password", "passw");
addInput("Get Started", "submit", "boton");
document.addEventListener("submit", checkData);

document.querySelector("#firtsName").onkeyup = checkData;
document.querySelector("#lastName").onkeyup = checkData;
document.querySelector("#correo").onkeyup = checkData;
document.querySelector("#passw").onkeyup = checkData;
