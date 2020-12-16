// Nodos option
function createNode(tag, parent){
	let node = document.createElement(tag)
	parent.appendChild(node)
	return node
}
function addInput(placeholder, type){
	let node = createNode("input", form)
	node.setAttribute("placeholder", placeholder)
	node.setAttribute("type", type)
}

let form = createNode("form", document.body)
addInput("Usuario", "text")
addInput("Correo", "text")
addInput("Contrasena", "password")
addInput("Repite", "password")
let button = createNode("button", form)
button.innerHTML = "enviar"