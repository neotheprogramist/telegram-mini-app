<script>
    export let data;
  </script>

<div class="posts">
    <ul>
        {#each data.posts as post}
            <li><a  href={`/posts/${post.id}`} data-sveltekit-preload-data>{post.title}</a></li>
        {/each}
    </ul>
</div>

<style>
    .posts{
        max-width: 90%;
        margin: 20px auto;
    }
</style>

