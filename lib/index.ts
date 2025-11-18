import type { Food, FoodDescription, FoodDetails } from '../models.ts';
import foodData from '../data/foods.json' with { type: 'json' };
import descriptionData from '../data/descriptions.json' with { type: 'json' };

const foods = foodData as Food[];
const descriptions = descriptionData as FoodDescription[];

export const getTopHarmfulFoods = (): Food[] => {
  const danger = [
    'xylitol',
    'chocolate',
    'grape',
    'onion',
    'garlic',
    'avocado',
    'tomato',
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
    description: descriptions[food.descriptionDictIdx],
  };
};
