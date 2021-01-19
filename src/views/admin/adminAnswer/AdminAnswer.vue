<template>
  <div>{{ id }}</div>
</template>

<script>
export default {
  name: "AdminAnswer",
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>

<style scoped></style>
