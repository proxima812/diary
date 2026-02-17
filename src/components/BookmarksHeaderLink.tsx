import { createSignal, onCleanup, onMount, Show } from "solid-js";
import { SAVED_POSTS_CHANGED_EVENT, loadSavedPosts } from "@/js/bookmarks";

export default function BookmarksHeaderLink() {
	const [count, setCount] = createSignal(0);

	const sync = () => setCount(loadSavedPosts().length);

	onMount(() => {
		sync();
		window.addEventListener("storage", sync);
		document.addEventListener(SAVED_POSTS_CHANGED_EVENT, sync);
	});

	onCleanup(() => {
		if (typeof window === "undefined") return;
		window.removeEventListener("storage", sync);
		document.removeEventListener(SAVED_POSTS_CHANGED_EVENT, sync);
	});

	return (
		<a
			href="/bookmarks"
			aria-label="Открыть закладки"
			class="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--bg-elevated)] px-3 py-1.5 text-sm font-medium text-[var(--text-main)] transition-colors hover:bg-[var(--bg-soft)]"
		>
			<span>Закладки</span>
			<Show when={count() > 0}>
				<span class="inline-flex min-w-5 items-center justify-center rounded-full bg-[var(--text-main)] px-1.5 py-0.5 text-xs font-semibold text-[var(--bg-page)]">
					{count()}
				</span>
			</Show>
		</a>
	);
}
