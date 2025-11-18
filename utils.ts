import { createDefine } from 'fresh';

import dict from './dict.ts';
import type { Category, Lang } from './models.ts';

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

export const getCategoryColor = (category: Category) => {
  switch (category) {
    case 'harmful':
      return 'red-500';
    case 'moderate':
      return 'amber-500';
    case 'safe':
      return 'green-500';
  }
};
