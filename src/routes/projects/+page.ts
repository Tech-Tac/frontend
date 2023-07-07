import { apiURL } from "$lib/globals/consts";
import { projectSchema } from "$lib/globals/schema";
import { parallel, shuffle } from "radash";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch, url }) => {
  const params = url.searchParams;
  const page = params.has("page") ? parseInt(params.get("page") ?? "1") : 1;

  const [projects, featured] = await parallel(
    2,
    await Promise.all([
      fetch(`${apiURL}/projects/?page=${page}`),
      fetch(`${apiURL}/projects/featured`)
    ]),
    async res => (await res.json()).result
  );

  const data = projectSchema.array().parse(projects);
  const count = parseInt(projects.pages);

  return {
    projects: data,
    pages: count,
    featured: shuffle(featured),
    page: page
  };
}) satisfies PageLoad;
