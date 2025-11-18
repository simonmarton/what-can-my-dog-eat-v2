import { Lang } from '../models.ts';

type LangSelectorProps = {
  lang: Lang;
};

export default ({ lang }: LangSelectorProps) => (
  <div class='flex items-center space-x-2'>
    <span class='text-sm font-medium'>EN</span>
    <label class='relative inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        class='sr-only peer'
        checked={lang === 'hu'}
        onChange={() => {
          if (lang === 'en') {
            globalThis.location.href = '/hu';
          } else {
            globalThis.location.href = '/en';
          }
        }}
      />
      <div class='w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer _peer-checked:bg-green-600 transition'>
      </div>
      <div class='absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition peer-checked:translate-x-5'>
      </div>
    </label>
    <span class='text-sm font-medium'>HU</span>
  </div>
);
