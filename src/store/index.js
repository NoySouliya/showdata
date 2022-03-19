import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    dataa: []
  },
  getters: {
  },
  mutations: {
    getDataa(state, dataRecieve){
      state.dataa = dataRecieve
    }
  },
  actions: {
    getDataa({commit}){
      axios('https://mhz-api.normal-x.com/v1/branch/public/')
      .then(response => {
        commit('getDataa', response.data.list_branch)
        // console.log("data:", response.data.list_branch);
      })
      .catch((err) =>{
        console.log(err);
      })
    }
  },
  modules: {
  }
})
