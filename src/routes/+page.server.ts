import type { PageServerLoad } from "./$types";
import { db } from "$lib/db";
import { asc } from "drizzle-orm";
import { usersTable } from "$lib/schema";

export const load: PageServerLoad = async () => {
    const users = await db.query.usersTable.findMany({
        orderBy: [asc(usersTable.id)]
    });
    return { users };
};