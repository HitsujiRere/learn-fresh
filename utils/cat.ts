import axiod from "https://deno.land/x/axiod@0.26.1/mod.ts";

interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export async function getCat(): Promise<Cat> {
  const res = await axiod.get("/api/cat");
  return res.data;
}
