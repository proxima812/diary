export type ReflectionsByMonth = Record<string, Record<string, unknown>>

export function buildAvailableSlugs(reflections: ReflectionsByMonth) {
	return Object.fromEntries(
		Object.entries(reflections).map(([month, posts]) => [month, Object.keys(posts)]),
	) as Record<string, string[]>
}

