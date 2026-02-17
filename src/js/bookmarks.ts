export type SavedItem = {
	id: string;
	href?: string;
	title: string;
	desc?: string;
	savedAt?: number;
};

const KEY = "saved-posts";
export const SAVED_POSTS_CHANGED_EVENT = "saved-posts-changed";

function parseList(raw: string | null): SavedItem[] {
	if (!raw) return [];
	try {
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}

export function loadSavedPosts(): SavedItem[] {
	if (typeof window === "undefined") return [];
	return parseList(localStorage.getItem(KEY));
}

export function saveSavedPosts(items: SavedItem[]) {
	if (typeof window === "undefined") return;
	localStorage.setItem(KEY, JSON.stringify(items));
	document.dispatchEvent(new Event(SAVED_POSTS_CHANGED_EVENT));
}

export function clearSavedPosts() {
	if (typeof window === "undefined") return;
	localStorage.removeItem(KEY);
	document.dispatchEvent(new Event(SAVED_POSTS_CHANGED_EVENT));
}

export function buildHrefFromId(rawId: string) {
	const parts = rawId.split("-");
	if (parts.length < 3) return `/${rawId}`;
	const [community, month, ...slugParts] = parts;
	return `/${community}/${month}/${slugParts.join("-")}`;
}
