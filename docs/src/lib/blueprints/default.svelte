<script lang="ts" context="module">
	export const metadata = {};
</script>

<script lang="ts">
	export let metadata: {
		title: string;
		description: string;
		coverImage: string;
	};
</script>

<h1 class="bg-red-600">{metadata.title}</h1>
<p>{metadata.description}</p>

<!-- Markdown contents would be rendered in the slot -->
<slot />
