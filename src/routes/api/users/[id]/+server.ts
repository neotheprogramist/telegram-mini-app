import { db } from "$lib/db";
import { usersTable } from "$lib/schema";
import type { RequestHandler } from "@sveltejs/kit";
import { eq } from "drizzle-orm";

export const GET: RequestHandler = async ({ params }) => {
    const telegramId = params.id;

    if (!telegramId) {
        return new Response(JSON.stringify({ error: 'telegram_id is required' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    try {
        const user = await db.select().from(usersTable).where(eq(usersTable.telegram_id, telegramId)).get();
        console.log(user);

        if (user) {
            return new Response(JSON.stringify(user), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } else {
            return new Response(JSON.stringify({ message: 'User not found' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to process request' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};

export const POST: RequestHandler = async ({ params, request }) => {
    const telegramId = params.id;
    const { score } = await request.json();

    try {

        if (!telegramId) {
            return new Response(JSON.stringify({ error: 'Telegram ID is required' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        const result = await db.update(usersTable)
            .set({ score })
            .where(eq(usersTable.telegram_id, telegramId))
            .execute();

        if (result.rowsAffected > 0) {
            return new Response(JSON.stringify({ message: 'Score updated successfully' }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } else {
            return new Response(JSON.stringify({ error: 'User not found' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to update score' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
};