import type { LoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }: LoadEvent) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    if (response.ok) {
        return {
            posts,
        };
    }

    return {
        status: response.status,
        error: new Error(`Failed to fetch posts: ${response.statusText}`),
    }

}