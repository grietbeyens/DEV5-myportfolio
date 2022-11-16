<script setup>
import VideoPlayer from './components/VideoPlayer.vue';
import VideoDetails from './components/VideoDetails.vue';
import Chat from './components/Chat.vue';
</script>

<template>
  <div class="app">
    <VideoPlayer />
    <div class="details">
      <VideoDetails />
      <Chat />
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: row;
  padding-top: 3em;
}

.details {
  display: flex;
  flex-direction: column;
}

</style>
