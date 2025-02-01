<script lang="ts">
  import { Check } from 'lucide-svelte';
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<div class="fixed inset-0 flex items-center justify-center bg-background">
  <div class="w-full max-w-md p-6 text-center space-y-6">
    <!-- Progress Steps -->
    <div class="flex justify-between mb-8">
      {#each Array(5) as _, i}
        <div class="flex items-center">
          <div class={`rounded-full w-8 h-8 flex items-center justify-center
            ${i < 5 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
            {i + 1}
          </div>
          {#if i < 4}
            <div class="h-[2px] w-12 bg-primary"></div>
          {/if}
        </div>
      {/each}
    </div>

    <div class="space-y-4">
      <h1 class="text-3xl font-semibold tracking-tight">Submission was Successful</h1>
      <p class="text-muted-foreground">
        Your response has been recorded. Feel free to close this window or register a new response by clicking the button below.
      </p>
    </div>

    <div class="mx-auto rounded-full bg-primary/10 p-6 text-primary w-fit">
      <Check class="h-16 w-16" />
    </div>

    <Button 
      class="w-full mt-8"
      size="lg"
      onclick={() => window.location.reload()}>
      Submit Another Response
    </Button>
  </div>
</div> 