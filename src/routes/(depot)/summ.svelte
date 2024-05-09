<script lang="ts">
	const items = [
		{
			label: 'Finance',
			stat: {
				label: '$ 905,719.45'
			},
			css: 'bg-gray-800/50',
			icon: 'i-fluent-building-bank-toolbox-20-filled',
			tabs: [{ label: 'In flow' }, { label: 'Out flow' }, { label: 'Loss' }, { label: 'Gain' }]
		},
		{
			label: 'Inventory',
			stat: {
				label: '20,0000 Items'
			},
			css: 'bg-gray-800/50',

			icon: 'i-fluent-box-toolbox-20-filled',
			tabs: [
				{ label: 'Serialized' },
				{ label: 'In usage' },
				{ label: 'On hand' },
				{ label: 'Quality' }
			]
		},
		{
			label: 'Members',
			stat: {
				label: '327 Members'
			},
			css: 'bg-gray-800/50',

			icon: 'i-fluent-people-team-toolbox-20-filled',
			tabs: [
				{ label: 'Full issue' },
				{ label: 'Half issue' },
				{ label: 'Active' },
				{ label: 'Inactive' }
			]
		}
	];
</script>

<div class="grid grid-cols-3 gap-4 my-4">
	{#each items as item}
		<div
			class=" bg-gray-900 flex flex-col justify-between h-[15rem] rounded-lg border border-gray-800 p-1 space-y-3"
		>
			<div class="relative z-10 {item.css} w-full h-[60%] p-5 rounded-md">
				<h3
					class="text-xl lg:text-2xl font-semibold bg-clip-text text-transparent w-fit bg-gradient-to-r from-green-500 via-lime-500 to-teal-500"
				>
					{item.label}
				</h3>
				<h4 class="mt-2 text-lg font-medium">{item.stat.label} <span></span></h4>

				<span
					class="{item.icon} -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[8rem] text-gray-800/60"
				/>
			</div>
			<div class="bg-gray-800/60 w-full rounded-md p-1 flex gap-x-3">
				{#if item.tabs}
					{#each item.tabs as tab}
						<button
							class="bg-gray-900 text-sm font-medium h-[2rem] w-full p-1 rounded text-gray-300"
						>
							{tab.label}
						</button>
					{/each}
				{/if}
			</div>
		</div>
	{/each}
</div>
