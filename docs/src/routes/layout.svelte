<script lang="ts">
	import { ULayout, UBody } from '@centlax/ui';
</script>

<ULayout>
    <UBody let:UHeader>
        <UHeader/>
     	<slot />
    </UBody>
</ULayout>
