<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLButtonAttributes } from 'svelte/elements';

    type Props = {
        children: Snippet;
    } & HTMLButtonAttributes;

    let { children, ...restProps }: Props = $props();
</script>

{#snippet icon()}
    <span>num</span>
{/snippet}

<button class="max-w-fit bg-sky-500 text-white font-semibold py-2 px-3 rounded-md" {...restProps}>
    {@render children()} {@render icon()}
</button>