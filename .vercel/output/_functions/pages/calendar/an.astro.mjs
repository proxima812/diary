import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server__GzN6Zez.mjs';
import 'kleur/colors';
import { b as buildAvailableSlugs, c as countAvailableEntries, $ as $$ReflectionCalendar } from '../../chunks/calendar_1RNRTTq5.mjs';
import { a as an } from '../../chunks/an_BqBTXY0G.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B-fhVToY.mjs';
export { renderers } from '../../renderers.mjs';

const $$An = createComponent(($$result, $$props, $$slots) => {
  const availableSlugs = buildAvailableSlugs(an);
  const entriesCount = countAvailableEntries(availableSlugs);
  const title = "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0440\u0430\u0437\u043C\u044B\u0448\u043B\u0435\u043D\u0438\u0439 \u0410\u041D";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ReflectionCalendar", $$ReflectionCalendar, { "basePath": "an", "title": title, "entriesCount": entriesCount, "availableSlugs": availableSlugs })} ` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 - \u0441\u0430\u0438\u0306\u0442\u044B/diary-vercel-app/src/pages/calendar/an.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/diary-vercel-app/src/pages/calendar/an.astro";
const $$url = "/calendar/an";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$An,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
