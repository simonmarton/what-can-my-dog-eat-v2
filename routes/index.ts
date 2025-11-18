import { define } from '../utils.ts';

// TODO: maybe load this from session/cookies?
const defaultLocale = 'en';

export const handler = define.handlers(() =>
  new Response('', { status: 302, headers: { Location: `/${defaultLocale}` } })
);
