<template>
<div>
		<H3>Create or Update Item</H3>
        <form @submit.prevent="submitForm()">
            <button >Create Item</button>

            <label>Name</label>
            <input v-model="name"/>
            <p>{{name}}</p>

            <label>Description</label>
            <input v-model="description" />
            <p>{{description}}</p>

        </form>

	</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields';


export default {
    name: 'ItemFormComponent',
    data(){
        return (
            {
                name: '',
                description: ''
            }
        )
    },

	methods:{
		async submitForm(thing){
            const sendMe = this.$data
            console.log(sendMe)
        await fetch('https://hapiapi-nwwwdcogfv.now.sh/item', {
            method: "POST",
            mode: "cors",
            headers: {
            "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(sendMe),
        }).then((response)=> {
            return response.json();
        }).then((myJson)=> {return myJson})
        }
        
    }
}
</script>

