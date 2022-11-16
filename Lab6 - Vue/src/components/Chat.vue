<script setup>
import { onMounted, ref } from 'vue';
let user = ref("");
let text = ref("");

onMounted(() => {
    const api_url = "https://lab5-p379.onrender.com/api/v1/messages/";
    fetch(api_url)
        .then(response => response.json())
        .then(data => {
            console.log(data[0].text);
            user.value = data[0].user;
            text.value = data[0].text;
        });
});
</script>

<template>
    <div>
        <div class="chat">
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