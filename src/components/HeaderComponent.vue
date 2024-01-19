<template>
    <div class="header-navigation">
        <router-link to="/">Home</router-link>
        <router-link to="/add-restaurant">Add Restaurant</router-link>
        <a @click="logOut" href="#">Log-out</a>
    </div>
</template>

<script>

export default {
    name: "HeaderComponent",
    methods: {
        logOut() {
            localStorage.clear();
            this.$router.push({name:"LogInComponent"});
        }
    }    
}

</script>

<style>

.header-navigation {
    background-color: #333;
    overflow: hidden;
}

.header-navigation a {
    float: left;
    color: white;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px
}

.header-navigation a:hover {
    background: white;
    color: #333;
}

</style>