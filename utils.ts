import { createDefine } from 'fresh';

import dict from './dict.ts';
import type { Lang, Risk } from './models.ts';

// This specifies the type of "ctx.state" which is used to share
// data among middlewares, layouts and routes.
export interface State {
  lang: Lang;
}

export const define = createDefine<State>();

export const translator =
  (lang: Lang) => (raw: TemplateStringsArray, ...variables: string[]) => {
    const key = String.raw({ raw }, ...variables);
    return dict[key]?.[lang] ?? `%${key}%`;
  };

export const capitalize = ([l, ...str]: string) =>
  l.toUpperCase() + str.join('');

export const getRiskBgColor = (risk: Risk) => {
  switch (risk) {
    case 'harmful':
      return 'bg-red-500';
    case 'moderate':
      return 'bg-amber-500';
    case 'safe':
      return 'bg-green-500';
  }
};
