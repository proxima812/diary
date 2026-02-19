import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_aF7gp8kR.mjs';
import 'kleur/colors';
import { b as buildAvailableSlugs, c as countAvailableEntries, $ as $$ReflectionCalendar } from '../../chunks/calendar_Dr8IMkMQ.mjs';
import { a as alanonmm } from '../../chunks/alanonmm_KaxRjSJe.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CnL1bsYt.mjs';
export { renderers } from '../../renderers.mjs';

const $$Alanonmm = createComponent(($$result, $$props, $$slots) => {
  const availableSlugs = buildAvailableSlugs(alanonmm);
  const entriesCount = countAvailableEntries(availableSlugs);
  const title = "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0410\u043B-\u0410\u043D\u043E\u043D \u041C\u0443\u0436\u0435\u0441\u0442\u0432\u043E \u041C\u0435\u043D\u044F\u0442\u044C\u0441\u044F";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ReflectionCalendar", $$ReflectionCalendar, { "basePath": "alanonmm", "title": title, "entriesCount": entriesCount, "availableSlugs": availableSlugs })} ` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 - \u0441\u0430\u0438\u0306\u0442\u044B/diary-vercel-app/src/pages/calendar/alanonmm.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/diary-vercel-app/src/pages/calendar/alanonmm.astro";
const $$url = "/calendar/alanonmm";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Alanonmm,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
