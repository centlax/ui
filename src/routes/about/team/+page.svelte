<script lang="ts">
	import { UContainer } from '$lib/index.js';
	const leaders = [
		{
			name: 'Shimmy Rukundo',
			src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
			billet: 'Chief Executive Officer',
			for: 'Centlax'
		},
		{
			name: 'Shimmy Rukundo',
			src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
			billet: 'Chief Operating Officer',
			for: 'Centlax'
		},
		{
			name: 'Shimmy Rukundo',
			src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&aut=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
			billet: 'Chief Solutions Officer',
			for: 'Centlax'
		}
		// More people...
	];
	const css = {
		leader: {
			img: 'aspect-[14/13] w-full rounded-lg object-cover',
			name: 'mt-4 text-lg font-medium leading-8 tracking-tight text-gray-900 dark:text-white',
			billet: 'text-base font-semibold leading-6 text-indigo-600 dark:text-indigo-500',
			for: 'text-base font-medium leading-6 text-gray-500'
		}
	};
</script>

<UContainer class="bg-white dark:bg-gray-900 py-20  ">
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">
				Meet our leadership
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
				We’re a dynamic group of individuals who are passionate about what we do and dedicated to
				delivering the best results for our clients.
			</p>
		</div>
		<ul role="list" class="mx-auto flex mt-10">
			{#each leaders as leader}
				<li class="max-w-xs mx-auto">
					{#if leader.src}
						<img class={css.leader.img} src={leader.src} alt="Centlax leader {leader.name}" />
					{:else}
						<div class="{css.leader.img} bg-gray-500" />
					{/if}
					<h3 class={css.leader.name}>
						{leader.name}
					</h3>
					<p class={css.leader.billet}>
						{leader.billet}
					</p>
					<p class={css.leader.for}>{leader.for}</p>
				</li>
			{/each}
		</ul>
	</div>
</UContainer>
