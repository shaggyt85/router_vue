<script setup>

</script>

<template>
  <div>
    <router-link :to="{name: 'home'}">home</router-link>
    <router-link to="/session">session</router-link>
    <router-link :to="{name: 'about'}">about</router-link>
    <router-link to="/chats">chats</router-link>
    <router-link to="/service">service</router-link>
    <router-link to="/contact">contact</router-link>
  </div>
  <router-view />
</template>

<style scoped>

</style>
