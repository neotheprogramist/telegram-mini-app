<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const users = data.users;
	console.log(users);
</script>

<div class="index"></div>

<style>
	.index {
		text-align: center;
		display: block;
		margin: 20px auto;
	}
</style>
