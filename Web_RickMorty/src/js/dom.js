import { templateCard } from "./templates";

export const drawCards = (data) => data.map(item => templateCard(item))
