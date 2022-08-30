import "https://deno.land/x/dotenv@v3.2.0/load.ts";

import { Pool } from "https://deno.land/x/postgres@v0.16.1/mod.ts";

export const pool = new Pool(
  {
    hostname: Deno.env.get("DATABASE_HOSTNAME"),
    database: Deno.env.get("DATABASE_DATABASE"),
    port: Deno.env.get("DATABASE_PORT"),
    user: Deno.env.get("DATABASE_USER"),
    password: Deno.env.get("DATABASE_PASSWORD"),
  },
  3,
  true,
);
