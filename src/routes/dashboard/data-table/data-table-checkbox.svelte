<script lang="ts">
  import { Checkbox } from "$lib/components/ui/checkbox";
  
  let { checked, onCheckedChange, ...props } = $props<{
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    indeterminate?: boolean;
  }>();
</script>

<Checkbox {checked} onCheckedChange={onCheckedChange} {...props} /> 