import { getImageUrl } from '../../../../lib/image';

//Ak chceš novú podstranku tak zduplikuj napr. tento súbor a potom choď do index.js a tam ho vlož podľa toho ako to tam vidíš ako to je spravene

//title: Názov v podstranke

const data = {
  title: '1 - 1. Hry a ještě něco',
  data: [
    { // Začiatok a koiec tejto zátvorky je jeden stĺpec ak ich tu dáš viac tak sa budú ukladať vedľa seba... jasne kedže je to stĺpec.
      data: [
        { // Začiatok a koniec tejto zátvorky je jedna bunka ak ich tu dáš viac budu sa ukladať pod seba
          color: 'white',
          image: getImageUrl('image_01.jpg'),
          text: '1. Hry<br /><small>a</small><br />ještě něco',
          to: 'https://issuu.com/squareupmedia/docs/f25',
          external: true,
        },
        {
          color: 'white',
          image: getImageUrl('image_02.jpg'),
          text: '2. Hry<br /><small>a</small><br />ještě něco',
          to: 'https://issuu.com/squareupmedia/docs/f25',
          external: true,
        }
      ]
    },
    {
      data: [
        {
          color: 'white',
          image: getImageUrl('image_01.jpg'),
          text: '1. Hry<br /><small>a</small><br />ještě něco',
          to: 'https://issuu.com/squareupmedia/docs/f25',
          external: true,
        }
      ]
    },
    {
      data: [
        {
          color: 'white',
          image: getImageUrl('image_01.jpg'),
          text: '1. Hry<br /><small>a</small><br />ještě něco',
          to: 'https://issuu.com/squareupmedia/docs/f25',
          external: true,
        }
      ]
    },
    {
      data: [
        {
          color: 'white',
          image: getImageUrl('image_01.jpg'),
          text: '1. Hry<br /><small>a</small><br />ještě něco',
          to: 'https://issuu.com/squareupmedia/docs/f25',
          external: true,
        }
      ]
    },
    {
      data: [
        {
          color: 'white',
          image: getImageUrl('image_01.jpg'),
          text: '1. Hry<br /><small>a</small><br />ještě něco',
          to: 'https://issuu.com/squareupmedia/docs/f25',
          external: true,
        }
      ]
    },
  ]
};

export default data;
