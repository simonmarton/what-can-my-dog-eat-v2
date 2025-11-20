import FoodGrid from '../../components/FoodGrid.tsx';
import { getTopHarmfulFoods } from '../../lib/index.ts';
import { define, translator } from '../../utils.ts';

export default define.page((props) => {
  const harmful = getTopHarmfulFoods();
  const lang = props.state.lang;
  const t = translator(lang);

  return (
    <section class='mt-4 sm:mt-12'>
      <h2 class='text-xl sm:text-2xl font-bold mb-6'>{t`dangerousFoods`}</h2>

      <FoodGrid foods={harmful} lang={lang} />
    </section>
  );
});
