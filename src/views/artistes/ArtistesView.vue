<template>
  <div class="bg-dark pt-10 pb-20">
    <div class="card-header">
      <h5>
        Liste des participants
        <span class="float-right" title="Créer un nouveau participant">
          <router-link to="/createParticipant">
            <img src="../assets/img/trash.svg" class="w-1/12" />
          </router-link>
        </span>
      </h5>
    </div>

    <div class="card-body table-responsive">
      <table class="text-light table">
        <thead>
          <tr>
            <th scope="col" class="text-center">Image</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Pays</th>
            <th scope="col">Né le</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="artistes in listeArtistes" :key="artistes.id">
            <td class="text-center">
              <img class="media-object imageSmall" :src="artistes.photo" :alt="artistes.prenom + ' ' + artistes.nom" />
            </td>
            <td>
              <b>{{ artistes.nom }}</b>
            </td>
            <td>{{ artistes.prenom }}</td>
            <td>{{ artistes.nationalite }}</td>
            <td>{{ dateFr(artistes.naissance) }}</td>
            <td>
              <span title="Supprimer l'artiste" class="mr-2">
                <RouterLink :to="{ name: 'DeleteArtistes', params: { id: artistes.id } }">
                  <img src="../assets/img/trash.svg" class="w-1/12" />
                </RouterLink>
              </span>
              <span title="Modifier l'artiste'" class="mr-2">
                <!-- Pour passer un paramètre dans la navigation :
                                On utilise le nom de la route
                                l'attribut params, permet de préciser le nom du paramètre (id) 
                                et sa valeur (part.id, id du participant) 
                                -->
                <RouterLink :to="{ name: 'UpdateArtistes', params: { id: artistes.id } }">
                  <img src="../assets/img/ame.svg" class="w-1/12" />
                </RouterLink>
              </span>
              <span title="Gérer les participations aux vidéos">
                <a href="#">
                  <img src="../assets/img/down.svg" class="w-2/12" />
                </a>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "ArtistesView",
  data() {
    return {
      listeArtistest: [], // Liste des participants
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des participants
    this.getArtistes();
  },
  methods: {
    async getArtistes() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbPart = collection(firestore, "artistes");
      // Liste des participants triés sur leur nom
      const q = query(dbPart, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtistes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // Récupération des images de chaque participant
        // parcours de la liste
        this.listeArtistes.forEach(function (personne) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "artistes/" + personne.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              personne.photo = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },

    // Format date en français
    dateFr(d) {
      let date = d.split("-");
      return date[2] + "/" + date[1] + "/" + date[0];
    },
  },
};
</script>

<style scoped>
</style>



