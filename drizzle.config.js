/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:lz2nr5mwyFBW@ep-quiet-sun-a7zj2t8m.ap-southeast-2.aws.neon.tech/ai_mock_interviewer?sslmode=require',
    }
  };