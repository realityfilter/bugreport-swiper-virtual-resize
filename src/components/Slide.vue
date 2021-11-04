<template>
    <div ref="slide" class="w-full h-full bg-green-200 grid place-items-center p-4 border-8">
        <p>{{ page }}</p>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue';

const { page } = defineProps({ page: Number });

let slide = $ref();

let observer = new MutationObserver(() => {
    console.log('Mutated slide style', page, slide.parentElement.style.left);
});

onMounted(() => {
    observer.observe(slide.parentElement, { attributes: true, attributeFilter: ['style'] });
});

onBeforeUnmount(() => {
    observer.disconnect();
});
</script>
