import { Food } from '../models.ts';
import foods from '../data/foods.json' with { type: 'json' };

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

  const harmfulFoods = (foods as Food[]).filter(({ id }) =>
    danger.includes(id)
  );

  return harmfulFoods;
};
