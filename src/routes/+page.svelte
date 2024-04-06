<script lang="ts">
	import {
		UTable,
		UTableHead,
		UTableRow,
		UTableFoot,
		UInput,
		UContainer,
		UButton,
		UHeader,
		UFieldSet,
		UColorMode,
		UForm
	} from '$lib/index.js';
</script>

<UContainer class="pt-12 space-y-10 bg-white dark:bg-gray-900">
	<UColorMode />
	<UForm class="max-w-sm space-y-4">
		<UFieldSet hint="Forget Password?" label="Email address">
			<UInput outline="dark" placeholder="example@domain.com" />
		</UFieldSet>
		<UButton block label="Click me!" />
	</UForm>
</UContainer>
