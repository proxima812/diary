<script lang="ts">
  export let id = "";
  export let title = "";
  export let desc = "";

  let isSaved = false;

  function loadSaved() {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem("saved-posts");
    if (!raw) {
      isSaved = false;
      return;
    }

    try {
      const list = JSON.parse(raw);
      isSaved = Array.isArray(list) && list.some((item) => item?.id === id);
    } catch {
      isSaved = false;
    }
  }

  function buildHrefFromId(rawId: string) {
    const parts = rawId.split("-");
    if (parts.length < 3) return `/${rawId}`;
    const [community, month, ...slugParts] = parts;
    return `/${community}/${month}/${slugParts.join("-")}`;
  }

  function toggleSave() {
    const raw = localStorage.getItem("saved-posts");
    let list = [];

    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        list = Array.isArray(parsed) ? parsed : [];
      } catch {
        list = [];
      }
    }

    const next = isSaved
      ? list.filter((item) => item?.id !== id)
      : [
          {
            id,
            href: buildHrefFromId(id),
            title,
            desc,
            savedAt: Date.now(),
          },
          ...list.filter((item) => item?.id !== id),
        ];

    localStorage.setItem("saved-posts", JSON.stringify(next));
    isSaved = !isSaved;
    document.dispatchEvent(new Event("saved-posts-changed"));
  }

  $: if (typeof window !== "undefined") {
    loadSaved();
  }
</script>

<button
  type="button"
  on:click={toggleSave}
  class={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
    isSaved
      ? "border-amber-600 bg-amber-100 text-amber-900"
      : "border-[var(--border-soft)] bg-[var(--bg-page)] text-[var(--text-main)] hover:bg-[#f2e3ba]"
  }`}
>
  {#if isSaved}
    Удалить из закладок
  {:else}
    В закладки
  {/if}
</button>
