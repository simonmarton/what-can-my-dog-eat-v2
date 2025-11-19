import FoodGrid from '../../../components/FoodGrid.tsx';
import { getFoodsByCategory } from '../../../lib/index.ts';
import { define, translator } from '../../../utils.ts';

export default define.page(({ params: { categoryId }, state: { lang } }) => {
  const t = translator(lang);
  const { category, foods } = getFoodsByCategory(categoryId);

  return (
    <section class='w-full mt-12'>
      <h2 class='text-xl font-bold mb-6'>
        {t`foodCategory`}:{' '}
        <span class='ml-4 sm:ml-8 text-gray-400'>
          {category.title[lang]}
        </span>
      </h2>

      <FoodGrid foods={foods} lang={lang} />
    </section>
  );
});
