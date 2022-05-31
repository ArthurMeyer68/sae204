import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import ArtistesView from '../views/ArtistesView.vue'
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
import Comp8View from "../components/Comp8View.vue"
import Comp9View from "../components/Comp9View.vue"
import Comp10View from "../components/Comp10View.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/programmation', name: 'ProgrammationView', component: ProgrammationView },
    { path: '/artistes', name: 'ArtistesView', component: ArtistesView },
    { path: '/festival', name: 'FestivalView', component: FestivalView },
    { path: '/concerts', name: 'ConcertsView', component: ConcertsView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/comp2', name: 'Comp2View', component: Comp2View },
    { path: '/comp3', name: 'Comp3View', component: Comp3View },
    { path: '/comp4', name: 'Comp4View', component: Comp4View },
    { path: '/comp5', name: 'Comp5View', component: Comp5View },
    { path: '/comp6', name: 'Comp6View', component: Comp6View },
    { path: '/comp7', name: 'Comp7View', component: Comp7View },
    { path: '/comp8', name: 'Comp8View', component: Comp8View },
    { path: '/comp9', name: 'Comp9View', component: Comp9View },
    { path: '/comp10', name: 'Comp10View', component: Comp10View },
    // ici les autre routes
  ]
})

export default router
