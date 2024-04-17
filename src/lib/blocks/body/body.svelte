<div class="flex flex-col min-h-screen overflow-x-hidden">
	<div class="">
		<slot name="header" />
	</div>
	<div id="ui-main" class="flex-grow">
		<slot />
	</div>
	<div class="">
		<slot name="footer" />
	</div>
</div>
