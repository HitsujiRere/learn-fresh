import { HandlerContext } from "$fresh/server.ts";

interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  if (res.status === 404) {
    throw Error;
  }
  const cats: Cat[] = await res.json();
  return Response.json(cats[0]);
};
