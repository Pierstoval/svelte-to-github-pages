<script lang="ts">
    let count = 0;

    function incrementCounter() {
        count++;
    }
</script>

<h1>Welcome to SvelteKit</h1>

<p>Counter: {count}</p>

<button on:click={incrementCounter}>Increment counter</button>
