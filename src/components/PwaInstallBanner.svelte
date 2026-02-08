<script lang="ts">
  import { onMount } from "svelte";

  let canInstall = false;
  let hidden = false;
  let installEvent: any = null;

  function dismiss() {
    hidden = true;
    if (typeof window !== "undefined") {
      localStorage.setItem("pwa-install-banner-dismissed", "1");
    }
  }

  async function installApp() {
    if (!installEvent) return;
    installEvent.prompt();
    await installEvent.userChoice;
    installEvent = null;
    canInstall = false;
  }

  onMount(() => {
    if (localStorage.getItem("pwa-install-banner-dismissed") === "1") {
      hidden = true;
    }

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      installEvent = event;
      canInstall = true;
    };

    const onAppInstalled = () => {
      canInstall = false;
      hidden = true;
      localStorage.setItem("pwa-install-banner-dismissed", "1");
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  });
</script>

{#if canInstall && !hidden}
  <div class="fixed bottom-4 left-1/2 z-50 w-[min(92vw,560px)] -translate-x-1/2 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4 shadow-[0_16px_30px_-22px_rgba(0,0,0,0.55)]">
    <p class="text-sm font-medium text-[var(--text-main)]">
      Установить приложение на устройство?
    </p>
    <p class="mt-1 text-xs text-[var(--text-muted)]">
      Будет быстрее открываться и работать как отдельное приложение.
    </p>
    <div class="mt-3 flex items-center gap-2">
      <button
        type="button"
        on:click={installApp}
        class="rounded-lg bg-black px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#2a2a2a]"
      >
        Установить
      </button>
      <button
        type="button"
        on:click={dismiss}
        class="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-page)] px-3 py-1.5 text-sm text-[var(--text-main)]"
      >
        Позже
      </button>
    </div>
  </div>
{/if}
