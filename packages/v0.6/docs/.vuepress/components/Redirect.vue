<template></template>
<script>
export default {
  name: "Redirect",
  props: {
    path: {
      type: String,
    },
  },
  computed: {
    lang() {
      const meta = this.$site.head.filter(
        (d) => d[0] === "meta" && d[1] && d[1].name === "default-lang"
      )[0];
      if (!meta || !meta[1]) return;
      return meta[1].content;
    },
    redirectUrl() {
      if (this.path) {
        return this.path;
      }
      return `/${this.lang || this.defaultLang}`;
    },
  },
  data() {
    return {
      defaultLang: "zh",
    };
  },
  mounted() {
    this.$router.push(this.redirectUrl);
  },
};
</script>
