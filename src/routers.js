import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import SignUpComponent from "./components/SignUpComponent.vue";
import LogInComponent from "./components/LogInComponent.vue";
import AddRestaurantComponent from "./components/AddRestaurantComponent.vue";
import UpdateRestaurantComponent from "./components/UpdateRestaurantComponent.vue";

const routes = [
    { name: "HomeComponent", component: HomeComponent, path: "/" }, 
    { name: "SignUpComponent", component: SignUpComponent, path: "/sign-up" },
    { name: "LogInComponent", component: LogInComponent, path: "/log-in" },
    { name: "AddRestaurantComponent", component: AddRestaurantComponent, path: "/add-restaurant" },
    { name: "UpdateRestaurantComponent", component: UpdateRestaurantComponent, path: "/update-restaurant/:id" }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router