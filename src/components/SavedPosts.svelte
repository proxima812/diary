<script lang="ts">
  import { onMount } from "svelte";

  type SavedItem = {
    id: string;
    title: string;
    desc?: string;
    savedAt?: number;
  };

  let items: SavedItem[] = [];

  function load() {
    const raw = localStorage.getItem("saved-posts");
    if (!raw) {
      items = [];
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      items = Array.isArray(parsed) ? parsed : [];
    } catch {
      items = [];
    }
  }

  function removeOne(id: string) {
    items = items.filter((item) => item.id !== id);
    localStorage.setItem("saved-posts", JSON.stringify(items));
    document.dispatchEvent(new Event("saved-posts-changed"));
  }

  function clearAll() {
    items = [];
    localStorage.removeItem("saved-posts");
    document.dispatchEvent(new Event("saved-posts-changed"));
  }

  onMount(() => {
    load();
    const handler = () => load();
    document.addEventListener("saved-posts-changed", handler);
    return () => document.removeEventListener("saved-posts-changed", handler);
  });
</script>

<div class="flex flex-col gap-6">
  {#if items.length > 0}
    <div class="flex justify-center sm:justify-end">
      <button
        type="button"
        on:click={clearAll}
        class="rounded-lg border border-amber-700 bg-amber-100 px-4 py-2 text-sm text-amber-900"
      >
        Очистить закладки
      </button>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each items as item (item.id)}
        <article class="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-page)] p-4">
          <h2 class="text-lg font-semibold text-[var(--text-main)]">{item.title}</h2>
          {#if item.desc}
            <p class="mt-2 text-sm text-[var(--text-muted)]">{item.desc}</p>
          {/if}
          <div class="mt-4 flex items-center gap-3">
            <a
              href={item.id}
              class="text-sm text-[var(--accent)] underline underline-offset-4"
            >
              Читать
            </a>
            <button
              type="button"
              on:click={() => removeOne(item.id)}
              class="text-sm text-amber-800 underline underline-offset-4"
            >
              Удалить
            </button>
          </div>
        </article>
      {/each}
    </div>
  {:else}
    <p class="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-page)] p-6 text-center text-[var(--text-muted)]">
      Пока нет сохраненных ежедневников.
    </p>
  {/if}
</div>
