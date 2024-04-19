<script lang="ts">
    // imports
	import { createPinInput, melt } from '@melt-ui/svelte';
	import { UInput } from '$lib/index.js';
    // props
    export let length:number = 5;
    export let placeholder:string = '0'; // we want array to have lenght size;
    export let default_value:string[] = []; 
    export let name:string = '';
    
    

    // config
    const css = {
        wrapper: 'flex items-center gap-2',
        base: 'size-12 rounded-md text-center text-lg"'
    }

	const {
		elements: { root, input }
	} = createPinInput({
		defaultValue: default_value,
        placeholder: placeholder,
        name: name

	});
</script>

<div use:melt={$root} class={css.wrapper}>
	{#each Array.from({ length: length }) as _}
		<UInput hide let:inputUI class={css.base}>
			<input class={inputUI} use:melt={$input()} />
		</UInput>
	{/each}
</div>
