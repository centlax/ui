<script lang="ts">
	import {
		UMarkAside,
		UMarkFooter,
		UMarkHeader,
		UMarkLayout,
		UMarkMain,
		UMarkTable
	} from '$lib/components/export.js';
	import { asides, heads, asideTops } from './one.js';
</script>

<UMarkLayout>
	<UMarkHeader items={heads} />
	<UMarkAside top-items={asideTops} items={asides} />
	<UMarkMain></UMarkMain>
	<UMarkTable />
	<UMarkFooter />
</UMarkLayout>
