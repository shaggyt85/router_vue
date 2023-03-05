<script setup>
    import { ref, computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute()

    const messages = ref([
        {id: 1, text: "mensaje 1", author: 1},
        {id: 2, text: "mensaje 2", author: 1},
        {id: 3, text: "mensaje 3", author: 2},
        {id: 4, text: "mensaje 4", author: 2}
    ])

    const messageOfUser = computed(() => messages.value.filter((msg) => msg.author.toString() === route.params.chatId))
</script>

<template>
    <div v-for="msg in messageOfUser" :key="msg.id">
        {{msg.text}}
    </div>
</template>