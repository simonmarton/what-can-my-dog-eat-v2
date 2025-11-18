import { Lang } from './models.ts';

export default {
  title: {
    en: 'What can my dog eat?',
    hu: 'Mit ehet a kutyám?',
  },
  altTitle: {
    en: 'Should Pedro eat that? 🤔',
    hu: 'Ezt biztosan megeheti Pedro? 🤔',
  },
  search: {
    en: 'Search for a food..',
    hu: 'Keresés egy ételre..',
  },
  dangerousFoods: {
    en: 'Common dangerous foods for dogs',
    hu: 'Gyakori veszélyes ételek kutyáknak',
  },
} as {
  [key: string]: {
    [key in Lang]: string;
  };
};
