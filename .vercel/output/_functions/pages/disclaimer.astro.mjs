import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_aF7gp8kR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CnL1bsYt.mjs';
export { renderers } from '../renderers.mjs';

const $$Disclaimer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u041E\u0442\u043A\u0430\u0437 \u043E\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", "description": "\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0438 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043F\u043E \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430\u043C \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto max-w-3xl rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] px-6 py-8 sm:px-10"> <h1 class="mb-6 text-3xl font-semibold text-[var(--text-main)]">Отказ от ответственности</h1> <div class="prose prose-zinc max-w-none"> <p>
Сайт не предоставляет медицинских, юридических, финансовых или
				психотерапевтических рекомендаций. Вся информация носит справочный характер.
</p> <p>
Материалы сайта связаны с открытыми источниками и публикуются для удобного
				чтения и навигации.
</p> <p>
Если вам требуется профессиональная помощь, обратитесь к профильному
				специалисту.
</p> </div> </main> ` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 - \u0441\u0430\u0438\u0306\u0442\u044B/diary-vercel-app/src/pages/disclaimer.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/diary-vercel-app/src/pages/disclaimer.astro";
const $$url = "/disclaimer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Disclaimer,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
