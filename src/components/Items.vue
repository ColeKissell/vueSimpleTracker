<template>
<div>
		<h1 class="title">All Items</h1>
		<button @click='getItems'>Get Items</button>
    	<div>
		        <p>Name</p>
		        <p>Description</p>
		        <hr/>

		    <div>
		      <div v-for="item in items" v-bind:key="item._id" track-by="_id"> 
            <!-- need to add a button to access the update form -->
            <ul>
              <li>{{item._id}}</li>
              <li>{{item.name}}</li>
              <li>{{item.description}}</li>
            </ul>
            <hr/>
            <br/>
		      </div>
		    </div>
		</div>
    <div>
      <ItemForm></ItemForm>
    </div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ItemForm from './ItemForm'

export default {
  name: 'Items',
  computed:{ 
		...mapGetters({
			items: 'getItems',
		}),
	},
	methods:{
			...mapActions({
        getItems: 'findItems'
		})
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
