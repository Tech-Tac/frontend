import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { apiURL, fetchAuthed } from "$globals";
import { browser } from "$app/environment";

export const load = (async ({ params }) => {
  if (browser) {
    const projectReq = await fetch(apiURL + "/projects/get/" + params.slug);

    if (projectReq.ok) {
      const projectJson = (await projectReq.json()) as Project;

      const meReq = await fetchAuthed("get", apiURL + "/user/me");
      if (meReq.ok) {
        const meJson = (await meReq.json()) as User;
        if (meJson.id == projectJson.author) {
          return {
            project: projectJson,
          };
        } else {
          throw error(403, {
            message: "Not your project.",
            description: "Only the owner can edit this.",
          });
        }
      } else {
        throw error(401, {
          message: "Please sign in.",
          description:
            "If you are signed in, then our server must be down. Sorry!",
        });
      }
    } else {
      throw error(404, {
        message: "Silly boy!",
        description: "Doesnt exist, nerd",
      });
    }
    return {};
  }
}) satisfies PageLoad;
