// Ejercicio 1 y 2
const createNode = (tag, parent) => {
  let node = document.createElement(tag);
  parent.appendChild(node);
  return node;
};
const addInput = (placeholder, type, id) => {
  let node = createNode("input", form);
  node.setAttribute("placeholder", placeholder);
  node.setAttribute("type", type);
  node.setAttribute("id", id);
};

const hide = (e) => e.target.remove();
const changeColor = (e) => e.target.classList.toggle("red");

let button = createNode("button", document.body);
button.innerHTML = "Ocultar";
// Events
button.onclick = hide;
button.onmouseover = changeColor;
button.onmouseout = changeColor;

// Ejercicio 3
const checkData = (e) => {
  e.preventDefault();
  let p = createNode("p", document.body);
  const { usuario, correo, passw, passwRep } = e.target;
  if (usuario.value > 6)
    addParagraph("Nombre de usuario excede 6 caracteres", "mensaje", p);

  if (correo.value.indexOf("@") < 0)
    addParagraph("Rellena correctamente el correo", "mensaje", p);

  if (passw.value !== passwRep.value)
    addParagraph("Las contraseñas no coinciden", "mensaje", p);
};

const addParagraph = (data, id, parent) => {
  let node = createNode("p", parent);
  node.innerHTML = data;
  node.setAttribute("class", id);
};

// Ejercicio 3
let form = createNode("form", document.body);
addInput("Usuario", "text", "usuario");
addInput("Correo", "text", "correo");
addInput("Contrasena", "password", "passw");
addInput("Repite", "password", "passwRep");
addInput("Enviar", "submit", "boton");

document.addEventListener("submit", checkData);

// Ejercicio 4
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (document.querySelector("#usuario").value !== "") {
      console.log(document.querySelector("#usuario").value);
    }
  }
});
