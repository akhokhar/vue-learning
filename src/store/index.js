import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    users: []
  },
  getters: {
    users: state => state.users.map(user => ({ ...user, 'fullName': user.first_name + ' ' + user.last_name}) ),
    findUser: state => id => state.users.find(user => user.id == id),
    isLoaded: state => !!state.users.length
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    addUser(state, user) {
      state.users.push(user)
    },
    editUser(state, userObj) {
      const index = state.users.findIndex(s => s.id == userObj.id)
      Vue.set(state.users, index, userObj.user)
    }
  },
  actions: {
    async getUsers(context) {
      const users = (await fetch('https://reqres.in/api/users?page=1').then(res => res.json())).data
      context.commit('setUsers', users)
    },
    async createUser(context, dataObj) {
      const user = (await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObj)
      }).then(res => res.json()))
      context.commit('addUser', user)
    },
    async editUser(context, {id, data}) {
        const user = (await fetch(`https://reqres.in/api/users/${id}`, {
          method: 'PUT',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json()))
        context.commit('editUser', { id: id, user: user })
    }
  },
  modules: {
    // separating states using modules
  }
})
