<template>
  <div>
    <button @click="onClick">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "button",
  props: {
    text: String,
    id: String,
  },
  methods: {
    onClick() {
      this.$router.push({ path: `/detalle/${this.id}` });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 40px;
  margin: 20px auto;
  width: 400px;
  @media (max-width: 720px) {
    width: 300px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  width: 100%;
  background: #0275d8;
  color: #ffff;
  height: 100%;
  border-radius: 5px;
  font-size: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  padding: 4px;
}
button:hover {
  background: cornflowerblue;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
</style>
