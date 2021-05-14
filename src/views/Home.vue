<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Button text="Exámenes médicos" />
    <Button text="Historia clínica" />
    <Button text="Orden de apoyo" />
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/Button.vue";

export default {
  components: {
    Button,
  },
  name: "Home",
};
</script>
