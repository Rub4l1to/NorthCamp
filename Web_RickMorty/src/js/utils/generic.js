import { templateCard } from "./templates";

// Pintamos los datos
export const drawCards = (chars) => chars.forEach((item) => templateCard(item));
