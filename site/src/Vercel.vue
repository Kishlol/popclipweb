<script setup>
import { onMounted } from 'vue'
import { useLocalhost } from './composables/useLocalhost'

onMounted(() => {
    if (useLocalhost()) return;
    
    const script1 = document.createElement("script");
    script1.textContent = "window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };"
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.setAttribute("src", "/_vercel/insights/script.js");
    script2.defer = true;
    document.head.appendChild(script2);
});
</script>

<template>
    <div id="vercel-insights" />
</template>