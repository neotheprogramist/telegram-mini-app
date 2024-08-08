import { redirect, type LoadEvent } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }: LoadEvent) {
    const id = params.id;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (response.ok) {
        const post = await response.json();
        return post;
    }

    error(404, `Post not found`);

}