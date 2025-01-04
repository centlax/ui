<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { siteFooterItem, type SiteFooterItemProps } from './footer-item.js';
	import { cn, st } from '$lib/utils/wind.js';

	/** Props */
	let {  ...props }: SiteFooterItemProps = $props();

	/** Styles */
	const ui = useUI(siteFooterItem, props.class, props.override);
</script>

<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
	<div class="md:grid md:grid-cols-2 md:gap-8">
	  <div>
		<h3 class="text-sm/6 font-semibold text-gray-900">Solutions</h3>
		<ul role="list" class="mt-6 space-y-4">
		  <li>
			<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Marketing</a>
		  </li>
		  <li>
			<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Analytics</a>
		  </li>
		  <li>
			<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Automation</a>
		  </li>
		  <li>
			<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Commerce</a>
		  </li>
		  <li>
			<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Insights</a>
		  </li>
		</ul>
	  </div>
	  <div class="mt-10 md:mt-0">
		<h3 class="text-sm/6 font-semibold text-gray-900">Support</h3>
		<ul role="list" class="mt-6 space-y-4">
		  <li>
			<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Submit ticket</a>
		  </li>
		  <li>
			<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Documentation</a>
		  </li>
		  <li>
			<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Guides</a>
		  </li>
		</ul>
	  </div>
	</div>
	<div class="md:grid md:grid-cols-2 md:gap-8">
	  <div>
		<h3 class="text-sm/6 font-semibold text-gray-900">Company</h3>
		<ul role="list" class="mt-6 space-y-4">
		  <li>
			<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">About</a>
		  </li>
		  <li>
			<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Blog</a>
		  </li>
		  <li>
			<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Jobs</a>
		  </li>
		  <li>
			<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Press</a>
		  </li>
		</ul>
	  </div>
	  <div class="mt-10 md:mt-0">
		<h3 class="text-sm/6 font-semibold text-gray-900">Legal</h3>
		<ul role="list" class="mt-6 space-y-4">
		  <li>
			<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Terms of service</a>
		  </li>
		  <li>
			<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Privacy policy</a>
		  </li>
		  <li>
			<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">License</a>
		  </li>
		</ul>
	  </div>
	</div>
  </div>
