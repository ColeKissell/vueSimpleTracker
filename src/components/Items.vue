<template>
<div>
		<h1 class="title">All Items</h1>
		<button>Get Items</button>
    	<div>
		        <p>Name</p>
		        <p>Description</p>
		        <hr/>

		    <div>
		      <div v-for="item in items" v-bind:key="item._id" track-by="_id"> 
            <display-item
              :_id = item._id
              :name = item.name
              :description = item.description
            ></display-item>
		      </div>
		    </div>
		</div>
    <div>
      <ItemForm></ItemForm>
    </div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import ItemForm from './ItemForm'
import DisplayItem from './DisplayItem'
import {getThings} from '../APICalls.js';
export default {
  name: 'Items',
  components: {ItemForm, DisplayItem},
  data(){
    return{
      items:[]
    }
  },
    async created(){
        this.items = await getThings();
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
