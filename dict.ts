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
  searchResultsFor: {
    en: 'Search results for',
    hu: 'Találatok erre',
  },
  noResults: {
    en: 'No results found',
    hu: 'Nincs találat',
  },
  dangerousFoods: {
    en: 'Common dangerous foods for dogs',
    hu: 'Gyakori veszélyes ételek kutyáknak',
  },
  harmful: {
    en: 'Harmful',
    hu: 'Ártalmas',
  },
  moderate: {
    en: 'Moderate',
    hu: 'Mérsékelt',
  },
  safe: {
    en: 'Safe',
    hu: 'Biztonságos',
  },
  foodCategory: {
    en: 'Food Category',
    hu: 'Ételkategória',
  },
  foodCount: {
    en: 'Food in DB',
    hu: 'Ételek száma',
  },
  randomFood: {
    en: 'Random food',
    hu: 'Véletlenszerű étel',
  },
} as Record<string, Record<Lang, string>>;
