import { Fzf } from 'fzf';

import type { Food, FoodCategory, FoodDetails, Lang } from '../models.ts';
import foodData from '../data/foods.json' with { type: 'json' };
import categoryData from '../data/categories.json' with { type: 'json' };

const foods = foodData as Food[];
const categories = categoryData as FoodCategory[];

export const getTopHarmfulFoods = (): Food[] => {
  const danger = [
    // 'xylitol',
    'chocolate',
    'grape',
    'onion',
    // 'garlic',
    'avocado',
    // 'tomato',
    'coffee',
    'alcohol',
  ];

  const harmfulFoods = foods.filter(({ id }) => danger.includes(id));

  return harmfulFoods;
};

export const getFoodDetails = (foodId: string): FoodDetails | null => {
  const food = foods.find((f) => f.id === foodId);

  if (!food) return null;

  return {
    ...food,
    category: categories[food.categoryIdx],
  };
};

export const searchFoods = (query: string, lang: Lang): Food[] => {
  const lowerQuery = query.toLowerCase();

  const fuzzy = new Fzf(foods, {
    selector: (food) => food.name[lang],
    casing: 'case-insensitive',
  });

  const results = fuzzy.find(lowerQuery);

  return results.map((result) => result.item).toSorted((a, b) =>
    a.name[lang].localeCompare(b.name[lang])
  );
};

export const getFoodsByCategory = (
  categoryId: string,
): { category: FoodCategory; foods: Food[] } => {
  const categoryIdx = categories.findIndex(({ id }) => id === categoryId);
  const category = categories[categoryIdx];

  if (!category) {
    throw new Error('Category not found');
  }

  const categoryFoods = foods.filter((food) =>
    food.categoryIdx === categoryIdx
  );

  return { category, foods: categoryFoods };
};
