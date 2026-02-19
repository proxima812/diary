import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_aF7gp8kR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CnL1bsYt.mjs';
export { renderers } from '../renderers.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F", "description": "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0441\u0430\u0439\u0442\u0430." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto max-w-3xl rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] px-6 py-8 sm:px-10"> <h1 class="mb-6 text-3xl font-semibold text-[var(--text-main)]">Условия использования</h1> <div class="prose prose-zinc max-w-none"> <p>
Материалы сайта предоставляются в ознакомительных целях. Информация собрана из
				открытых источников и не является индивидуальной консультацией.
</p> <p>
Пользователь самостоятельно принимает решения на основе прочитанного и несет
				ответственность за их применение.
</p> <p>
Запрещается использовать материалы сайта в целях, нарушающих применимое
				законодательство.
</p> </div> </main> ` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 - \u0441\u0430\u0438\u0306\u0442\u044B/diary-vercel-app/src/pages/terms.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/diary-vercel-app/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Terms,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
