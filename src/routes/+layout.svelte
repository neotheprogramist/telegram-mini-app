<script lang="ts">
	import type { WebAppUser } from '@twa-dev/types';
	import { onMount } from 'svelte';
	import Navbar from '$lib/Navbar.svelte';
	import '../styles/global.css';

	let user:
		| (WebAppUser & { added_to_attachment_menu?: boolean; allows_write_to_pm?: boolean })
		| undefined;

	// making sure code only runs on client side
	onMount(async () => {
		if (typeof window !== 'undefined') {
			const WebApp = await import('@twa-dev/sdk');
			user = WebApp.default.initDataUnsafe.user;
			console.log('user data1:', WebApp.default.initDataUnsafe.user);
		}
	});
</script>

<header>
	<Navbar />
</header>
<main>
	{#if user}
		<h1>Hello {user.first_name}</h1>
	{:else}
		<h1>Loading...</h1>
	{/if}
	<!-- page content -->
	<slot></slot>
</main>
<footer>
	<p>hello world</p>
</footer>

<style>
	header {
		display: flex;
		justify-content: center;
	}
	main {
		max-width: 960px;
		margin: 20px auto;
	}
	footer {
		text-align: center;
	}
	h1 {
		text-align: center;
	}
</style>
