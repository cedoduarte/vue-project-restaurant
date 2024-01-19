<template>
    <img class="sign-up-logo" src="../assets/resto-logo.png" alt="logo">
    <h1 class="sign-up-title">Sign Up</h1>
    <div class="sign-up-register">
        <input type="text" v-model="name" placeholder="Enter name" />
        <input type="text" v-model="email" placeholder="Enter email" />
        <input type="password" v-model="password" placeholder="Enter password">
        <button @click="signUp">Sign Up</button>
        <p class="sign-up-log-in">
            <router-link to="/log-in">LogIn</router-link>
        </p>
    </div>
</template>

<script>

import axios from "axios";
import { USER_URL_ENDPOINT, USER_INFO } from "../shared/constants.js";

export default {
    name: "SignUpComponent",
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async signUp() {
            const result = await axios.post(USER_URL_ENDPOINT, {
                name: this.name,
                email: this.email,
                password: this.password
            });
            if (result.status === 201) {
                localStorage.setItem(USER_INFO, JSON.stringify(result.data));
                this.$router.push({name: "HomeComponent"});
            }
        }
    },
    mounted() {
        const user = localStorage.getItem(USER_INFO);
        if (user) {
            this.$router.push({name: "HomeComponent"});
        }
    }
}

</script>

<style>

.sign-up-logo {
    width: 100px;
}

.sign-up-title {
    margin-top: 5px;
    margin-bottom: 5px;
}

.sign-up-register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
    border-radius: 20px;
}

.sign-up-register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: white;
    cursor: pointer;
    border-radius: 20px;
}

.sign-up-log-in {
    margin-top: 5px;
}

</style>