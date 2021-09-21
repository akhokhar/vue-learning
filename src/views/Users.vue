<template>
  <div class="users">
     <CreateUser v-if="isCreateUser" @onClose="closeCreateUser"></CreateUser>
     <EditUser v-if="editId" :user-id="editId" @onClose="closeEditUser"></EditUser>
  
   <button type="button" @click="showCreateUser()" class="create-user-btn">Create User</button> 

   <div v-if="!$store.getters.isLoaded">Loading ...</div>
    <div class="users-list" v-if="isLoaded">
      <table>
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Full Name</th>
            <th>Email</th>
            <th class="last">Action(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, ind) in users" :key="ind" :class="ind === (users.length - 1) && 'last'">
            <td>{{ ind + 1 }}</td>
            <td>{{ user.fullName }}</td>
            <td>{{ user.email }}</td>
            <td class="last actions"><a @click="showEditUser(user.id)">Edit</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="!isEmpty(addedObj)">
      Created User: {{ addedObj }}
    </div>

    <!-- <div v-for="num in arr" :key="num">{{num}}</div>
    <button type="button" @click="updateFirstValue()">Update first value</button> -->

    <!-- <div>
      Name: {{ obj.name }} <br />
      Job: {{ obj.job }} <br />
      Email: {{ obj.email }}
    </div>
    <button type="button" @click="addProperty()">Add property</button> -->

    <!-- <button type="button" @click="gotoHome()">Go to home using event</button>  -->
  </div>
</template>

<script>
// @ is an alias to /src
import CreateUser from '@/components/CreateUser.vue'
import EditUser from '@/components/EditUser.vue'
import {isEmpty} from '../utils/utils.js'

import {mapState} from 'vuex'
import { mapGetters } from 'vuex';

export default {
  name: 'Users',
  components: {
    CreateUser,
    EditUser
  },
  data() {
    return {
      isCreateUser: false,
      editId: null,
      // arr: [1, 2, 3, 4],
      // obj: {
      //   name: 'Test',
      //   job: 'Engineer'
      // },
      addedObj: {},
      isEmpty: isEmpty
    }
  },
  // computed: {
  //   users() {
  //     return this.$store.state.users
  //   }
  // },
  // computed: mapState({
  //   users: state => state.users
  // }),
  computed: {
    ...mapState({
      users: state => state.users
    }),
    ...mapGetters(['users', 'isLoaded'])

  },
  created() {
    this.$store.dispatch('getUsers')
    // fetch('https://reqres.in/api/users?page=1')
    // .then(response => response.json())
    // .then(response => {
    //   this.users = response.data
    //   console.log(this.users)
    // }).catch(e => {
    //   console.error('Error: ', e)
    // })
  },
  methods: {
    showCreateUser() {
      this.isCreateUser = true
    },
    closeCreateUser(obj) {
      this.addedObj = obj
      this.isCreateUser = false
    },
    closeEditUser() {
      this.editId = null
    },
    showEditUser(id) {
      this.$store.state.users = []
      this.editId = id
    }
    // updateFirstValue() {
    //   // this.arr[0] = 5
    //   // this.arr = [...this.arr]
    //   this.arr.splice(0, 1, 5)
    //   console.log(this.arr)
    // },
    // addProperty() {
    //   this.obj.email = 'test@abc.com'
    //   this.obj = {...this.obj}
    //   console.log(this.obj)
    // },
    // gotoHome() {
    //   // this.$router.push('/')
    //   this.$router.replace('/')
    // }
  }
}
</script>

<style lang="scss" scoped>

  .users {
    padding-left: 50px;
    text-align: left;
  }
  .users-list {

    margin-top: 20px;
    table {
      border: solid black 1px;
      width: 600px;
    }
  }


  .users-list > table {

    thead > tr > th, tbody > tr:not(.last) > td {
      border-bottom: solid black 1px;
    }

    thead > tr > th:not(.last), tbody > tr > td:not(.last) {
      border-right: solid black 1px;
    }
    .actions {
      text-align: center;
      color: #4e86ee;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .create-user-btn {
    width: 150px;
    background-color: #3a67b9;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
