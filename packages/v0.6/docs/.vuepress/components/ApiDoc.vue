<template>
  <rapi-doc
    :spec-url="specUrl"
    render-style="view"
    style="height: 100%; width: 100%"
    theme="light"
    layout="row"
    bg-color="#fff"
    :show-header="false"
  />
</template>

<script setup lang="ts">
defineProps<{ specUrl: string }>();
</script>

<style scoped>
rapi-doc::part(section-header),
rapi-doc::part(section-overview) {
  display: none;
}
</style>
