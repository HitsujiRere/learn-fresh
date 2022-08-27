import axiod from "https://deno.land/x/axiod@0.26.1/mod.ts";

const ENDPOINT = "/api/cat";

interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export async function get(): Promise<Cat> {
  const res = await axiod.get(ENDPOINT);
  return res.data;
}
