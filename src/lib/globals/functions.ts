import { browser } from "$app/environment";
import type { Role } from "$lib/globals/schema";
import type { Cookies } from "@sveltejs/kit";
import { memo, range } from "radash";
import { get } from "svelte/store";
import { API } from "./consts";
import { authed, isDark } from "./stores";

/**
 * Loads the user's preferred color scheme from LocalStorage
 */
export function loadColorPref() {
  const color = localStorage.getItem("dp_colorPref");
  isDark.set(color !== undefined && color === "true");
}

type FetchFunction = (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => Promise<Response>;

/**
 * Fetches data using the user's token
 *
 * SERVER USE ONLY!
 *
 * If you want to use this on the client, use fetchAuthed
 *
 * @param method HTTP method to use
 * @param url
 * @param cookies Cookies object from `LayoutServerLoad`
 * @param data JSON data in body
 * @returns an HTTP response
 */
export async function serverGetAuthed(
  url: string,
  cookies: Cookies,
  fetchFunction: FetchFunction = fetch
): Promise<Response> {
  const cookie = cookies.get("dph_token"); // Cookies object from `LayoutServerLoad`, so our data loads early

  const response = await fetchFunction(`${API}${url}`, {
    // Start fetching
    headers: {
      // Headers
      ...(cookie === undefined
        ? undefined
        : { Authorization: `Basic ${cookie}` }) // Cookie exists, so add it as the auth header
    }
  });

  if (response.status === 401) cookies.delete("dph_token"); // Remove token if invalid

  return response;
}

/**
 * Fetches data using the user's token
 *
 * @param method HTTP method to use
 * @param url
 * @param data JSON data in body
 * @returns an HTTP response
 */
export async function fetchAuthed(
  method: string,
  url: string,
  options:
    | {
        data?: object;
        fetchFunction?: FetchFunction;
      }
    | undefined = undefined
): Promise<Response> {
  const cookie = browser ? getCookie("dph_token") : undefined; // cookie only exists on browser
  const fetchFunction = options?.fetchFunction || fetch;

  const response = await fetchFunction(`${API}${url}`, {
    // Start fetching
    method, // HTTP verb you want to use
    body: options?.data ? JSON.stringify(options.data) : undefined, // Body of fetch, always JSON because our API likes it
    headers: {
      // Headers
      ...(cookie === undefined
        ? undefined
        : { Authorization: `Basic ${cookie}` }) // Cookie exists, so add it as the auth header
    }
  });

  if (response.status === 401) removeCookie("dph_token"); // Expired token, so removes it ig
  if (!response.ok) Promise.reject(response.statusText); // This single line probably added hundreds of unneeded 500 errors, but makes errors actually show up.

  return response;
}

/**
 * Get cookie from browser
 */
const getCookie = memo((cookieName: string): string | undefined => {
  if (!browser) return; // Can't get the cookies if you can't access them

  const cookies = document.cookie.split(";");

  if (cookies.length === 0) return; // You have no cookies :(

  for (const index of range(cookies.length - 1)) {
    // eslint-disable-next-line security/detect-object-injection
    const cookie = cookies[index].trim();
    if (cookie.startsWith(`${cookieName}=`)) {
      return cookie.slice(Math.max(0, cookieName.length + 1));
    }
  }

  return;
});

export function removeCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

/**
 * Check if the role is a moderator or above
 *
 * @param role the role to check
 * @returns true or false
 */
export const moderatorOrAbove = memo((role: Role | undefined) => {
  return (
    get(authed) &&
    ["moderator", "developer", "admin"].includes(role?.name ?? "")
  );
});
