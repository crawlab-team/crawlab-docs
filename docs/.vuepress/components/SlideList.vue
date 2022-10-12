<template>
  <component
      v-if="VueperSlides"
      :is="VueperSlides"
      fixed-height="540px"
      3d
      :touchable="false"
      autoplay
  >
    <component
        v-if="VueperSlide"
        :is="VueperSlide"
        v-for="(slide, i) in computedSlides"
        :key="i"
        :title="slide.title"
        :content="slide.content"
        :image="slide.image"
        :link="slide.link"
    />
  </component>
</template>

<script>
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'SlideList',
  props: {
    slides: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      VueperSlides: null,
      VueperSlide: null,
    }
  },
  computed: {
    computedSlides() {
      return this.slides.map(d => {
        // relative path
        if (d.image && typeof d.image === 'string' && d.image.match(/^\.\/|^@\//)) {
          d.image = require(d.image)
        }
        return d
      })
    },
  },
  mounted() {
    import('vueperslides').then(({ VueperSlides, VueperSlide }) => {
      this.VueperSlides = VueperSlides
      this.VueperSlide = VueperSlide
    })
  }
}
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
  display: inline-block;
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
