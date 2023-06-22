// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// and what to do when importing types
declare namespace App {
  interface Error {
    message: string;
    description: string;
  }

  // interface Locals {}
  // interface PageData {}
  // interface Platform {}
  interface Platform {
    env: {
      COUNTER: DurableObjectNamespace;
    };
    context: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      waitUntil(promise: Promise<any>): void;
    };
    caches: CacheStorage & { default: Cache };
  }
}

declare module "sveltejs-tippy";
declare module "marked-linkify-it";
declare module "marked-smartypants";

declare type Report = {
  message: string;
  reporter: User;
  project: Project;
  id: number;
};

/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />
