import { Food, Lang } from '../models.ts';
import { getRiskBgColor } from '../utils.ts';

type FoodGridProps = {
  foods: Food[];
  lang: Lang;
};

export default ({ foods, lang }: FoodGridProps) => (
  <div class='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6'>
    {foods.map((food) => (
      <a
        class='relative bg-gray-100 hover:bg-gray-200  rounded-xl p-6 shadow-lg hover:shadow-xl transition'
        href={`/${lang}/food/${food.id}`}
      >
        <div
          class={`absolute top-0 left-0 h-full w-1.5 ${
            getRiskBgColor(food.risk)
          } rounded-l-xl`}
        />
        <div class='flex flex-col items-center text-center'>
          <div class='text-5xl mb-3 font-emoji'>
            {food.icon}
          </div>
          <p class='text-lg font-medium'>{food.name[lang]}</p>
        </div>
      </a>
    ))}
  </div>
);
