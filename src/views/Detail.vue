<template>
  <div>
    <h2>{{ test }}</h2>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      test: this.$route.params.name,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
</style>
