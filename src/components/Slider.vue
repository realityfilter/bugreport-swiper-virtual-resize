<template>
    <div class="bg-red-200 w-full h-full">
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :preload-images="false"
            :short-swipes="true"
            :keyboard="{ enabled: true }"
            :mousewheel="{ sensitivity: 0.5, forceToAxis: true, thresholdDelta: 50 }"
            :virtual="{ addSlidesAfter: 0, addSlidesBefore: 0, cache: false }"
            :initialSlide="currentPage - 1"
        >
            <swiper-slide v-for="page in pageCount" :key="page" :virtualIndex="page">
                <Slide :page="page" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/virtual';
import 'swiper/css/zoom';

import { Keyboard, Mousewheel, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import Slide from './Slide.vue';

const modules = [Virtual]; // [Keyboard, Mousewheel, Virtual];
let pageCount = $ref(10);
let currentPage = $ref(1);
</script>

<style lang="scss" scoped>
.swiper,
.swiper-wrapper {
    width: 100%;
    height: 100%;
}
</style>
