<template>
    <HeaderComponent />
    <h1>Hello {{ name }}, Welcome on Home Page</h1>
    <table class="home-table" border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td>
                <router-link class="home-update-restaurant-link" :to="'/update-restaurant/'+item.id">Update</router-link>
                <button class="home-delete-restaurant-button" @click="deleteRestaurant(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script>

import axios from "axios";
import { USER_INFO, RESTAURANT_URL_ENDPOINT } from '../shared/constants';
import HeaderComponent from './HeaderComponent.vue';

export default {
    name: "HomeComponent",
    components: {
        HeaderComponent
    },
    data() {
        return {
            name: "",
            restaurant: []
        }
    },
    methods: {
        async deleteRestaurant(restaurantId) {
            const result = await axios.delete(`${RESTAURANT_URL_ENDPOINT}/${restaurantId}`);
            if (result.status === 200) {
                await this.loadData();
            }
        },
        async loadData() {
            const user = localStorage.getItem(USER_INFO);
            if (!user) {
                this.$router.push({name:"SignUpComponent"});
            }
            this.name = JSON.parse(user).name;
            const result = await axios.get(RESTAURANT_URL_ENDPOINT);
            this.restaurant = result.data;
        }
    },
    async mounted() {
        await this.loadData();
    }
}

</script>

<style>

.home-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0,0,0,0.15);
}

.home-table td {
    width: 160px;
    height: 40px;
}

.home-update-restaurant-link {
    font-weight: bold;
    font-size: 12px;
    color: skyblue;
}

.home-delete-restaurant-button {
    color: skyblue;
    font-size: 12px;
    margin-left: 10px;
    border: none;
    background: transparent;
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
}

</style>