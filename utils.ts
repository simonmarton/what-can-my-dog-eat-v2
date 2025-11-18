import { createDefine } from 'fresh';

import dict from './dict.ts';
import { Lang } from './models.ts';

// This specifies the type of "ctx.state" which is used to share
// data among middlewares, layouts and routes.
export interface State {
  lang: Lang;
}

export const define = createDefine<State>();

export const translator = (lang: Lang) => ([key]: TemplateStringsArray) =>
  dict[key]?.[lang] ?? `%${key}%`;
