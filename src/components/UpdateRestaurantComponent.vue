<template>
    <HeaderComponent />
    <h1>Update Restaurant</h1>
    <form class="update-restaurant-form">
        <input type="text" v-model="restaurant.name" name="name" placeholder="Enter name" />
        <input type="text" v-model="restaurant.address" name="address" placeholder="Enter address" />
        <input type="text" v-model="restaurant.contact" name="contact" placeholder="Enter contact" />
        <button type="button" @click="updateRestaurant">Update restaurant</button>
    </form>
</template>

<script>

import axios from "axios";
import { RESTAURANT_URL_ENDPOINT, USER_INFO } from "../shared/constants";
import HeaderComponent from "./HeaderComponent.vue";

export default {
    name: "UpdateRestaurantComponent",
    components: {
        HeaderComponent
    },
    data() {
        return {
            restaurant: {
                name: "",
                address: "",
                contact: ""
            }
        }
    },
    async mounted() {
        const user = localStorage.getItem(USER_INFO);
        if (!user) {
            this.$router.push({name: "SignUpComponent"});
        }
        const restaurantId = this.$route.params.id;
        const result = await axios.get(`${RESTAURANT_URL_ENDPOINT}/${restaurantId}`);
        this.restaurant = result.data;
    },
    methods: {
        async updateRestaurant() {
            const restaurantId = this.$route.params.id;
            const result = await axios.put(`${RESTAURANT_URL_ENDPOINT}/${restaurantId}`, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            if (result.status === 200) {
                this.$router.push({name:"HomeComponent"});
            }
        }
    }
}

</script>

<style>

.update-restaurant-form {
    margin-top: 10px;
}

.update-restaurant-form input {
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

.update-restaurant-form button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: white;
    cursor: pointer;
    border-radius: 20px;
}

</style>