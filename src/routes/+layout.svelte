<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	let { children } = $props();
</script>

<Header />

<div class="mx-auto max-w-7xl">
	{@render children()}
</div>
