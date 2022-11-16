<script setup>
//onmounted
import { onMounted, ref } from 'vue';
let username = ref("");
let description = ref("");

onMounted(() =>{
    const api_url = "https://app.fakejson.com/q/wqjf4gzk?token=wvR_U-gq-6laDqqO-iqyHg";
    fetch(api_url)
    .then(response => response.json())
    .then(data => {
        username.value = data.videos[0].username;
        description.value = data.videos[0].description;
    });
});
</script>

<template>
    <div class="video__details">
        <h3>{{username}}</h3>
        <p>{{description}}</p>
    </div>
</template>

<style scoped>
.video__details{
    padding-bottom: 3em;
}
</style>
