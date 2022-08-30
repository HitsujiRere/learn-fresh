import { HandlerContext } from "$fresh/server.ts";
import { pool } from "utils/database.ts";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const client = await pool.connect();
  const result = await client.queryArray(
    "SELECT url FROM cat_gallery",
  );
  const rows = result.rows as string[][];
  const urls = rows.flat();
  await client.release();
  return Response.json(urls);
};
