<template>
  <div class="logo">
    <img src="../assets/prescripcion.png" alt="logo" class="img" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  height: 200px;
  @media (max-width: 500px) {
    height: 150px;
  }
}
.img {
  height: 100%;
  widows: 100%;
  object-fit: cover;
  /* position: absolute; */
}
</style>
