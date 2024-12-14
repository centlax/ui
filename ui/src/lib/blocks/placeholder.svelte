<script lang="ts">
	let { ...props } = $props();
</script>

<div
	class="relative flex items-center justify-center overflow-hidden rounded-sm border border-dashed border-neutral-300 px-4 opacity-75 dark:border-neutral-700 {props.class}"
>
	<svg
		class="sd absolute inset-0 h-full w-full
       stroke-black/10 dark:stroke-white/10
      "
		fill="none"
	>
		<defs>
			<pattern
				id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
				x="0"
				y="0"
				width="10"
				height="10"
				patternUnits="userSpaceOnUse"
			>
				<path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
			</pattern>
		</defs>
		<rect
			stroke="none"
			fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)"
			width="100%"
			height="100%"
		/>
	</svg>
</div>
