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
      <body class='w-full flex flex-col items-center text-slate-700 bg-size-[65%] sm:bg-size-[400px]'>
        <header class='sticky top-0 z-10 w-full flex justify-between sm:justify-center py-4 sm:py-6 bg-slate-400/70'>
          <div class='flex items-center justify-between w-full sm:w-3xl px-5'>
            <a
              href={`/${state.lang}`}
              class='text-xl sm:text-3xl font-black tracking-tight hover:underline'
            >
              {t`title`}
            </a>
            <LangSelector lang={state.lang} />
          </div>
        </header>
        <div class='w-full sm:w-3xl sm:flex flex-col p-5'>
          <section class='w-full flex justify-center mt-4 md:px-5'>
            <form
              class='relative w-full'
              action={`/${state.lang}/search`}
              method='GET'
            >
              <input
                type='search'
                placeholder={t`search`}
                name='q'
                required
                class='w-full rounded-full border border-gray-300 bg-white py-3 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-sky-700'
              />
              <span class='absolute left-3 top-2.5 text-gray-400 text-2xl font-emoji'>
                🐾
              </span>
              <button
                type='submit'
                class='absolute right-0 top-0 bottom-0 px-4 rounded-full font-emoji hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-200'
              >
                🔍
              </button>
            </form>
          </section>

          <Component />
        </div>
      </body>
    </html>
  );
});
