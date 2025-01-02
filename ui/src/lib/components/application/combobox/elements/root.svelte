<script lang="ts">
	import { createCombobox, melt, type ComboboxOptionProps } from '@melt-ui/svelte';
	import { fly } from 'svelte/transition';

	type Manga = {
		author: string;
		title: string;
		disabled: boolean;
	};

	let mangas: Manga[] = [
		{
			author: 'Kentaro Miura',
			title: 'Berserk',
			disabled: false
		},
		{
			author: 'ONE',
			title: 'Mob Psycho 100',
			disabled: false
		},
		{
			author: 'Hajime Isayama',
			title: 'Attack on Titan',
			disabled: false
		},
		{
			author: 'Junji Ito',
			title: 'Uzumaki',
			disabled: false
		},
		{
			author: 'Yomi Sarachi',
			title: 'Steins Gate',
			disabled: false
		},
		{
			author: 'Tite Kubo',
			title: 'Bleach',
			disabled: false
		},
		{
			author: 'Masashi Kishimoto',
			title: 'Naruto',
			disabled: true
		},
		{
			author: 'Katsura Hoshino',
			title: 'D.Gray Man',
			disabled: false
		},
		{
			author: 'Tsugumi Ohba',
			title: 'Death Note',
			disabled: false
		},
		{
			author: 'Hiromu Arakawa',
			title: 'Fullmetal Alchemist',
			disabled: false
		}
	];

	const toOption = (manga: Manga): ComboboxOptionProps<Manga> => ({
		value: manga,
		label: manga.title,
		disabled: manga.disabled
	});

	const {
		elements: { menu, input, option, label },
		states: { open, inputValue, touchedInput, selected },
		helpers: { isSelected }
	} = createCombobox<Manga>({
		forceVisible: true
	});

	$: if (!$open) {
		$inputValue = $selected?.label ?? '';
	}

	$: filteredMangas = $touchedInput
		? mangas.filter(({ title, author }) => {
				const normalizedInput = $inputValue.toLowerCase();
				return (
					title.toLowerCase().includes(normalizedInput) ||
					author.toLowerCase().includes(normalizedInput)
				);
			})
		: mangas;
</script>

<div class="relative">
	<input
		use:melt={$input}
		class="flex h-10 items-center justify-between rounded-lg bg-white
			px-3 pr-12 text-black"
		placeholder="Best book ever"
	/>
	<div class="text-magnum-900 absolute right-2 top-1/2 z-10 -translate-y-1/2"></div>
</div>

{#if $open}
	<ul use:melt={$menu} transition:fly={{ duration: 150, y: -5 }}>
		{#each filteredMangas as manga, index (index)}
			<li use:melt={$option(toOption(manga))}>
				{#if $isSelected(manga)}
					c
				{/if}
				<div>
					<span>{manga.title}</span>
					<span>{manga.author}</span>
				</div>
			</li>
		{:else}
			<li>No results found</li>
		{/each}
	</ul>
{/if}
