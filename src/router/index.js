import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue'
import LoginFormView from '@/views/user/LoginFormView.vue'
import ModifyFormView from '@/views/user/ModifyFormView.vue'
import JoinFormView from '@/views/user/JoinFormView.vue'
import JoinOkView from '@/views/user/JoinOkView.vue'
import AttachResultView from '@/views/attach/AttachResultView.vue'
import AttachFormView from '@/views/attach/AttachFormView.vue'
import ListView from '@/views/board/ListView.vue'
import ReadView from '@/views/board/ReadView.vue'
import ModifyFormView from '@/views/board/ModifyFormView.vue'
import WriteFormView from '@/views/board/WriteFormView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: MainView
  },
  {
    path: '/user/loginform',
    name: '/user/loginform',
    component: LoginFormView
  },
  {
    path: '/user/modifyform',
    name: '/user/modifyform',
    component: ModifyFormView
  },
  {
    path: '/user/joinform',
    name: '/user/joinform',
    component: JoinFormView
  },
  {
    path: '/user/joinok',
    name: '/user/joinok',
    component: JoinOkView
  },
  {
    path: '/attach/form',
    name: '/attach/form',
    component: AttachFormView
  },
  {
    path: '/attach/result',
    name: '/attach/result',
    component: AttachResultView
  },
  {
    path: '/board/list',
    name: '/board/list',
    component: ListView
  },
  {
    path: '/board/read/:no',
    name: '/board/read',
    component: ReadView
  },
  {
    path: '/board/modify/:no',
    name: '/board/modify',
    component: ModifyFormView
  },
  {
    path: '/board/writeform',
    name: '/board/writeform',
    component: WriteFormView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router