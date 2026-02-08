<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  let countLabel = "";

  function updateCount() {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem("saved-posts");
    if (!raw) {
      countLabel = "";
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      const count = Array.isArray(parsed) ? parsed.length : 0;
      countLabel = count > 0 ? String(count) : "";
    } catch {
      countLabel = "";
    }
  }

  onMount(() => {
    updateCount();
    window.addEventListener("storage", updateCount);
    document.addEventListener("saved-posts-changed", updateCount);
  });

  onDestroy(() => {
    if (typeof window === "undefined") return;
    window.removeEventListener("storage", updateCount);
    document.removeEventListener("saved-posts-changed", updateCount);
  });
</script>

<a
  href="/bookmarks"
  class=" md:order-0 inline-flex items-center gap-2 rounded-full border border-black bg-black px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#2b2b2b]"
>
  <span>Закладки</span>
  {#if countLabel}
    <span class="inline-flex min-w-5 items-center justify-center rounded-full bg-white px-1.5 py-0.5 text-xs font-semibold text-black">
      {countLabel}
    </span>
  {/if}
</a>
