<script lang="ts">
	const items = [
		{
			label: 'Active Storage',
			stat: {
				label: '$ 905,719.45'
			},
			css: 'bg-gray-800/50 text-white',
			icon: 'i-fluent-building-bank-toolbox-20-filled',
			tabs: [{ label: 'In flow' }, { label: 'Out flow' }, { label: 'Loss' }, { label: 'Gain' }]
		},
		{
			label: 'Reserve Storage',
			stat: {
				label: '20,0000 Items'
			},
			css: 'bg-gray-800/50',

			icon: 'i-fluent-box-toolbox-20-filled',
			tabs: [{ label: 'In flow' }, { label: 'Out flow' }, { label: 'Loss' }, { label: 'Gain' }]
		},
		{
			label: 'Disposable Storage',
			stat: {
				label: '327 Members'
			},
			css: 'bg-gray-800/50 ',

			icon: 'i-fluent-people-team-toolbox-20-filled',
			tabs: [{ label: 'In flow' }, { label: 'Out flow' }, { label: 'Loss' }, { label: 'Gain' }]
		}
	];
</script>

<div>
	<h1 class="">Storages</h1>
	<div class="grid grid-cols-3 gap-4 my-4 bg-gray-900 rounded-lg border border-gray-800">
		{#each items as item}
			<div class="flex flex-col justify-between h-[6.5rem] space-y-3">
				<div class="relative z-10 w-full h-[100%] px-5 py-2.5 rounded-md">
					<h3 class="text-xl lg:text-2xl font-semibold w-fit">
						{item.label}
					</h3>
					<h4 class="mt-2 text-lg font-medium">{item.stat.label} <span></span></h4>
				</div>
			</div>
		{/each}
	</div>
</div>
