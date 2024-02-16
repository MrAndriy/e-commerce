import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { slateEditor } from "@payloadcms/richtext-slate";
import dotenv from "dotenv";
import path from "path";
import { buildConfig } from "payload/config";

// import { Media } from './collections/Media';
// import { Orders } from './collections/Orders';
// import { ProductFiles } from './collections/ProductFile';
// import { Products } from './collections/Products/Products';
import { Users } from "./collections/Users";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

export default buildConfig({
  serverURL: process.env.VERCEL_URL || process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users],
  routes: {
    admin: "/sell",
  },
  admin: {
    user: "users",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- DigitalHippo",
      favicon: "/favicon.ico",
      ogImage: "/thumbnail.jpg",
    },
    buildPath: path.resolve(__dirname, "../dist/admin"),
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  // db: mongooseAdapter({
  //   url: process.env.MONGODB_URL!,
  // }),
  db: postgresAdapter({
    // Postgres-specific arguments go here.
    // `pool` is required.
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
