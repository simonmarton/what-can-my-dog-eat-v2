import { getTopHarmfulFoods } from '../../lib/index.ts';
import { define, translator } from '../../utils.ts';

export default define.page((props) => {
  const harmful = getTopHarmfulFoods();
  const lang = props.state.lang;
  const t = translator(lang);

  return (
    <section class='w-full mt-12'>
      <h2 class='text-2xl font-bold mb-6'>{t`dangerousFoods`}</h2>

      <div class='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6'>
        {harmful.map((food) => (
          <a
            class='relative bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition'
            href={`${lang}/food/${food.id}`}
          >
            <div class='absolute top-0 left-0 h-full w-1.5 bg-red-500 rounded-l-xl' />
            <div class='flex flex-col items-center text-center'>
              <div class='text-5xl mb-3'>{food.icon || `🤷‍♂️`}</div>
              <p class='text-lg font-medium'>{food.name[lang]}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
});
