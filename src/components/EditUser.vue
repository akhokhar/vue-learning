<template>
  <div>
    <div class="overlay"></div>
    <div class="form">
        <button type="button" @click="close()" class="close-btn">X</button>
        <h3>Edit User</h3>
        <form>
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" v-model="formData.firstName" placeholder="Enter first name">

            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" v-model="formData.lastName" placeholder="Enter last name">

            <label for="email">Email</label>
            <input type="text" id="email" name="email" v-model="formData.email" placeholder="Enter email">
        
            <button type="button" class="create-button" @click="editUser()">Submit</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    name: "EditUser",
    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                email: ''
            }
        }
    },
    props: {
        userId: Number
    },
    mounted() {
        const user = this.$store.getters.findUser(this.userId)
        this.formData = {
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email
        }
    },
    methods: {
        async editUser() {
            await this.$store.dispatch('editUser', { id: this.userId, data: { "first_name": this.formData.firstName, "last_name": this.formData.lastName, "email": this.formData.email }})
            this.close()
        },
        close(obj) {
            this.$emit('onClose')
            // this.$emit('onClose', obj)
        }
    }
};
</script>

<style>
    .overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.7;
    }
    .close-btn {
        position: absolute;
        right: 1px;
        top: 5px;
        background-color: transparent;
        border: none;
        color: black;
        font-weight: bold;
    }
    input[type=text], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .create-button {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .create-button:hover {
        background-color: #45a049;
    }
    div.form {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
        margin-top: 50px;
        width: 30rem;
        position: absolute;
        left: 30%;
    }
</style>