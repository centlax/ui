<script lang="ts">
	import { ULayout, UBody, UColorImage, UColorMode } from '@centlax/ui';
    import "../app.css"
</script>

<ULayout>
    <UBody let:UHeader>
        <UColorMode/>
     	<slot />
    </UBody>
</ULayout>
