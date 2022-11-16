<script setup>
import { onMounted, ref, reactive } from 'vue';
let chats = reactive({ chats: [] });
let message = ref('');
onMounted(() => {
    const api_url = "https://lab5-p379.onrender.com/api/v1/messages/";
    fetch(api_url)
        .then(response => response.json())
        .then(data => {
            chats.chats = data;
            console.log(chats);
        });
});

const addChat = () => {
    console.log(message.value);
    let data = {
        user: "Griet👀",
        text: message.value
    };
    fetch("https://lab5-p379.onrender.com/api/v1/messages/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            chats.chats.push({
                _id: data.data.id,
                user: data.data.user,
                text: data.data.text
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
</script>

<template>
    <div>
        <div class="chat">
            <ul>
                <li v-for="chat in chats.chats" :key="chats.id">
                    <b>{{chat.user}}:</b> {{chat.text}}
                </li>
            </ul>
        </div>
       <div class="input-container">
            <input type="text" class="input"  placeholder="Add comment" v-model="message" >
            <button @click="addChat">Post</button>
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
    height: 60vh;
    border: 1px solid black;
    overflow: scroll;
}
</style>