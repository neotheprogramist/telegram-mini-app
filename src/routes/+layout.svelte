<script>
    import Title from "$lib/title.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import "../styles/global.css";
</script>

<header>
   <Navbar/>
</header>
<main>
  <h1>Hello user</h1>
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