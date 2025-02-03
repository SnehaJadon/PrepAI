/** @type {import('drizzle-kit').Config} */

export default {
    schema: "./utils/schema.js",
    dialect: "postgresql",
    dbCredentials: {
      url: "postgresql://accounts:npg_nZSCyNB01hUY@ep-bold-darkness-a8sra1lg-pooler.eastus2.azure.neon.tech/PrepAI?sslmode=require"
    }
};
