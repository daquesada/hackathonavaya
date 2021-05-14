<template>
  <div class="container">
    <div
      class="spinner-border text-primary center"
      role="status"
      v-if="loading"
    >
      <span class="sr-only"></span>
    </div>
    <div>
      <p>nombre: {{ data.data[0].name }}</p>
      <p>tipo de afiliación: {{ data.data[0].role }}</p>
    </div>

    <img
      src="https://image.slidesharecdn.com/ejemplodehistoriaclinica-141119114412-conversion-gate02/95/ejemplo-de-historia-clinica-1-638.jpg?cb=1418134049"
      alt="picture"
    />
    <div class="button">
      <a
        href="https://image.slidesharecdn.com/ejemplodehistoriaclinica-141119114412-conversion-gate02/95/ejemplo-de-historia-clinica-1-638.jpg?cb=1418134049"
        target="_blank"
        >Descargar</a
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["loading"]),
  },
  methods: {
    ...mapMutations([
      "updateLoading", //also supports payload `this.nameOfMutation(amount)`
    ]),
  },
  name: "Detail",
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    this.$store.commit("updateLoading", true);
    const token = localStorage.getItem("token");
    axios
      .get(
        "https://avaya-hackathon-server.herokuapp.com/api/v1/medical-history",
        {
          headers: {
            "auth-token": token,
          },
        }
      )
      .then((data) => {
        this.data = data;
        this.$store.commit("updateLoading", false);
      })
      .catch(() => this.$store.commit("updateLoading", false));
  },
};
</script>

<style lang="scss" scoped>
.button {
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
a {
  text-align: center;
  margin: 20px;
  text-decoration: none;
  width: 100%;
  background: #56baed;
  color: #ffff;
  height: 100%;
  border-radius: 5px;
  font-size: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  padding: 4px;
}
a:hover {
  background: cornflowerblue;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
}
img {
  width: 80%;
  height: 80%;
  box-shadow: 4px 6px 3px rgba(0, 0, 0, 0.3);
}
</style>
