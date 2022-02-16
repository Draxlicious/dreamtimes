import { createRouter, createWebHistory } from 'vue-router'

import TheHome from './pages/litografi/TheHome.vue'
import ThePresentational from './pages/litografi/ThePresentational.vue'
import TheNews from './pages/litografi/TheNews.vue'
import TheContact from './pages/litografi/TheContact.vue'
import NotFound from './pages/NotFound.vue'
import PresentationalDetails from './components/ui/PresentationalDetails.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {   path: '/', component: TheHome },
        {   path: '/presentation', name: 'PresentationalPage', component: ThePresentational },
        {   path: '/presentation/:id', name: 'ImageDetails', component: PresentationalDetails, props: true },
        {   path: '/news', component: TheNews },
        {   path: '/contact', component: TheContact },
        {   path: '/:notFound(.*)', component: NotFound },

    ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})

export default router;