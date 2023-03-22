<template>
  <component
    v-if="slidesComponent"
    :is="slidesComponent"
    fixed-height="540px"
    3d
    :touchable="false"
    autoplay
  >
    <component
      :is="slideComponent"
      v-for="(slide, index) in slideItems"
      :key="index"
      v-bind="slide"
    />
  </component>
</template>

<script setup lang="ts">
import { type ComponentOptions, computed, onMounted, shallowRef } from "vue";
import "vueperslides/dist/vueperslides.css";

export interface SlideItem {
  title: string;
  content: string;
  image?: string;
  link?: string;
}

const props = withDefaults(defineProps<{ slides: SlideItem[] }>(), {
  slides: () => [],
});

const slidesComponent = shallowRef<ComponentOptions | null>(null);
const slideComponent = shallowRef<ComponentOptions | null>(null);

const slideItems = computed(() =>
  props.slides.map((item) => {
    // relative path
    if (
      item.image &&
      typeof item.image === "string" &&
      item.image.match(/^\.\/|^@\//)
    ) {
      // @ts-ignore
      item.image = require(item.image);
    }

    return item;
  })
);

onMounted(() => {
  // @ts-ignore
  import("vueperslides").then(({ VueperSlides, VueperSlide }) => {
    slidesComponent.value = VueperSlides;
    slideComponent.value = VueperSlide;
  });
});
</script>

<style scoped>
.vueperslides >>> .vueperslides__parallax-wrapper {
  border: 1px solid rgb(244, 244, 245);
}

.vueperslides >>> .vueperslides__parallax-wrapper:before {
  box-shadow: none !important;
}

.vueperslides >>> .vueperslides__parallax-wrapper .vueperslide {
  background-color: #ffffff;
  background-size: contain;
  background-repeat: no-repeat;
}

.vueperslides >>> .vueperslide__content-wrapper {
  float: right;
  padding: 15px;
  color: #ffffff;
  background: rgba(64, 156, 255, 0.5);
  height: auto;
  text-align: right;
  align-items: end;
  justify-content: start;
  z-index: 100;
}

.vueperslides >>> .vueperslide__content-wrapper > .vueperslide__title {
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
</style>
