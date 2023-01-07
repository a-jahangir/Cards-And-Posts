import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import indexUser from './pages/users/indexUser.vue'
import showUser from './pages/users/showUser.vue'
import templateUsers from './pages/users/templateUser.vue'
import indexPost from './pages/posts/indexPost.vue'
import showPost from './pages/posts/showPost.vue'
import templatePosts from './pages/posts/templatePost.vue'
import createPost from './pages/posts/createPost.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/Users',
    name: 'templateUsers',
    component: templateUsers,
    children: [
      { path: '', name: 'users', component: indexUser },
      { path: ':id', name: 'userId', component: showUser }
    ]
  },
  {
    path: '/Posts',
    name: 'templatePosts',
    component: templatePosts,
    children: [
      { path: '', name: 'posts', component: indexPost },
      { path: ':id', name: 'postId', component: showPost },
      { path: 'Create', name: 'createPost', component: createPost }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
