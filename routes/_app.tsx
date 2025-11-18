import { define, translator } from '../utils.ts';
import LangSelector from '../islands/LangSelector.tsx';

export default define.page(function App({ Component, state }) {
  const t = translator(state.lang);

  return (
    <html>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{t`title`} V2</title>
      </head>
      <body class='sm:flex justify-center bg-gray-50 text-gray-900 p-5'>
        <div class='sm:w-3xl'>
          <header class='w-full flex items-center justify-between _sm:px-8 py-6'>
            <a
              href={`/${state.lang}`}
              class='text-3xl font-black tracking-tight hover:underline'
            >
              {t`title`}
            </a>
            <LangSelector lang={state.lang} />
          </header>

          <section class='w-full flex justify-center mt-4 px-5'>
            <div class='relative w-full'>
              <input
                type='text'
                placeholder={t`search`}
                class='w-full rounded-full border border-gray-300 bg-white py-3 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-green-600'
              />
              <span class='absolute left-4 top-3.5 text-gray-400 text-lg'>
                🐾
              </span>
            </div>
          </section>

          <Component />
        </div>
      </body>
    </html>
  );
});
