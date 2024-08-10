<script lang="ts">
	import type { WebAppUser } from '@twa-dev/types';
	import { onMount } from 'svelte';
	import { userStore } from '../../stores/user';

	let userId: number | undefined;
	let score = 0;

	// Fetch the current score from the server when the component mounts
	onMount(async () => {
		// TODO implement some kind of global state
		const response = await fetch(`/api/users/${String(userId)}`);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			score = data.score;
		} else {
			console.error('Failed to fetch score:', await response.json());
		}
	});

	// Function to update the score on the server
	async function updateScore(newScore: number) {
		const response = await fetch(`/api/users/${String(userId)}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ score: newScore })
		});

		if (!response.ok) {
			console.error('Failed to update score:', await response.json());
		}
	}

	// Increment the score and update it on the server
	const increment = () => {
		score += 1;
		updateScore(score);
	};

	// Decrement the score and update it on the server
	const decrement = () => {
		score -= 1;
		updateScore(score);
	};
	$: userId = $userStore?.id;
</script>

<div class="counter">
	<h1>Counter: {score}</h1>
	<button on:click={decrement}>-</button>
	<button on:click={increment}>+</button>
</div>

<style>
	.counter {
		text-align: center;
		display: block;
		margin: 20px auto;
	}
	button {
		background-color: #3e2164;
		border: 1px solid white;
		color: white;
		padding: 10px 20px;
	}
	button:hover {
		background-color: #5a3e7b;
	}
	button:active {
		background-color: #410f7a;
	}
</style>
