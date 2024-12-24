<script lang="ts">
	import { UMark } from '$lib/components/export.js';
	import { asides, heads, asideTops } from './one.js';
</script>

<UMark.Layout>
	<UMark.Header items={heads} />
	<UMark.Aside top-items={asideTops} items={asides} />
	<UMark.Main></UMark.Main>
	<UMark.Table selector="d" />
	<UMark.Footer />
</UMark.Layout>
