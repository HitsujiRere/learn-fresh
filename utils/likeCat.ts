import axiod from "https://deno.land/x/axiod@0.26.1/mod.ts";

export async function likeCat(url: string) {
  await axiod.post("/api/like-cat", { url });
}
