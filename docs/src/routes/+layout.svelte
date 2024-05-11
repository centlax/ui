<script lang="ts">
	import { ULayout, UBody } from '@centlax/ui';
    import "../app.css"
</script>

<ULayout>
    <UBody let:UHeader>
     	<slot />
    </UBody>
</ULayout>
