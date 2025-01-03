<script lang="ts">
	/** Imports */
	import { UIcon, USheet } from '$lib/index.js';
	import { useDash } from '../dash.svelte.js';
	import type { DashAsideProps } from './aside.js';

	/** Props */
	let { children, open, ...props }: DashAsideProps = $props();
	const {
		elements: { aside }
	} = useDash();
	const {
		core,
		fixed,
		sheet: {
			close: { overlay, button, icon },
			content
		}
	} = aside(props);
</script>

{#snippet coreAside()}
	<aside {...core}>
		{@render children?.()}
	</aside>
{/snippet}

<div {...fixed}>
	{@render coreAside()}
</div>

<USheet bind:open>
	<USheet.Content {...content}>
		{@render coreAside()}
		<div {...overlay}>
			<USheet.Close {...button}>
				<span class="sr-only">Close Dash Aside</span>
				<UIcon {...icon} />
			</USheet.Close>
		</div>
	</USheet.Content>
</USheet>
