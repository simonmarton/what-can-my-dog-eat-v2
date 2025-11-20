import { Lang } from '../models.ts';

type LangSelectorProps = {
  lang: Lang;
};

export default ({ lang }: LangSelectorProps) => (
  <div class='flex items-center space-x-2'>
    <span class='text-sm font-bold'>EN</span>
    <label class='relative inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        class='sr-only peer'
        checked={lang === 'hu'}
        onChange={() => {
          const path = location.pathname.substring(3);
          const newLang = lang === 'en' ? 'hu' : 'en';

          globalThis.location.href = `/${newLang}${path}${location.search}`;
        }}
      />
      <div class='w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer _peer-checked:bg-green-600 transition'>
      </div>
      <div class='absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition peer-checked:translate-x-5'>
      </div>
    </label>
    <span class='text-sm font-bold'>HU</span>
  </div>
);
