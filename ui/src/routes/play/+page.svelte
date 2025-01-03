<script lang="ts">
	import { useDark } from "$lib/index.js";
    const dark = useDark()
</script>
<div class="bg-red-500/50 mt-5 dark:bg-lime-500/50">
    MAIN
    <button onclick={dark.toggle}>
        mode
    </button>
</div>