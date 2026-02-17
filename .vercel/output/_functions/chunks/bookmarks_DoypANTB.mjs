const KEY = "saved-posts";
const SAVED_POSTS_CHANGED_EVENT = "saved-posts-changed";
function parseList(raw) {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
function loadSavedPosts() {
  if (typeof window === "undefined") return [];
  return parseList(localStorage.getItem(KEY));
}
function buildHrefFromId(rawId) {
  const parts = rawId.split("-");
  if (parts.length < 3) return `/${rawId}`;
  const [community, month, ...slugParts] = parts;
  return `/${community}/${month}/${slugParts.join("-")}`;
}

export { SAVED_POSTS_CHANGED_EVENT as S, buildHrefFromId as b, loadSavedPosts as l };
