import { getCharactersPage } from './utils/querys';
import { templateCard, showModal} from './utils/templates';

export const main = () => {
  getCharactersPage(1).then(res => drawCards(res));
  getCharactersPage(2).then(res => drawCards(res));
  getCharactersPage(3).then(res => drawCards(res));

};

// Pintamos los datos
export const drawCards = (info) => info.map(item => templateCard(item))
