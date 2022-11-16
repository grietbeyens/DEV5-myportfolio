<script setup>
import { onMounted, ref, reactive } from 'vue';
import 'animate.css';

let src = ref(""); //de data in die variabele kan veranderen en moet meteen gereflecteerd worden dus ref
let videos = reactive({ videos: [] });
let animation = ref("");

// onmounted
onMounted(() => {
    console.log("mounted");
    //fetch api
    let api_url = "http://127.0.0.1:5173/tiktok.json";
    fetch(api_url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            src.value = data.videos[0].video;
            videos.videos = data.videos;
        });

});

const nextVideo = () => {
    animation.value = "animate__fadeOut";
    setTimeout(() => {
        src.value = videos.videos[1].video;
        animation.value = "animate__fadeIn";
    }, 1000);

}

</script>

<template>
    <div class="video">
        <div class="controls">
            <a @click.prevent="nextVideo" href="#" class="controls__next">⬇️</a>
        </div>
        <video :src="src" controls autoplay muted :class="animation" class="animate__animated">
        </video>
    </div>
</template>

<style scoped>
video {
    max-width: 100%;
    max-height: 100%;
}

.video {
    position: relative;
    padding: 0 3em;
}

.controls {
    text-decoration: none;
    position: absolute;
    right: 2em;
    top: 50%;
    font-size: 2em;

}
</style>
