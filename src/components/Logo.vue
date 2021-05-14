<template>
  <div class="logo-container">
    <h1>Centro de ayuda</h1>
    <div class="logo">
      <router-link to="/home">
        <img src="../assets/prescripcion.png" alt="logo" class="img" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo-container {
  text-align: center;
  margin: 30px 0;
  /* margin-bottom: 30px; */
}
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
