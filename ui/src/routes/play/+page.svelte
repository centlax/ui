<script lang="ts">
	import { UTable } from '$lib/index.js';
	const headers = ['Name', 'Title', 'Email', 'Role', 'Actions'];
	const rows = [
		{
			name: 'Lindsay Walton',
			title: 'Front-end Developer',
			email: 'lindsay.walton@example.com',
			role: 'Member'
		},
		{
			name: 'John Doe',
			title: 'Back-end Developer',
			email: 'john.doe@example.com',
			role: 'Admin'
		}
		// Add more rows as needed
	];
</script>

<div class="px-4 sm:px-6 lg:px-8">
	<div class="sm:flex sm:items-center">
		<div class="sm:flex-auto">
			<h1 class="text-base font-semibold text-gray-900">Users</h1>
			<p class="mt-2 text-sm text-gray-700">
				A list of all UTable.HCelle users in your account including UTable.HCelleir name, title,
				email and role.
			</p>
		</div>
		<div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
			<button
				type="button"
				class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Add user</button
			>
		</div>
	</div>
	<div class="mt-8 flow-root">
		<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<UTable class="min-w-full divide-y divide-gray-300">
					<UTable.Head>
						<UTable.Row>
							{#each headers as header}
								<UTable.HCell
									scope="col"
									text={header}
									class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								/>
							{/each}
						</UTable.Row>
					</UTable.Head>

					<UTable.Body class="bg-white">
						{#each rows as row, index}
							<UTable.Row class="rounded-md even:bg-gray-200">
								<UTable.DCell
									text={row.name}
									class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"
								/>

								<UTable.DCell
									text={row.title}
									class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
								/>
								<UTable.DCell
									text={row.email}
									class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
								/>
								<UTable.DCell
									text={row.role}
									class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
								/>
								<UTable.DCell
									class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3"
								>
									<a href="/" class="text-indigo-600 hover:text-indigo-900"
										>Edit<span class="sr-only">, {row.name}</span></a
									>
								</UTable.DCell>
							</UTable.Row>
						{/each}
					</UTable.Body>
				</UTable>
			</div>
		</div>
	</div>
</div>
