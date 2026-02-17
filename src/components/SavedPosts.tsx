import { For, Show, createSignal, onCleanup, onMount } from "solid-js";
import {
	type SavedItem,
	SAVED_POSTS_CHANGED_EVENT,
	buildHrefFromId,
	clearSavedPosts,
	loadSavedPosts,
	saveSavedPosts,
} from "@/js/bookmarks";

export default function SavedPosts() {
	const [items, setItems] = createSignal<SavedItem[]>([]);

	const sync = () => setItems(loadSavedPosts());

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

	const removeOne = (id: string) => {
		saveSavedPosts(items().filter(item => item.id !== id));
	};

	return (
		<div class="flex flex-col gap-6">
			<Show
				when={items().length > 0}
				fallback={
					<p class="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-soft)] p-6 text-center text-[var(--text-muted)]">
						Пока нет сохраненных ежедневников.
					</p>
				}
			>
				<div class="flex justify-center sm:justify-end">
					<button
						type="button"
						onClick={() => clearSavedPosts()}
						class="rounded-xl border border-[var(--border-soft)] bg-[var(--bg-elevated)] px-4 py-2 text-sm text-[var(--text-main)] transition-colors hover:bg-[var(--bg-soft)]"
					>
						Очистить закладки
					</button>
				</div>

				<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<For each={items()}>
						{item => (
							<article class="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-soft)] p-4">
								<h2 class="text-lg font-semibold text-[var(--text-main)]">{item.title}</h2>
								<Show when={item.desc}>
									<p class="mt-2 text-sm text-[var(--text-muted)]">{item.desc}</p>
								</Show>
								<div class="mt-4 flex items-center gap-4 text-sm">
									<a
										href={item.href || buildHrefFromId(item.id)}
										class="text-[var(--text-main)] underline underline-offset-4"
									>
										Читать
									</a>
									<button
										type="button"
										onClick={() => removeOne(item.id)}
										class="text-[var(--text-muted)] underline underline-offset-4"
									>
										Удалить
									</button>
								</div>
							</article>
						)}
					</For>
				</div>
			</Show>
		</div>
	);
}
