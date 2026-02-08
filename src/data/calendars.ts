export const calendarBooks = [
	{
		id: "aa",
		label: "Календарь размышлений АА",
		calendarHref: "/calendar/aa",
		basePath: "aa",
	},
	{
		id: "an",
		label: "Календарь размышлений АН",
		calendarHref: "/calendar/an",
		basePath: "an",
	},
	{
		id: "aa24",
		label: "Календарь Я и АА 24 часа",
		calendarHref: "/calendar/aa24",
		basePath: "aa24",
	},
	{
		id: "aadays",
		label: "Календарь АА День за днем",
		calendarHref: "/calendar/aadays",
		basePath: "aadays",
	},
	{
		id: "alanon",
		label: "Календарь Ал-Анон День за Днем",
		calendarHref: "/calendar/alanon",
		basePath: "alanon",
	},
	{
		id: "alanonmm",
		label: "Календарь Ал-Анон Мужество Меняться",
		calendarHref: "/calendar/alanonmm",
		basePath: "alanonmm",
	},
] as const

export const calendarBookById = Object.fromEntries(
	calendarBooks.map(book => [book.id, book]),
)

