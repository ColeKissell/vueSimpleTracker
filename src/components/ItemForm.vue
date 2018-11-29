<template>
<div>
		<H3>Create or Update Item</H3>
    	<form>
            <button >create/update Item</button>
            <label>Name</label>
            <input type='text' />
            <label>Description</label>
            <input type='text'/>
		</form>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
    name: 'ItemFormComponent',
    computed:{ 
		...mapGetters({
			
		}),
	},
	methods:{
		...mapActions({
        
		}),
	}

}
</script>

