<script lang="ts">
	import { browser } from '$app/environment';
	import { getPointsFromEl } from '@melt-ui/svelte/internal/helpers';
	let darkMode = true;
	function toggleMode() {
		darkMode = !darkMode;
	}

	// Reactive statement to apply class and store preference
	$: if (browser) {
		localStorage.setItem('color-mode', darkMode ? 'dark' : 'light');
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<svelte:head>
	<script lang="ts">
		let darkMode = false;
		function setColorMode(mode) {
			// Add or remove the 'dark' class based on the provided mode
			document.documentElement.classList.toggle('dark', mode === 'dark');
			// Update the dark mode state
			darkMode = mode === 'dark';
		}

		function getColorModeFromStorage() {
			// Retrieve the color mode from local storage
			const colorMode = window.localStorage.getItem('color-mode');
			// Return the color mode if it exists, otherwise return null
			return colorMode ? colorMode : null;
		}

		function getSystemColorMode() {
			// Check if the user's system prefers dark mode
			const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
			// Return 'dark' if the user prefers dark mode, otherwise return 'light'
			return prefersDarkMode ? 'dark' : 'light';
		}

		// Get the stored color mode from local storage
		const storedColorMode = getColorModeFromStorage();
		// If a color mode is stored in local storage, set it
		if (storedColorMode) {
			setColorMode(storedColorMode);
		} else {
			const systemColorMode = getSystemColorMode();
			setColorMode(systemColorMode);
			// Store the system color mode in local storage
			window.localStorage.setItem('color-mode', systemColorMode);
		}
	</script>
</svelte:head>

<div>
	{darkMode}
	<input checked={darkMode} on:click={toggleMode} type="checkbox" id="theme-toggle" />
	<label for="theme-toggle" />
</div>
