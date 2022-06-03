import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import ArtistesView from '../views/artistes/ArtistesView.vue'
import CreateView from '../views/artistes/CreateView.vue'
import DeleteView from '../views/artistes/DeleteView.vue'
import UpdateView from '../views/artistes/UpdateView.vue'
import FestivalView from '../views/FestivalView.vue'
import ConcertsView from '../views/ConcertsView.vue'
import ContactView from '../views/ContactView.vue'
import Comp1View from "../components/Comp1View.vue"
import Comp2View from "../components/Comp2View.vue"
import Comp3View from "../components/Comp3View.vue"
import Comp4View from "../components/Comp4View.vue"
import Comp5View from "../components/Comp5View.vue"
import Comp6View from "../components/Comp6View.vue"
import Comp7View from "../components/Comp7View.vue"
import Comp9View from "../components/Comp9View.vue"
import Comp10View from "../components/Comp10View.vue"
import ArtistesdetView from '../views/ArtistesdetView.vue'
import FormulaireView from '../components/FormulaireView.vue'
import MentionsView from '../views/MentionsView.vue'
import Comp11View from "../components/Comp11View.vue"
import P404View from "../views/P404View.vue"
import GuidedestyleView from "../views/GuidedestyleView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/programmation', name: 'ProgrammationView', component: ProgrammationView },
    { path: '/artistes', name: 'ArtistesView', component: ArtistesView },
    { path: '/create', name: 'CreateView', component: CreateView },
    { path: '/delete', name: 'DeleteView', component: DeleteView },
    { path: '/update', name: 'UpdateView', component: UpdateView },
    { path: '/festival', name: 'FestivalView', component: FestivalView },
    { path: '/concerts', name: 'ConcertsView', component: ConcertsView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/comp2', name: 'Comp2View', component: Comp2View },
    { path: '/comp3', name: 'Comp3View', component: Comp3View },
    { path: '/comp4', name: 'Comp4View', component: Comp4View },
    { path: '/comp5', name: 'Comp5View', component: Comp5View },
    { path: '/comp6', name: 'Comp6View', component: Comp6View },
    { path: '/comp7', name: 'Comp7View', component: Comp7View },
    { path: '/comp9', name: 'Comp9View', component: Comp9View },
    { path: '/comp10', name: 'Comp10View', component: Comp10View },
    { path: '/artistesdet', name: 'ArtistesdetView', component: ArtistesdetView },
    { path: '/formulaire', name: 'FormulaireView', component: FormulaireView },
    { path: '/mentions', name: 'MentionsView', component: MentionsView },
    { path: '/comp11', name: 'Comp11View', component: Comp11View },
    { path: '/:pathMatch(.*)*', name: 'page404', component: P404View },
    { path: '/guidedestyle', name: 'GuidedestyleView', component: GuidedestyleView },
  ]
})

export default router
