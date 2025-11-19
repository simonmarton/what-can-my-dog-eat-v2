export const availableLangs = ['en', 'hu'] as const;
export type Lang = (typeof availableLangs)[number];

type DictEntry = Record<Lang, string>;

export type Risk = 'harmful' | 'moderate' | 'safe';

export type Food = {
  id: string;
  risk: Risk;
  name: DictEntry;
  categoryIdx: number;
  icon: string;
};

export type FoodCategory = {
  id: string;
  title: DictEntry;
  text: DictEntry;
};

export type FoodDetails = Omit<Food, 'categoryIdx'> & {
  category?: FoodCategory;
};

// export type SearchResult = {
//   id: string;
//   category: Category;
//   name: string; // meh
// };
