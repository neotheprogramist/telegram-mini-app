<script>
    let score = 0;

    const increment = () => {
        score += 1;
    };

    const decrement = () => {
        score -= 1;
    };

</script>

<div class="counter">
<h1>Counter: {score}</h1>
<button on:click={decrement}>-</button>
<button on:click={increment}>+</button>
</div>

<style>
    .counter{
        text-align: center;
        display: block;
        margin:20px auto;
    }
    button{
        background-color: #3e2164;
        border: 1px solid white;
        color: white;
        padding: 10px 20px;
    }
    button:hover{
        background-color: #5a3e7b;
    }
    button:active{
        background-color: #410f7a;
    }
</style>
