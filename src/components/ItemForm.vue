<template>
<div>
		<button >create/update Item</button>
    	<div>
            <input type='text' />

            <input type='text'/>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
    name: 'ItemFormComponent',
    data() {
        return {
            name: null,
            description: null,
        }
    },
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

