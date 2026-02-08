export type ReflectionsByMonth = Record<string, Record<string, unknown>>

export function buildAvailableSlugs(reflections: ReflectionsByMonth) {
	return Object.fromEntries(
		Object.entries(reflections).map(([month, posts]) => [month, Object.keys(posts)]),
	) as Record<string, string[]>
}

export function countAvailableEntries(availableSlugs: Record<string, string[]>) {
	return Object.values(availableSlugs).reduce((total, monthSlugs) => total + monthSlugs.length, 0)
}
