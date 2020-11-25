import Search from './components/search/Search.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import LogIn from './components/auth/LogIn.vue'
import SignUp from './components/auth/SignUp.vue'
import CheckProfile from './components/search/CheckProfile.vue'
import SearchResult from './components/search/SearchResult.vue'
import Chat from './components/chat/Chat.vue'

import * as tokens from './tokens' 
import { vm } from './main'
import {store} from './store'

const routes =  [
    { path: '', component: Search, name: 'search', beforeEnter(to, from, next) {
        if (store.state.token.idToken) {
            next()
        } else {
            next('/login')
        }
    } },
    { path: '/login', component: LogIn, name: 'login' },
    { path: '/signup', component: SignUp, name: 'signup' },
    { path: '/user', component: UserDetail, name: 'user', beforeEnter(to, from, next) {
        if (store.state.token.idToken) {
            next()
        } else {
            next('/login')
        }
    } },
    { path: '/user/edit', component: UserEdit, name: 'edit', beforeEnter(to, from, next) {
        if (store.state.token.idToken) {
            next()
        } else {
            next('/login')
        }
    } }, 
    { path: '/result', component: SearchResult, name: 'result', beforeEnter(to, from, next) {
        if (store.state.token.idToken) {
            next()
        } else {
            next('/login')
        }
            
    } },
    { path: '/result/profile', component: CheckProfile, name: 'profile', beforeEnter(to, from, next) {
        if (store.state.token.idToken) {
            next()
        } else {
            next('/login')
        }
    }  },
    { path: '/chat', component: Chat, name: 'chat', beforeEnter(to, from, next) {
        if (store.state.token.idToken) {
            next()
        } else {
            next('/login')
        }
    } },
    { path: '*', redirect: { name : 'search'} }
]

export default routes