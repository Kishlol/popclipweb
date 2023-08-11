<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useData } from 'vitepress'
import { generateKey, canonicalize } from './helpers/iconKeyBrowser.js';
import * as config from '../config.json';
const { isDark } = useData()

const props = defineProps<{
    specifier: string;
}>()

onMounted(() => {  
    console.log("Icon mounted: ", props.specifier);
})

function iconWithColor(color: string) {
    return config.pilotmoon.cdnRoot + '/icons/' + generateKey(canonicalize({"specifier": props.specifier, color})).opaque;
}
const srcLight = computed(() => iconWithColor("black"));
const srcDark = computed(() => iconWithColor("white"));

const src = computed(() => {
    return isDark.value ? srcDark.value : srcLight.value;
})
</script>

<template>
    <img :src="src" class="Icon" />
</template>

<style scoped>
.Icon {
    width: 1.2em;
    display: inline-block;
    margin-bottom: -0.2em
}
</style>
