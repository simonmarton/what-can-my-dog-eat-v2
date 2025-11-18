import { define } from '../utils.ts';

// TODO: maybe load this from session?
const defaultLocale = 'hu';

export const handler = define.handlers(() =>
  new Response('', { status: 302, headers: { Location: `/${defaultLocale}` } })
);
