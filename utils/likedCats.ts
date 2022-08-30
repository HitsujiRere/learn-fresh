import axiod from "https://deno.land/x/axiod@0.26.1/mod.ts";

export async function getLikedCats(): Promise<string[]> {
  const res = await axiod.get("/api/liked-cats");
  console.log(res);
  return res.data;
}
