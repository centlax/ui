<script lang="ts">
	import { twJoin } from 'tailwind-merge';

	const rows = [
		{
			staff: {
				name: 'Michael Foster',
				src: `https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`
			},
			category: {
				type: 'delete',
				subject: 'Profile'
			},

			status: 'Success',
			time: {
				duration: '25s',
				commenced: '45 minutes ago'
			}
		},
		{
			staff: {
				name: 'Lindsay Walton',
				src: `https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`
			},
			category: {
				type: 'create',
				subject: 'Receipt'
			},

			status: 'Failure',

			time: {
				duration: '1m 32s',
				commenced: '3 hours ago'
			}
		},
		{
			staff: {
				name: 'Courtney Henry',
				src: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`
			},
			category: {
				type: 'update',
				subject: 'Storage'
			},

			status: 'Success',

			time: {
				duration: '1m 4s',
				commenced: '12 hours ago'
			}
		},
		{
			staff: {
				name: 'Courtney Henry',
				src: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`
			},
			category: {
				type: 'create',
				subject: 'Profile'
			},

			status: 'Success',

			time: {
				duration: '1m 4s',
				commenced: '12 hours ago'
			}
		},
		{
			staff: {
				name: 'Michael Foster',
				src: `https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`
			},
			category: {
				type: 'create',
				subject: 'Profile'
			},

			status: 'Success',

			time: {
				duration: '1m 4s',
				commenced: '12 hours ago'
			}
		},
		{
			staff: {
				name: 'Whitney Francis',
				src: `https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`
			},
			category: {
				type: 'create',
				subject: 'Profile'
			},

			status: 'Success',

			time: {
				duration: '1m 4s',
				commenced: '12 hours ago'
			}
		}
	];
</script>

<div class="bg-gray-900/60 -mx-6 mt-4 py-5">
	<h2 class="text-base mb-4 px-6 font-semibold leading-7 text-white">Recent activities</h2>
	<div class="bg-gray-900 border-y border-gray-800">
		<table class="mt-2 w-full whitespace-nowrap text-left">
			<colgroup>
				<col class="w-full sm:w-4/12" />
				<col class="lg:w-4/12" />
				<col class="lg:w-2/12" />
				<col class="lg:w-1/12" />
				<col class="lg:w-1/12" />
			</colgroup>
			<thead class="px-6 border-b border-white/10 text-sm leading-6 text-white">
				<tr>
					<th scope="col" class="py-2 font-semibold sm:pl-6 lg:pl-6">Staff</th>
					<th scope="col" class="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">Operation</th>
					<th
						scope="col"
						class="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">Status</th
					>
					<th scope="col" class="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
						>Duration</th
					>
					<th
						scope="col"
						class="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
						>Commenced</th
					>
				</tr>
			</thead>
			<tbody class="divide-y divide-white/5">
				{#each rows as row}
					<tr>
						<td class="py-4 pl-4 pr-8 sm:pl-6 lg:pl-6">
							<div class="flex items-center gap-x-4">
								<img src={row.staff.src} alt="" class="h-8 w-8 rounded-full bg-gray-800" />
								<div class="truncate text-sm font-medium leading-6 text-white">
									{row.staff.name}
								</div>
							</div>
						</td>
						<td class="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
							<div class="flex gap-x-3">
								<div
									class="inline-flex items-center rounded-full {twJoin(
										row.category.type === 'create' &&
											'bg-green-950/20 text-green-500 ring-green-600/20',
										row.category.type === 'delete' && 'bg-red-950/20 text-red-500 ring-red-600/20',
										row.category.type === 'update' &&
											'bg-yellow-950/20 text-yellow-500 ring-yellow-600/20'
									)}  px-2 py-1 text-xs font-medium ring-1 ring-inset"
								>
									{row.category.type}
								</div>
								<div class="text-sm leading-6 font-medium text-gray-300">
									{row.category.subject}
								</div>
							</div>
						</td>
						<td class="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
							<div class="flex items-center justify-end gap-x-2 sm:justify-start">
								<time class="text-gray-400 sm:hidden" datetime="2023-01-23T11:00"
									>45 minutes ago</time
								>
								<div
									class="flex-none rounded-full p-1 {twJoin(
										row.status === 'Success' && 'text-green-500 bg-green-500/20',
										row.status === 'Failure' && 'text-red-500 bg-red-500/20',
										row.status === 'Progressing' && 'text-yellow-500 bg-yellow-500/20'
									)} "
								>
									<div class="h-1.5 w-1.5 rounded-full bg-current"></div>
								</div>
								<div class="hidden text-white sm:block">{row.status}</div>
							</div>
						</td>
						<td class="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20"
							>{row.time.duration}</td
						>
						<td
							class="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8"
						>
							<time datetime="2023-01-23T11:00">{row.time.commenced}</time>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
