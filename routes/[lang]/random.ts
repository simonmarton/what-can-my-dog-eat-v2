import { getRandomFood } from '../../lib/index.ts';
import { define } from '../../utils.ts';

export const handler = define.handlers(({ state: { lang } }) => {
  const { id } = getRandomFood();

  return new Response('', {
    status: 302,
    headers: { Location: `/${lang}/food/${id}` },
  });
});
