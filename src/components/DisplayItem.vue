<template>

    <div>
            <ul>
                <p>Id:</p>
                <li>{{_id}}</li>
                <p>Name:</p>
                <li>{{name}}</li>
                <p>Description:</p>
                <li>{{description}}</li>
                <ItemForm
                    :my_id=_id
                    :myName=name
                    :myDescription=description
                ></ItemForm>
                <button v-on:click.prevent="deleteThing">DELETE</button>
            </ul>
            <hr/>
            <br/>
    </div>
</template>

<script>
import { string } from 'prop-types';
import ItemForm from './ItemForm'
import { deleteItem} from '../APICalls.js';


    export default {
        name: 'DisplayItem',
        components: {ItemForm},
        props:[
            "_id",
            "name",
            "description"
        ],

        methods:{
            deleteThing(){
                console.log(this.$props._id)
                const deletedThing = deleteItem(this.$props._id)
                console.log(deletedThing)
            }
        }

    }
</script>
