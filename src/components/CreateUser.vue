<template>
  <div>
    <div class="overlay"></div>
    <div class="form">
        <button type="button" @click="close()" class="close-btn">X</button>
        <h3>Create User</h3>
        <form>
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" v-model="formData.firstName" placeholder="Enter first name">

            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" v-model="formData.lastName" placeholder="Enter last name">

            <label for="email">Email</label>
            <input type="text" id="email" name="email" v-model="formData.email" placeholder="Enter email">

            <!-- <label for="title">Job Title</label>
            <select id="position" name="title" v-model="formData.position">
                <option value="" disabled>Select</option>
                <option value="engineer">Engineer</option>
                <option value="lead">Lead</option>
                <option value="manager">Manager</option>
            </select> -->
        
            <button type="button" class="create-button" @click="createUser()">Submit</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    name: "CreateUser",
    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                // position: ''
            }
        }
    },
    methods: {
        async createUser() {
            await this.$store.dispatch('createUser', { "first_name": this.formData.firstName, "last_name": this.formData.lastName, "email": this.formData.email })
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