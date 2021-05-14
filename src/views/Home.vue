<template>
  <div class="home">
    <Button text="Exámenes médicos" id="examenes-medicos" />
    <Button text="Historia clínica" id="historia-clinica" />
    <Button text="Orden de apoyo" id="orden-apoyo" />
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
