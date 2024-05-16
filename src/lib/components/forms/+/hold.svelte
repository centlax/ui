<fieldset
	class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200 dark:ring-gray-800"
>
	<legend class="sr-only">Payment frequency</legend>
	<!-- Checked: "bg-indigo-600 text-white", Not Checked: "text-gray-500" -->
	<label class="cursor-pointer rounded-full px-2.5 py-1 bg-primary-500">
		<input type="radio" name="frequency" value="monthly" class="sr-only" />
		<span>Monthly</span>
	</label>
	<!-- Checked: "bg-indigo-600 text-white", Not Checked: "text-gray-500" -->
	<label class="relative cursor-pointer rounded-full px-2.5 py-1">
		<input type="radio" name="frequency" value="annually" class="sr-only" />
		<span>Annually</span>
	</label>
</fieldset>
