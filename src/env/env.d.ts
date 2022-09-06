import { clientSchema, serverSchema } from "./schema.mjs";
import { z } from "zod";

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv
      extends z.infer<typeof clientSchema & typeof serverSchema> {}
  }
}
