import { getImageUrl } from '../../../lib/image';
import { matchColorToUrl } from '../../../lib/colors';

const createPageUrl = (color, id) => {
  return `/page/${matchColorToUrl[color]}/${id}`;
}

// color: [ white, yellow, blue, lightBlue, pink ] - iba tieto možnosti tam sú
// image: v 'public/assets/img' vložíš nový obrázok a dáš jeho názov do getImageUrl(<názov.obrázku>)
// text: obyčajný text
// to: je to odkaz kám ma isť createPageUrl(<farba>,<id>) radšej to len skopiruj z predchádzajuceho a pridaj tam ID o jedno vyšie  viz. dole
// external: true... -> ak ideš na ISSUU tak to tam musíš dať a dať hodnotu TRUE

const data = [
  {
    color: 'white',
    data: [
      {
        color: 'pink',
        image: getImageUrl('image_01.jpg'),
        text: '1. Hry<br /><small>a</small><br />ještě něco',
        to: createPageUrl('pink', 1),
      },
      {
        color: 'pink',
        image: getImageUrl('image_02.jpg'),
        text: '2. Hry<br /><small>a</small><br />ještě něco',
        to: createPageUrl('pink', 2),
      },
      {
        color: 'pink',
        image: getImageUrl('image_03.jpg'),
        text: '3. Hry<br /><small>a</small><br />ještě něco',
        to: 'https://issuu.com/squareupmedia/docs/f25',
        external: true,
      }
    ]
  },
  {
    color: 'lightBlue',
    data: [
      {
        color: 'blue',
        image: getImageUrl('image_04.jpg'),
        text: '1. Hry<br /><small>a</small><br />ještě něco',
        to: createPageUrl('blue', 1),
      },
      {
        color: 'blue',
        image: getImageUrl('image_05.jpg'),
        text: '2. Hry<br /><small>a</small><br />ještě něco',
        to: createPageUrl('blue', 2),
      },
      {
        color: 'blue',
        image: getImageUrl('image_05.jpg'),
        text: '2. Hry<br /><small>a</small><br />ještě něco',
        to: createPageUrl('blue', 3),
      }
    ]
  },
  {
    color: 'pink',
    data: [
      {
        color: 'white',
        image: getImageUrl('image_01.jpg'),
        text: '1. Hry<br /><small>a</small><br />ještě něco',
        to: createPageUrl('white', 1),
      },
      {
        color: 'white',
        image: getImageUrl('image_02.jpg'),
        text: '2. Hry<br /><small>a</small><br />ještě něco',
        to: createPageUrl('white', 2),
      }
    ]
  },
  {
    color: 'yellow',
    data: [
      {
        color: 'lightBlue',
        image: getImageUrl('image_03.jpg'),
        text: '1. Hry<br /><small>a</small><br />ještě něco',
        to: createPageUrl('lightBlue', 1),
      },
      {
        color: 'lightBlue',
        image: getImageUrl('image_04.jpg'),
        text: '2. Hry<br /><small>a</small><br />ještě něco',
        to: createPageUrl('lightBlue', 2),
      }
    ]
  },
  {
    color: 'lightBlue',
    data: [
      {
        color: 'yellow',
        image: getImageUrl('image_05.jpg'),
        text: '1. Hry<br /><small>a</small><br />ještě něco',
        to: createPageUrl('yellow', 1),
      },
      {
        color: 'yellow',
        image: getImageUrl('image_01.jpg'),
        text: '2. Hry<br /><small>a</small><br />ještě něco',
        to: createPageUrl('yellow', 2),
      }
    ]
  }
];

export default data;
