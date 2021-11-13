<template>
</template>
<script>
export default {
  name: 'Redirect',
  props: {
    site: {
      type: Object,
      required: true,
    }
  },
  computed: {
    lang() {
      const meta = this.site.headTags.filter(d =>
          d[0] === 'meta' &&
          d[1] &&
          d[1].name === 'default-lang'
      )[0]
      if (!meta || !meta[1]) return
      return meta[1].content
    }
  },
  data() {
    return {
      defaultLang: 'zh'
    }
  },
  created() {
    window.location.href = `/${this.lang || this.defaultLang}`
  }
}
</script>
