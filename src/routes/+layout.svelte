<script lang="ts">
  import CookieConsent from "$lib/components/CookieConsent.svelte";
  import "../styles/app.postcss";
  import "../styles/fonts.postcss";
  import "../styles/nprogress.css";

  import { dev } from "$app/environment";
  import { navigating } from "$app/stores";
  import CasualLine from "$lib/components/decorative/CasualLine.svelte";
  import BannedModal from "$lib/components/modals/BannedModal.svelte";
  import Footer from "$lib/components/nav/Footer.svelte";
  import Navbar from "$lib/components/nav/Navbar.svelte";
  import { authed, isDark, user, windowWidth } from "$lib/globals/stores";
  import NProgress from "nprogress";
  import { Toaster } from "svelte-sonner";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  const maintenance = false;

  NProgress.configure({
    // Full list: https://github.com/rstacruz/nprogress#configuration
    minimum: 0.16
  });

  $: {
    if ($navigating) {
      NProgress.start();
    }
    if (!$navigating) {
      NProgress.done();
    }
  }
</script>

<div class="{$isDark ? 'dark' : ''} font-brand">
  {#if !maintenance || $user.role == "admin"}
    {#if dev || ($authed && ["admin", "moderator", "helper", "beta access", "verified", "nerd"].includes($user.role))}
      <div class="min-h-screen bg-slate-50 transition-all dark:bg-zinc-900">
        {#if $user.banned}
          <BannedModal />
        {/if}
        <Navbar />
        <slot />
      </div>
      {#if !data.cookieNotice}
        <CookieConsent />
      {/if}
      <Toaster
        theme="{$isDark ? 'dark' : 'light'}"
        position="{$windowWidth > 768 ? 'bottom-right' : 'top-center'}"
        richColors />
      <Footer />
    {:else}
      <div class="fixed left-0 top-0 flex h-screen w-screen bg-zinc-900">
        <div
          class="relative m-auto flex justify-around justify-self-center align-middle">
          <div class="w-4/5 space-y-2 md:w-2/3 lg:w-3/4">
            <div
              class="flex flex-col items-center justify-center space-x-3 rounded-xl bg-zinc-800 p-3 shadow-md shadow-black/25 md:flex-row md:justify-between">
              <img alt="Datapack Hub logo" src="/logos/dph.svg" class="w-1/4" />
              <div>
                <h1
                  class="mb-1 text-center text-xl font-bold dark:text-white md:text-left md:text-2xl lg:text-3xl">
                  Welcome to Datapack Hub!
                </h1>
                <p class="mb-1 text-xs text-zinc-200 md:text-sm lg:text-base">
                  Datapack Hub started in January 2022 as a PMC group for
                  datapack developers to come together, forming a community
                  around Minecraft Datapacks, Resource Packs, and more. Now,
                  we're a fast-growing community with over 500 followers, and
                  we're working on even more epic stuff. We strive to be the
                  friendliest and best datapacking community out there. Thanks
                  for checking us out!
                </p>
                <p class="mt-2 text-zinc-200">
                  Our website is still in development. In the meantime, come
                  join our community!
                </p>
                <ul class="list-inside list-disc">
                  <li>
                    <a
                      href="https://discord.datapackhub.net"
                      class="text-xs font-semibold text-blue-400 md:text-sm lg:text-base"
                      >Join our Discord (the main part of our project)</a>
                  </li>
                  <li>
                    <a
                      href="https://discord.datapackhub.net"
                      class="text-xs text-blue-400 md:text-sm lg:text-base"
                      >Follow our Planet Minecraft group</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="flex space-x-3 rounded-xl bg-red-800 p-3 shadow-md shadow-black/25">
              <p class="text-xs dark:text-white md:text-sm lg:text-base">
                <b>The Datapack Hub Website is coming in Autumn. </b>If you are
                part of the website's closed beta and aren't meant to be seeing
                this page, please sign in again.
              </p>
            </div>
          </div>
        </div>
      </div>
    {/if}
  {:else}
    <div
      class="fixed left-0 top-0 flex h-screen w-screen bg-zinc-900 align-middle">
      <div
        class="relative m-auto w-1/3 justify-self-center rounded-xl bg-zinc-800 p-3 align-middle shadow-md shadow-black/25">
        <div class="flex items-center justify-center">
          <img
            src="/logos/dph.svg"
            alt="logo"
            class="mr-1 h-8 rounded-full transition-all hover:brightness-75"
            height="32"
            width="32" />
          <span
            class="hidden text-2xl font-bold text-white transition-colors md:block">
            Datapack Hub
          </span>
        </div>
        <CasualLine />
        <p class="text-lg font-bold text-white">
          Datapack Hub is down for maintenance!
        </p>
        <p class="mb-2 text-white">
          Come hang out and check site status on our <a
            href="https://discord.datapackhub.net"
            class=" text-blue-200">Discord</a
          >!
        </p>
        <img alt="poorly drawn maintenance screen" src="/maintenance.avif" />
      </div>
    </div>
  {/if}
</div>
<!-- {/await} -->
