<script lang="ts">
	// props
	export let src: { light: string; dark: string };
	export let light_class: string = '';
	export let dark_class: string = '';
	export let alt: string = '';
	let classProp: string = '';
	export { classProp as class };
</script>

<img src={src.light} {alt} {...$$restProps} class="dark:hidden {classProp} {light_class}" />
<img src={src.dark} {alt} {...$$restProps} class="hidden dark:block {classProp} {dark_class}" />
