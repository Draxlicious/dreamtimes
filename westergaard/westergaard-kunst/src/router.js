import { createRouter, createWebHistory } from 'vue-router'

import TheHome from './pages/litografi/TheHome.vue'
import ThePresentational from './pages/litografi/ThePresentational.vue'
import TheNews from './pages/litografi/TheNews.vue'
import TheContact from './pages/litografi/TheContact.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {   path: '/', component: TheHome },
        {   path: '/presentation', component: ThePresentational },
        {   path: '/news', component: TheNews },
        {   path: '/contact', component: TheContact },
        {   path: '/:notFound(.*)', component: NotFound },

    ]
})

export default router;