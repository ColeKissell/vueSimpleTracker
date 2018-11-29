import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'
const url='https://hapiapi-nwwwdcogfv.now.sh/item';
const url2 = './testData.json';


Vue.use(Vuex)




export default new Vuex.Store({
  state: {
    items:[],
    selectedItem:{
      _id: '',
      name:'',
      description:''
    }
  },
  mutations: {
    [types.GET_ALL_ITEMS](state, {things}){
      state.items= things.slice();
      },
    [types.UPDATE_SELECTED_ITEM](state, {oneThing}){
      const foundThing = state.items.filter(thing => thing._id === oneThing._id)
      state.selectedItem._id=foundThing._id
      state.selectedItem.name=foundThing.name
      state.selectedItem.description=foundThing.description
    }
  
	},
  actions: {
    // get all items
    async findItems({commit}){
      const things = await fetch('https://hapiapi-nwwwdcogfv.now.sh/item').then((response)=> {
        return response.json();
      })
      .then((myJson)=> {
        return myJson
      })
      commit(types.GET_ALL_ITEMS, {things})
    },
    updateSelectedItem({commit}, {thing}){
      let found
        if(thing !== null){
          found = fetch(`https://hapiapi-nwwwdcogfv.now.sh/item/${thing._id}`).then((response)=> {
          return response.json();
        })
        .then((myJson)=> {
          return myJson
        })
        commit(types.UPDATE_SELECTED_ITEM, {thing})
        }else{
          commit(types.UPDATE_SELECTED_ITEM, {_id:'', name:'',description:''})
        }
      
    },
  
    
  },
  getters:{
    getItems: state => state.items,
    getSelectedItem: state => state.selectedItem,
  
  }
})
