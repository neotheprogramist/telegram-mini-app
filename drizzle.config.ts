import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
    schema: "./src/lib/schema.ts",
    out: "./migrations",
    dialect: "sqlite",
    driver: "turso",
    dbCredentials: {
        url: process.env.DB_URL!,
        authToken: process.env.DB_TOKEN,
    },
})