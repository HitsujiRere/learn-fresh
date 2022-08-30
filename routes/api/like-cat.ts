import { HandlerContext, Status } from "$fresh/server.ts";
import { pool } from "utils/database.ts";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  if (_req.method === "POST") {
    const url = (await _req.json()).url;

    if (url) {
      const client = await pool.connect();
      await client
        .queryArray`INSERT INTO cat_gallery (url) VALUES (${url})`;
      await client.release();
    }
  }

  return Response.json({});
};
