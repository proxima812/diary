import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_aF7gp8kR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CnL1bsYt.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438", "description": "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto max-w-3xl rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] px-6 py-8 sm:px-10"> <h1 class="mb-6 text-3xl font-semibold text-[var(--text-main)]">Политика конфиденциальности</h1> <div class="prose prose-zinc max-w-none"> <p>
Сайт публикует материалы информационного характера. Информация на страницах
				ежедневников собрана и подготовлена из открытых источников.
</p> <p>
Мы не запрашиваем у пользователей специальные категории персональных данных.
				Технические данные (например, логи запросов и cookie, если применимо) могут
				обрабатываться хостинг-платформой для корректной работы сайта и безопасности.
</p> <p>
Используя сайт, вы соглашаетесь с данной политикой. Если у вас есть вопросы по
				контенту или обработке данных, используйте контакты, размещенные в доступных
				каналах проекта.
</p> </div> </main> ` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 - \u0441\u0430\u0438\u0306\u0442\u044B/diary-vercel-app/src/pages/privacy.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/diary-vercel-app/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Privacy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
