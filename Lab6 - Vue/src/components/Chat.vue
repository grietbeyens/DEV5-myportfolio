<script setup>
import { onMounted, ref, reactive } from 'vue';
let chats = reactive({ chats: [] });
onMounted(() => {
    const api_url = "https://lab5-p379.onrender.com/api/v1/messages/";
    fetch(api_url)
        .then(response => response.json())
        .then(data => {
            chats.chats = data;
            console.log(chats);
        });
});
</script>

<template>
    <div>
        <div class="chat">
            <ul>
                <li v-for="chat in chats.chats" :key="chats.id">
                    {{chat.user}}: {{chat.text}}
                </li>
            </ul>
        </div>
       <div class="input-container">
            <input type="text" placeholder="Add comment">
            <button>Post</button>
       </div>
    </div>
</template>

<style scoped>
.input-container{
    padding: 2em 1em;
    background-color: aliceblue;
}
.chat{
    width: 100;
    height: 50vh;
    border: 1px solid black;
}
</style>