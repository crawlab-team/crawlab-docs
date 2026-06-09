<template>
  <a :class="['card', { 'no-margin': noMargin }]" :href="link" target="_blank">
    <div class="card-box">
      <div class="card-title">
        {{ title }}
      </div>
      <div class="tag-list">
        <div v-for="(tag, i) in tags" :key="i" class="tag">
          {{ tag }}
        </div>
      </div>
    </div>
    <div class="card-subtitle">
      {{ subtitle }}
    </div>
  </a>
</template>

<script setup lang="ts">
export interface CardOptions {
  title: string;
  link: string;
  subtitle?: string;
  tags?: string[];
  noMargin?: boolean;
}

withDefaults(defineProps<CardOptions>(), { tags: (): string[] => [] });
</script>

<style scoped>
.card {
  flex: 0 calc((100% - 20px * 2) / 3);
  height: 140px;
  display: inline-block;
  margin: 0 20px 20px 0;
}

.card.no-margin {
  margin-right: 0;
}

.card .card-box {
  position: relative;
  width: 100%;
  height: 120px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  background: #fbfbfb;
  transition: all 0.2s ease-in-out;
}

.card .card-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px #bbbbbb;
}

.card .card-box .card-title {
  font-size: 18px;
  color: #2d2d2d;
}

.card .card-box:hover .card-title {
  color: #4fa6ff;
  transition: all 0.2s ease-in-out;
}

.card .card-box .tag-list {
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: 100%;
  display: flex;
}

.card .card-box .tag-list .tag {
  display: inline-flex;
  background: rgba(79, 166, 255, 0.9);
  color: #ffffff;
  font-size: 10px;
  padding: 3px;
  border-radius: 3px;
}

.card .card-subtitle {
  height: 20px;
  margin: 5px;
  font-size: 14px;
  color: #aaaaaa;
}
</style>
