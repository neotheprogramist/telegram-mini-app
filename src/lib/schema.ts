import { sqliteTable, int, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
    id: int("id").primaryKey(),
    username: text("username"),
    telegram_id: text("telegram_id"),
    score: int("score"),
});

