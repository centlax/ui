<script lang="ts">
	import { createCheckbox, melt } from '@melt-ui/svelte';

	const {
		elements: { root, input },
		helpers: { isChecked, isIndeterminate }
	} = createCheckbox({
		defaultChecked: 'indeterminate'
	});
</script>

<form>
	<div class="flex items-center justify-center">
		<button
			use:melt={$root}
			class="text-magnum-600 flex size-7 appearance-none items-center
              justify-center rounded-lg bg-white shadow hover:opacity-75"
			id="checkbox"
		>
			df
			<input use:melt={$input} />
		</button>
		<label class="text-magnum-900 pl-4 font-medium" for="checkbox">
			Accept terms and conditions.
		</label>
	</div>
</form>
