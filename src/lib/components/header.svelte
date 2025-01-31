<script lang="ts">
  import { Package2, Menu, Sun, Moon, SquareLibrary } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";
  import * as Sheet from "$lib/components/ui/sheet";
  import { toggleMode } from "$lib/stores/theme";
</script>

<header class="bg-background sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6">
  <div class="mx-auto w-full max-w-7xl flex items-center justify-between">
    <nav class="hidden w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6">
      <a href="/" class="flex items-center gap-2 text-lg font-semibold md:text-base">
        <Package2 class="h-6 w-6" />
        <span class="sr-only">Acme Inc</span>
      </a>
      <div class="flex-1 flex items-center justify-center gap-5">
        <a href="/" class="text-muted-foreground hover:text-foreground transition-colors">
          Template
        </a>
        <a href="/dashboard" class="text-foreground hover:text-foreground transition-colors">
          Dashboard
        </a>
      </div>
      <div class="w-[88px] flex justify-end">
        <Button onclick={toggleMode} variant="outline" size="icon">
          <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </div>
    </nav>
    
    <Sheet.Root>
      <Sheet.Trigger>
        <Button variant="outline" size="icon" class="shrink-0 md:hidden">
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </Sheet.Trigger>
      <Sheet.Content side="left">
        <nav class="grid gap-6 text-lg font-medium">
          <a href="/" class="flex items-center gap-2 text-lg font-semibold">
            <SquareLibrary />
            <span class="sr-only">Template</span>
          </a>
          <a href="/" class="text-muted-foreground hover:text-foreground">Template</a>
          <a href="/dashboard" class="text-muted-foreground hover:text-foreground">Dashboard</a>
        </nav>
      </Sheet.Content>
    </Sheet.Root>
  </div>
</header> 