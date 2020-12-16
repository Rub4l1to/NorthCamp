import { templateCard } from "./templates";

// Pintamos los datos
export const drawCards = (chars) => chars.forEach((item) => templateCard(item));

// Remove modal
export const removeModal = () => document.querySelector(".modal").remove();

// Clear list
export const clearList = () => document.querySelector("#list").innerHTML = "";