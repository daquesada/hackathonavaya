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
import axios from "axios";
export default {
  components: {
    Button,
  },
  name: "Home",
  mounted() {
    const token = localStorage.getItem("token");
    axios
      .post(
        `https://avaya-hackathon-server.herokuapp.com/api/v1/users/screen/HOME`,
        {
          headers: {
            "auth-token": token,
          },
        }
      )
      .then(() => {
        console.log("exito");
      })
      .catch(() => console.log("error"));
  },
  data() {
    return {
      data: {},
    };
  },
};
</script>
