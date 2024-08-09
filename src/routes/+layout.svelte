<script lang="ts">
	import type { WebAppUser } from '@twa-dev/types';
	import { onMount } from 'svelte';
	import Navbar from '$lib/Navbar.svelte';
	import '../styles/global.css';
	import { userStore } from '../stores/user';

	let user:
		| (WebAppUser & { added_to_attachment_menu?: boolean; allows_write_to_pm?: boolean })
		| undefined;

	let user1 = {
		first_name: 'gawc1uuu',
		last_name: '',
		id: 31231
	};

	// making sure code only runs on client side
	onMount(async () => {
		if (typeof window !== 'undefined') {
			const WebApp = await import('@twa-dev/sdk');
			user = WebApp.default.initDataUnsafe.user;

			if (user) {
				const userExists = await checkUserExists(String(user.id));
				console.log(userExists);
				if (!userExists) {
					await addUserToDatabase(user);
				} else {
					console.log('User already exists in the database');
				}
				userStore.set(user);
			}
		}
	});

	// Check if the user exists in the database based on the telegram_id
	async function checkUserExists(telegramId: string): Promise<boolean> {
		try {
			const response = await fetch(`/api/users/${telegramId}`);
			if (response.status === 200) {
				return true; // User exists
			} else if (response.status === 404) {
				return false; // User not found
			} else {
				console.error('Failed to check user existence:', response.statusText);
				return false;
			}
		} catch (error) {
			console.error('Error checking user existence:', error);
			return false;
		}
	}

	async function addUserToDatabase(user: WebAppUser) {
		try {
			const response = await fetch('/api/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					...user,
					telegram_id: String(user.id)
				})
			});

			if (!response.ok) {
				console.error('Failed to add user to database:', response.statusText);
			}
		} catch (error) {
			console.error('Error adding user to database:', error);
		}
	}
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
