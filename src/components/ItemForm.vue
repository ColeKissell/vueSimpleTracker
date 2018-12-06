<template>
<div>
		<H3>Create or Update Item</H3>
        <form @submit.prevent="submitIt">
            <button type="submit">Done</button>
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
import { newItem, updateItem} from '../APICalls.js';


export default {
    name: 'ItemFormComponent',
       props:[
            "my_id",
            "myName",
            "myDescription"
        ],
    data(){
        return (
            {
                _id: '',
                name: '',
                description: ''
            }
        )
    },
    created(){
            this.$data._id = this.$props.my_id,
            this.$data.name = this.$props.myName,
            this.$data.description = this.$props.myDescription
    },
	methods:{
        submitIt(){
            if(this.$data._id){
                this.submitEdit()
            }else{
                this.submitNew()
            }
        },
        submitNew(){
            const newThing = newItem(this.$data)
            console.log(newThing)
        },
        submitEdit(){
            const updatedThing = updateItem(this.$data)
        }

    }

}
</script>

