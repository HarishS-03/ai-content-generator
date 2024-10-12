/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://aryadb_owner:AYDEKHtJW70g@ep-icy-snow-a199msxn.ap-southeast-1.aws.neon.tech/aryadb?sslmode=require",
  },
};
