<template>
  <rapi-doc
    :spec-url="specUrl"
    render-style="view"
    style="height:100%; width:100%"
    theme="light"
    layout="row"
    bg-color="#fff"
    :show-header="false"
  />
</template>

<script>
export default {
  name: 'ApiDoc',
  props: {
    specUrl: {
      type: String,
      required: true,
    }
  },
  mounted() {
    setTimeout(() => {
      const el = document.querySelector('#main-content')
      el.style.padding = '0'
      el.style.margin = '0'
      el.style.maxWidth = 'inherit'

      // remove
      const selectorsDel = [
        '.page-edit',
        '.page-nav',
      ]
      selectorsDel.forEach(sel => {
        const el = document.querySelector(sel)
        if (!el) return
        el.remove()
      })
    }, 100);
  }
}
</script>

<style scoped>
rapi-doc::part(section-header),
rapi-doc::part(section-overview) {
  display: none;
}
</style>