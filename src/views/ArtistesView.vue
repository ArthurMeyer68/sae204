<template>
  <div>
    <p class="text-bold text-center text-2xl">Liste simple</p>
    <h5>Liste des artistes</h5>
  </div>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Id</th>
        <th class="pl-20" scope="col">Nom</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="arts in listeArts" :key="arts.id">
        <td class="text-left">{{ arts.id }}</td>
        <td class="pl-20">{{ arts.nom }}</td>
      </tr>
    </tbody>
  </table>
  <hr />

  <p class="text-bold text-center text-2xl">Liste synchro</p>
  <div class="pb-20">
    <p class="pt-7 text-center text-2xl">Liste des artistes</p>

    <span class="float-right">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Filtrage</span>
        </div>
        <input type="text" class="form-control border-2" v-model="filter" />
        <button class="btn btn-light" type="button" title="Filtrage">
          <img src="/glass.svg" class="w-1/12" />
        </button>
      </div>
    </span>

    <form class="mb-3">
      <p class="text-xl">Nouveau artiste</p>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Nom</span>
        </div>

        <input type="text" v-model="nom" class="form-control border-2" required />
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Photo</span>
          </div>
          <div class="custom-file">
            <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
          </div>
        </div>
        <button class="btn btn-light" type="button" @click="createArtistes()" title="Création">
          <img src="/down.svg" class="w-2/12" />
        </button>
      </div>
    </form>

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nom</th>
          <th class="pr-96" scope="col">Image</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="artistes in listeArtistesSynchro" :key="artistes.id">
          <td>{{ artistes.id }}</td>
          <td class="pl-20">
            <input type="text" v-model="artistes.nom" />
          </td>

          <td class="flex pl-96">
            <button class="btn light" @click.prevent="updateArtistes(artistes)">
              <img src="/ame.svg" class="w-1/12" />
            </button>
            <button class="btn light" @click.prevent="deleteArtistes(artistes)">
              <img src="/trash.svg" class="w-1/12" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
  </div>

  <RouterLink to="/create">
    <p class="pt-7 text-center text-lg text-black dark:text-white">Création d'un artiste</p>
    <img src="/plus.svg" class="ml-auto mr-auto w-12" />
  </RouterLink>

  <RouterLink to="/liste">
    <p class="pt-7 text-center text-lg text-black dark:text-white">Liste des artistes</p>
    <img src="/ame.svg" class="ml-auto mr-auto w-12" />
  </RouterLink>

  <RouterLink to="/liste">
    <p class="pt-7 text-center text-lg text-black dark:text-white">Modifier des artistes</p>
  </RouterLink>

  <RouterLink to="/delete">
    <p class="pt-7 text-center text-lg text-black dark:text-white">Supprimer des artistes</p>
    <img src="/trash.svg" class="ml-auto mr-auto w-12" />
  </RouterLink>
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

import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  data() {
    return {
      listeArts: [],
      nom: null,
      listeArtistesSynchro: [],
      photo: null,
      filter: "",
    };
  },
  computed: {
    // Tri des pays par nom en ordre croissant
    orderByName: function () {
      // Parcours et tri des pays 2 à 2
      return this.listeArtistes.sort(function (a, b) {
        // Si le nom du pays est avant on retourne -1
        if (a.nom < b.nom) return -1;
        // Si le nom du pays est après on retourne 1
        if (a.nom > b.nom) return 1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },
    // Filtrage de la propriété calculée de tri
    filterByName: function () {
      // On effectue le fitrage seulement si le filtre est rnseigné
      if (this.filter.length > 0) {
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByName.filter(function (artistes) {
          // On ne renvoie que les pays dont le nom contient
          // la chaine de caractère du filtre
          return artistes.nom.toLowerCase().includes(filter);
        });
      } else {
        // Si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByName;
      }
    },
  },

  mounted() {
    this.getArts();
    this.getArtistesSynchro();
  },

  methods: {
    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.participant.photo = this.file.name;
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },

    async getArts() {
      const firestore = getFirestore();
      const dbArts = collection(firestore, "arts");
      const query = await getDocs(dbArts);
      query.forEach((doc) => {
        let arts = {
          id: doc.id,
          nom: doc.data().nom,
        };
        this.listeArts.push(arts);
      });
    },

    async createArtistes() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'image à uploader
      const refStorage = ref(storage, "artistes/" + this.artistes.photo);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploaded a base64 string");

        // Création du participant sur le Firestore
        const db = getFirestore();
        const docRef = addDoc(collection(db, "artistes"), this.artistes);
      });
      // redirection sur la liste des participants
      this.$router.push("/participants");
    },
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
      // console.log("document créé avec le id : ", docRef.id);
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

    async deleteArtistes(artistes) {
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

