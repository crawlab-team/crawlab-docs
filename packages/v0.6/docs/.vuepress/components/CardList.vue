<template>
  <div class="card-list">
    <Card
      v-for="(c, i) in cards"
      :key="i"
      :title="c.title"
      :subtitle="c.subtitle"
      :link="c.link"
      :no-margin="c.noMargin"
      :tags="c.tags"
    />
  </div>
</template>

<script setup lang="ts">
import { type CardOptions } from "./Card.vue";

withDefaults(
  defineProps<{
    cards?: CardOptions[];
  }>(),
  { cards: (): CardOptions[] => [] }
);
</script>

<style scoped>
.card-list {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
