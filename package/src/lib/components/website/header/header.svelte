<script lang="ts">
	/** Imports */
	import { useProps, useUI } from '$lib/index.js';
	import { strify, twJoin } from '$lib/utils/index.js';
	import { UHeaderLinks, UDrawer, UContainer } from '$lib/index.js';
	import { header } from './header.config.js';

	/** Props */
	const props = useProps('Header');
	let _class = props.class;
	export let override = props.override;
	export let links = props.links;
	export let open = props.open;
	export let name = props.name;
	export let href = props.href;

	export function toggle() {
		open = !open;
	}

	/** UI */
	const { css, classer } = useUI(header, _class, override);
</script>

<header id="ui-header" class={twJoin(strify(css.root), classer)}>
	<nav class={strify(css.nav)} aria-label="Global">
		<a {href} class={strify(css.nav.west)}>
			<slot name="logo" />
			{#if name}{name}{/if}
		</a>

		<div data-state="show" class={strify(css.nav.center)}>
			<UHeaderLinks {links} />
		</div>

		<div class={strify(css.nav.east)}>
			<slot name="buttons" />
			<div class={strify(css.nav.east)}>
				<slot name="menu" {open} />
			</div>
		</div>
	</nav>

	<div data-state="hide">
		<UDrawer
			portal="ui-header"
			transition={{ content: { x: 250, duration: 100 } }}
			bind:open
			class={css.drawer}
		>
			<UContainer class={strify(css.mobile.container)}>
				<div class={strify(css.mobile.north)}>
					<slot name="logo" />
					<div class={strify(css.nav.east)}>
						<slot name="menu" {open} />
					</div>
				</div>
				<div class={strify(css.mobile.center)}>
					<UHeaderLinks vertical {links} />
				</div>
				<div class={strify(css.mobile.south)}>
					<slot name="buttons" />
				</div>
			</UContainer>
		</UDrawer>
	</div>
</header>
