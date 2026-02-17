import { createMemo, createSignal, onCleanup, onMount } from "solid-js";
import {
	type SavedItem,
	SAVED_POSTS_CHANGED_EVENT,
	buildHrefFromId,
	loadSavedPosts,
	saveSavedPosts,
} from "@/js/bookmarks";

type Props = {
	id: string;
	title: string;
	desc?: string;
};

export default function SavedPostButton(props: Props) {
	const [isSaved, setIsSaved] = createSignal(false);

	const savedItem = createMemo<SavedItem>(() => ({
		id: props.id,
		href: buildHrefFromId(props.id),
		title: props.title,
		desc: props.desc,
		savedAt: Date.now(),
	}));

	const sync = () => {
		const exists = loadSavedPosts().some(item => item?.id === props.id);
		setIsSaved(exists);
	};

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

	const toggle = () => {
		const list = loadSavedPosts();
		const next = isSaved()
			? list.filter(item => item?.id !== props.id)
			: [savedItem(), ...list.filter(item => item?.id !== props.id)];
		saveSavedPosts(next);
		setIsSaved(!isSaved());
	};

	return (
		<button
			type="button"
			onClick={toggle}
			class="rounded-xl border px-3 py-2 text-sm transition-colors border-[var(--border-soft)] bg-[var(--bg-elevated)] text-[var(--text-main)] hover:bg-[var(--bg-soft)] data-[saved=true]:bg-[var(--text-main)] data-[saved=true]:text-[var(--bg-page)]"
			data-saved={isSaved()}
			aria-pressed={isSaved()}
		>
			{isSaved() ? "В закладках" : "В закладки"}
		</button>
	);
}
