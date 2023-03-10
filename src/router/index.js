import { createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {path: "/home", redirect: {name: "home"}},
    {path: '/', name: 'home', component: HomeView, alias: '/home'  },
    {path: '/session', component: import('../views/SessionView.vue'),
  children: [
    {path: "", components: {
      default: import("../views/LoginView.vue"),
      register: import("../views/RegisterView.vue")
    }}
  ]
 },
    {path: '/about', name: 'about', component: import('../views/AboutView.vue') },
    {
      path: '/chats', 
      component: import('../views/ChatsView.vue'),
      children: [
    {path: ':chatId', component: import('../views/ChatView.vue') },
  ] },
    
    {path: '/service', component: import('../views/ServiceView.vue') },
    {path: '/contact', component: import('../views/ContactView.vue') },
  ]
})

export default router