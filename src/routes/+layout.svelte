<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	let { children } = $props();
</script>

<Header />
<ModeWatcher defaultMode={'dark'} />
<div class="mx-auto max-w-7xl">
	{@render children()}
</div>
