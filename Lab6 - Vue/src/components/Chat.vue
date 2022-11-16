<script setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
    
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