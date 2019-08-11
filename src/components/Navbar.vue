<template>
    <nav>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>    
    </nav>
</template>
<script>
export default {
    methods:{
        toggleDrawer(){
            this.$store.commit('toggleDrawer');
        }
    }
}
</script>