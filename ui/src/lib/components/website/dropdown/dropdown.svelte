<script lang="ts">
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';

	const settingsSync = writable(true);
	const hideMeltUI = writable(false);

	const {
		elements: { trigger, menu, item, separator, arrow },
		builders: { createSubmenu, createMenuRadioGroup, createCheckboxItem },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true,
		loop: true
	});

	const {
		elements: { subMenu, subTrigger },
		states: { subOpen }
	} = createSubmenu();

	const {
		elements: { radioGroup, radioItem },
		helpers: { isChecked }
	} = createMenuRadioGroup({
		defaultValue: 'Hunter Johnston'
	});

	const {
		elements: { checkboxItem }
	} = createCheckboxItem({
		checked: settingsSync
	});

	const {
		elements: { checkboxItem: checkboxItemA }
	} = createCheckboxItem({
		checked: hideMeltUI
	});

	const personsArr = ['Hunter Johnston', 'Thomas G. Lopes', 'Adrian Gonz', 'Franck Poingt'];
</script>

<button type="button" class="trigger" use:melt={$trigger} aria-label="Update dimensions">
	<span class="sr-only">Open Popover</span>
</button>

{#if $open}
	<div class=" menu" use:melt={$menu} transition:fly={{ duration: 150, y: -10 }}>
		<div class="item" use:melt={$item}>About Melt UI</div>
		<div class="item" use:melt={$item}>Check for Updates...</div>
		<div class="separator" use:melt={$separator}></div>
		<div class="item" use:melt={$checkboxItem}>Settings Sync is On</div>
		<div class="item !hidden md:!flex" use:melt={$subTrigger}>
			Profiles
			<div class="rightSlot"></div>
		</div>
		{#if $subOpen}
			<div class="menu subMenu" use:melt={$subMenu} transition:fly={{ x: -50, duration: 150 }}>
				<div class="text">People</div>
				<div use:melt={$radioGroup}>
					{#each personsArr as person}
						<div class="item" use:melt={$radioItem({ value: person })}>
							<div class="check">
								{#if $isChecked(person)}
									<div class="dot"></div>
								{/if}
							</div>
							{person}
						</div>
					{/each}
				</div>
			</div>
		{/if}
		<div use:melt={$separator} class="separator"></div>

		<div class="item" use:melt={$checkboxItemA}>
			<div class="check"></div>
			Hide Melt UI
			<div class="rightSlot">⌘H</div>
		</div>
		<div class="item" use:melt={$item} data-disabled>
			Show All Components
			<div class="rightSlot">⇧⌘N</div>
		</div>
		<div use:melt={$separator} class="separator"></div>
		<div class="item" use:melt={$item}>
			Quit Melt UI
			<div class="rightSlot">⌘Q</div>
		</div>
		<div use:melt={$arrow}></div>
	</div>
{/if}
