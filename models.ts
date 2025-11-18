export const availableLangs = ['en', 'hu'] as const;
export type Lang = (typeof availableLangs)[number];

type DictEntry = Record<Lang, string>;

export type Category = 'harmful' | 'moderate' | 'safe';

export type Food = {
  id: string;
  category: Category;
  name: DictEntry;
  descriptionDictIdx: number;
  icon: string;
};

export type FoodDescription = {
  title: DictEntry;
  text: DictEntry;
};

export type FoodDetails = Omit<Food, 'descriptionDictIdx'> & {
  description?: FoodDescription;
};

// export type SearchResult = {
//   id: string;
//   category: Category;
//   name: string; // meh
// };
