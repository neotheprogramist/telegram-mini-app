<script>
	import { page } from '$app/stores';

	$: currentPath = $page.url.pathname;
</script>

<div class="navbar">
	<div class="title">Telegram Mini App</div>
	<div class="nav-links">
		<a href="/" class:active={currentPath === '/'}>Home</a>
		<a href="/counter" class:active={currentPath === '/counter'}>Counter</a>
		<a href="/posts" class:active={currentPath === '/posts'}>Api posts</a>
	</div>
</div>

<style>
	.navbar {
		background: #3e2164;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
		color: white;
		flex-wrap: wrap; /* Allow wrapping of flex items */
	}

	.title {
		font-size: 1em;
		font-weight: bold;
		flex-basis: 100%; /* Take full width initially */
		text-align: center; /* Center align title */
	}

	.nav-links {
		display: flex;
		gap: 10px;
		flex-basis: 100%; /* Take full width initially */
		justify-content: center; /* Center align nav links */
		margin-top: 10px; /* Add some space between title and nav links */
	}

	.nav-links a {
		color: white;
		text-decoration: none;
		font-size: 1em;
		padding: 5px 10px;
		border-radius: 5px;
		transition: background-color 0.3s;
	}

	.nav-links a.active {
		background-color: #5a3e7b;
	}

	.nav-links a:hover {
		text-decoration: underline;
	}

	@media (min-width: 390px) {
		.navbar {
			flex-wrap: nowrap; /* Disable wrapping for larger screens */
		}

		.title {
			flex-basis: auto; /* Reset flex-basis */
			text-align: left; /* Left align title */
		}

		.nav-links {
			flex-basis: auto; /* Reset flex-basis */
			margin-top: 0; /* Remove top margin */
		}
	}
</style>
