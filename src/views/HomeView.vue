<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter()
  const username = ref("")

  const login = () => {
    router.push({
      path: "/chats",
      params: {
        idChat: username.value
       },
       replace: true
    })
  }
  
</script>

<template>
  <main>
        <h3>Introduce tu nombre de usuario {{ username }}</h3>
        <input type="text" placeholder="User" v-model="username">
        <button @click="login">Iniciar Seccion</button>
  </main>
</template>
