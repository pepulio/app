import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    drawer: false,
    searchQuery: '',
    locations: [
      {
        label: 'McDonald\'s Dubrava',
        address: 'Dubrava 143, 10040, Zagreb',
        position: [16.0606216, 45.8309049]
      },
      {
        label: 'Submarine Burger Radnička',
        address: 'Radnička cesta 34, 10000, Zagreb',
        position: [15.9964507, 45.8037254]
      },
      {
        label: 'The Burger Bar',
        address: 'Zavrtnica 17, 10000, Zagreb',
        position: [15.9979606, 45.8071151]
      },
      {
        label: 'Rocket Burger',
        address: 'Ul. Ivana Tkalčića 50, 10000, Zagreb',
        position: [15.9744368, 45.8163569]
      },
      {
        label: 'Burger King',
        address: 'Ul. Vice Vukova 6, 10000, Zagreb',
        position: [15.9426275, 45.771915]
      }
    ]
  },
  mutations: {
    toggleDrawer(state){
      state.drawer = !state.drawer;
    },
    hideDrawer(state) {
      state.drawer = false
    },
    showDrawer(state) {
      state.drawer = true
    },
    setSearchQuery(state, value) {
      state.searchQuery = value
    }
  },
  getters: {
    drawer(state){
      return state.drawer
    },
    locations(state){
      return state.locations
    },
    filteredLocations(state) {
      if (!state.searchQuery) {
        return state.locations
      }
      const lowerQuery = state.searchQuery.toLowerCase()
      return state.locations.filter(location => {
          return location.label.toLowerCase().indexOf(lowerQuery) >= 0
      })
    },
    searchQuery(state){
      return state.searchQuery
    }
  }
});