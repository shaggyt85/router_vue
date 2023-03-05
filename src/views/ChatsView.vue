<script setup>
    import { ref, reactive } from 'vue';
    const chats = reactive([
        {id: 1, name: "Robert"},
        {id: 2, name: "katherine"}
    ])
</script>
<template>
    <aside>
        <div v-for="chat in chats" :key="chat.id">
            <router-link :to="`/chats/${chat.id}`" >{{ chat.name }}</router-link>
        </div>
    </aside>
    <article>
        <h2>
            <router-view />
        </h2>
    </article>
</template>