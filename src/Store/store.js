import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'
const url='https://hapiapi-nwwwdcogfv.now.sh/item';
const url2 = './testData.json';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)




export default new Vuex.Store({
  state: {
    items:[],
  },
  mutations: {
    [types.GET_ALL_ITEMS](state, {things}){
      state.items= things.slice();
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
    
  },
  getters:{
    getItems: state => state.items,
    getField,
  }
})
