<template>
  <v-app>
      <Navbar />
      <v-content>
        <Sidebar />
        <router-view></router-view>
      </v-content>
  </v-app>
</template>
<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
export default {
  components: { Navbar, Sidebar }
};
</script>
