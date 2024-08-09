import { db } from "$lib/db";
import { usersTable } from "$lib/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
    try {
        const userData = await request.json();
        console.log(userData);

        return new Response(JSON.stringify({ message: 'Data received' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
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