<template>
  <div class="pb-20">
    <p class="pt-7 text-center text-2xl">Liste des artistes</p>

    <form class="mb-3">
      <p class="text-xl">Nouveau artiste</p>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Nom</span>
        </div>
        <input type="text" v-model="nom" class="form-control border-2" required />
        <button class="btn btn-light" type="button" @click="createArtistes()" title="Création">
          <img src="../assets/img/down.svg" class="w-2/12" />
        </button>
      </div>
    </form>

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nom</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="artistes in listeArtistesSynchro" :key="artistes.id">
          <td>{{ artistes.id }}</td>
          <td>
            <input type="text" v-model="artistes.nom" />
          </td>
          <td class="flex">
            <button class="btn light" @click.prevent="updateArtistes(artistes)">
              <img src="../assets/img/ame.svg" class="w-1/12" />
            </button>
            <button class="btn light" @click.prevent="deleteArtistes(artistes)">
              <img src="../assets/img/trash.svg" class="w-1/12" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  data() {
    return {
      listeArtistes: [],
      nom: null,
      listeArtistesSynchro: [],
    };
  },

  mounted() {
    this.getArtistesSynchro();
  },

  methods: {
    async getArtistesSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtistes = collection(firestore, "artistes");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbArtistes, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeArtistesSynchro = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },

    async createArtistes() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtistes = collection(firestore, "artistes");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dbArtistes, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updateArtistes(artistes) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à modifier
      const docRef = doc(firestore, "artistes", artistes.id);
      // On passe en paramètre format json
      // Les champs à mettre à jour
      await updateDoc(docRef, {
        nom: artistes.nom,
      });
    },

    async deletePays(artistes) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à supprimer
      const docRef = doc(firestore, "artistes", artistes.id);
      // Suppression du pays référencé
      await deleteDoc(docRef);
    },
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}
.title {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #34495e;
}
</style>


