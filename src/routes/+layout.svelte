<script lang="ts">
import "../app.css";
import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />

<main class="container mx-auto p-4 mt-4">
  <slot />
</main>
