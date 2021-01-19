<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="AllQuestions">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
export default {
  name: "Admin"
};
</script>

<style></style>
