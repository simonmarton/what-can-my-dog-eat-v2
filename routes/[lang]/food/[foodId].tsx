import { getFoodDetails } from '../../../lib/index.ts';
import {
  capitalize,
  define,
  getCategoryBgColor,
  translator,
} from '../../../utils.ts';

export default define.page(({ params: { foodId }, state: { lang } }) => {
  const t = translator(lang);
  const food = getFoodDetails(foodId);

  // TODO: handle missing food
  if (!food) {
    return <p>Food not found</p>;
  }

  const bgColor = getCategoryBgColor(food.category);

  return (
    <section class='relative w-full mt-12 bg-gray-100 rounded-xl px-4 py-8 sm:p-12 shadow-xl'>
      <div
        class={`absolute top-0 left-0 w-full h-1.5  rounded-t-xl ${bgColor}`}
      />
      <div class='flex'>
        <div class='text-7xl sm:text-9xl mr-6 sm:mr-10 bg-white p-4 rounded-xl shadow-md'>
          {food.icon}
        </div>
        <div class='flex flex-col justify-end items-baseline gap-6'>
          <h2 class='text-4xl sm:text-6xl font-bold tracking-wide'>
            {capitalize(food.name[lang])}
          </h2>
          <span
            class={`text-sm sm:text-xl text-white ${bgColor} px-2 py-1 sm:px-4 sm:py-2 rounded`}
          >
            {t`${food.category}`}
          </span>
        </div>
      </div>

      {food.description && (
        <>
          <div class='mt-6 text-lg sm:text-2xl'>
            <span class='font-semibold text-gray-500'>
              {t`foodCategory`}:
            </span>
            <span class='ml-4 sm:ml-8 text-gray-400'>
              {food.description.title[lang]}
            </span>
          </div>
          <p class='mt-4 text-gray-700 leading-relaxed text-sm sm:text-xl'>
            {food.description.text[lang]}
          </p>
        </>
      )}
    </section>
  );
});
