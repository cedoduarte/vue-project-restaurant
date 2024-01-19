<template>
    <img class="log-in-logo" src="../assets/resto-logo.png" alt="logo">
    <h1 class="log-in-title">LogIn</h1>
    <div class="log-in-container">
        <input type="text" v-model="email" placeholder="Enter email" />
        <input type="password" v-model="password" placeholder="Enter password">
        <button @click="logIn">Log-In</button>
        <p class="log-in-sign-up">
            <router-link to="/sign-up">Sign-Up</router-link>
        </p>
    </div>
</template>

<script>

import axios from "axios";
import { USER_URL_ENDPOINT, USER_INFO } from "../shared/constants.js";

export default {
    name: "LogInComponent",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async logIn() {
            const result = await axios.get(`${USER_URL_ENDPOINT}?email=${this.email}&password=${this.password}`);
            if (result.status === 200 && result.data.length > 0) {
                localStorage.setItem(USER_INFO, JSON.stringify(result.data[0]));
                this.$router.push({name:"HomeComponent"});
            }
        }
    },
    mounted() {
        const user = localStorage.getItem(USER_INFO);
        if (user) {
            this.$router.push({name:"HomeComponent"});
        }
    }
}

</script>

<style>

.log-in-logo {
    width: 100px;
}

.log-in-title {
    margin-top: 5px;
    margin-bottom: 5px;    
}

.log-in-container input {
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

.log-in-container button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: white;
    cursor: pointer;
    border-radius: 20px;
}

.log-in-sign-up {
    margin-top: 5px;
}

</style>