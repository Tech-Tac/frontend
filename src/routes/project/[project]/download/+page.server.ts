import { serverGetAuthed } from "$lib/globals/functions";
import { projectSchema, versionSchema } from "$lib/globals/schema";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params, fetch, cookies, url }) => {
  const parameters = url.searchParams;

  const [projectRequest, versionsRequest] = await Promise.all([
    serverGetAuthed(`/projects/get/${params.project}`, cookies, fetch),
    serverGetAuthed(`/versions/project/url/${params.project}`, cookies, fetch)
  ]);

  if ([projectRequest.status, versionsRequest.status].includes(404)) {
    throw error(404, {
      message: "Project not found",
      description: "Why not go ahead and turn the idea into a reality?"
    });
  }

  if ([projectRequest, versionsRequest].some(request => !request.ok)) {
    throw error(projectRequest.status, {
      message: "Unexpected error",
      description: "Something unexpected happen, try again later"
    });
  }

  const versionsJson = await versionsRequest.json();

  const [project, versions] = await Promise.all([
    projectSchema.parseAsync(await projectRequest.json()),
    versionSchema.array().parseAsync(versionsJson.result)
  ]);

  return {
    project: project,
    versions: versions,
    new: parameters.get("is_new")
  };
}) satisfies PageServerLoad;