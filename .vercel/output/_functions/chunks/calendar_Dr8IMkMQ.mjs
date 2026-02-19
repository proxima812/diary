import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, e as addAttribute } from './astro/server_aF7gp8kR.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://diary365.vercel.app");
const $$ReflectionCalendar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ReflectionCalendar;
  const { basePath, title, entriesCount = 0, availableSlugs = {} } = Astro2.props;
  const monthNames = {
    january: "\u042F\u043D\u0432\u0430\u0440\u044C",
    february: "\u0424\u0435\u0432\u0440\u0430\u043B\u044C",
    march: "\u041C\u0430\u0440\u0442",
    april: "\u0410\u043F\u0440\u0435\u043B\u044C",
    may: "\u041C\u0430\u0439",
    june: "\u0418\u044E\u043D\u044C",
    july: "\u0418\u044E\u043B\u044C",
    august: "\u0410\u0432\u0433\u0443\u0441\u0442",
    september: "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C",
    october: "\u041E\u043A\u0442\u044F\u0431\u0440\u044C",
    november: "\u041D\u043E\u044F\u0431\u0440\u044C",
    december: "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"
  };
  const holidays = {
    january: [1, 2, 7],
    february: [23],
    march: [8],
    may: [1, 9],
    june: [12],
    august: [30],
    october: [],
    november: [4],
    december: [25, 31]
  };
  const daysInMonth = {
    january: 31,
    february: 29,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31
  };
  function getFirstDayOffset(month) {
    const monthIndex = Object.keys(monthNames).indexOf(month);
    const date = new Date(2025, monthIndex, 1);
    let offset = date.getDay();
    return offset === 0 ? 6 : offset - 1;
  }
  return renderTemplate`${maybeRenderHead()}<section class="rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] px-3 py-5 shadow-[0_10px_35px_-24px_rgba(0,0,0,0.35)] sm:px-6 sm:py-8"> <div class="mb-8 border-b border-[var(--border-soft)] pb-5"> <h1 class="text-2xl font-semibold text-[var(--text-main)] sm:text-3xl">${title}</h1> <p class="mt-2 text-sm text-[var(--text-muted)]">Всего ежедневников: ${entriesCount}</p> </div> <div class="flex flex-col gap-12"> ${Object.keys(monthNames).map((month) => {
    const totalDays = daysInMonth[month];
    const firstDayOffset = getFirstDayOffset(month);
    const cells = [];
    const totalCells = firstDayOffset + totalDays;
    for (let i = 0; i < totalCells; i++) {
      if (i < firstDayOffset) {
        cells.push(null);
      } else {
        cells.push(i - firstDayOffset + 1);
      }
    }
    return renderTemplate`<section> <div class="flex items-center justify-between mb-3 px-1 sm:px-0"> <h2 class="text-lg sm:text-xl font-semibold">📅 ${monthNames[month]}</h2> <span class="text-xs sm:text-sm text-[var(--text-muted)]">${totalDays} дней</span> </div> <div class="grid grid-cols-7 gap-1 sm:gap-1.5 justify-items-center"> ${["\u041F\u043D", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041F\u0442", "\u0421\u0431", "\u0412\u0441"].map((day) => renderTemplate`<div class="text-center text-[10px] sm:text-xs text-[var(--text-muted)] font-medium mb-1"> ${day} </div>`)} ${cells.map((day) => {
      if (!day) {
        return renderTemplate`<div class="w-[38px] h-[38px] sm:w-[70px] sm:h-[70px]"></div>`;
      }
      const isHoliday = holidays[month]?.includes(day);
      const dayStr = String(day).padStart(2, "0");
      const monthIndex = Object.keys(monthNames).indexOf(month) + 1;
      const monthStr = String(monthIndex).padStart(2, "0");
      const slug = `daily_${dayStr}-${monthStr}`;
      const monthSlugs = availableSlugs?.[month] || [];
      const hasEntry = monthSlugs.includes(slug);
      if (!hasEntry) {
        return renderTemplate`<div class="w-[38px] h-[38px] sm:w-[70px] sm:h-[70px] flex items-center justify-center rounded-xl border border-[var(--border-soft)] bg-[var(--bg-soft)] text-[13px] sm:text-sm text-[var(--text-muted)] cursor-not-allowed select-none"> <span>${day}</span> </div>`;
      }
      return renderTemplate`<a${addAttribute(`/${basePath}/${month}/${slug}`, "href")}${addAttribute(`w-[38px] h-[38px] sm:w-[70px] sm:h-[70px] flex flex-col items-center justify-center rounded-xl border text-[13px] sm:text-sm transition-all select-none
										${isHoliday ? "bg-[var(--text-main)] border-[var(--text-main)] text-[var(--bg-page)] font-semibold hover:opacity-85" : "bg-[var(--bg-page)] hover:bg-[var(--bg-soft)] border-[var(--border-soft)] text-[var(--text-main)]"}`, "class")}> <span>${day}</span> ${isHoliday && renderTemplate`<div class="mt-[2px] h-1 w-1 rounded-full bg-[var(--bg-page)] sm:h-1.5 sm:w-1.5"></div>`} </a>`;
    })} </div> </section>`;
  })} </div> </section>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 - \u0441\u0430\u0438\u0306\u0442\u044B/diary-vercel-app/src/components/ReflectionCalendar.astro", void 0);

function buildAvailableSlugs(reflections) {
  return Object.fromEntries(
    Object.entries(reflections).map(([month, posts]) => [month, Object.keys(posts)])
  );
}
function countAvailableEntries(availableSlugs) {
  return Object.values(availableSlugs).reduce((total, monthSlugs) => total + monthSlugs.length, 0);
}

export { $$ReflectionCalendar as $, buildAvailableSlugs as b, countAvailableEntries as c };
