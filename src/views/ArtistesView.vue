<template>
  <div>
    <h5>Firebase - Se connecter</h5>
    <form @submit.prevent="onCnx()">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="btn btn-dark">Email :</button>
        </div>
        <input class="form-control" type="text" v-model="user.email" required />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="btn btn-dark">Mot de passe :</button>
        </div>
        <input class="form-control" type="password" v-model="user.password" required />
      </div>
      <div class="alert alert-warning mb-3 text-center" v-if="message != null">
        {{ message }}
      </div>
      <div>
        <button class="float-left" @click="onDcnx()">Deconnexion</button>
        <button variant="dark" class="float-right" type="submit">Connexion</button>
      </div>
    </form>
  </div>
</template>

<script>
import Comp9 from "../components/Comp9View.vue";
import Comp10 from "../components/Comp10View.vue";

export default {
  components: { Comp9, Comp10 },

  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      message: null,
    };
  },

  mounted() {},

  methods: {
    onCnx() {
      // Se connecter avec user et mot de passe
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          // Connexion OK
          console.log("user connecté", response.user);
          this.user = response.user;
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          // Erreur de connexion
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },
    onDcnx() {
      // Se déconnecter
      signOut(getAuth())
        .then((response) => {
          this.user = getAuth().currentUser;
          this.user = {
            email: null,
            password: null,
          };
          console.log("user deconnecté ", this.user);
          this.message = "user non connecté";
        })
        .catch((error) => {
          console.log("erreur deconnexion ", error);
        });
    },
  },
};
</script>

<style scoped>
</style>


