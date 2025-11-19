import FoodGrid from '../../components/FoodGrid.tsx';
import { searchFoods } from '../../lib/index.ts';
import { define, translator } from '../../utils.ts';

export default define.page(({ state: { lang }, url }) => {
  const t = translator(lang);

  const { searchParams } = new URL(url);
  const query = searchParams.get('q');

  // TODO: 400
  if (!query) return null;

  const foods = searchFoods(query, lang);

  return (
    <section class='w-full mt-12'>
      <h2 class='text-xl font-bold mb-6'>{t`searchResultsFor`} "{query}"</h2>

      {foods.length === 0 && <div class='text-gray-500'>{t`noResults`}</div>}
      <FoodGrid foods={foods} lang={lang} />
    </section>
  );
});
