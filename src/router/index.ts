import {
  createRouter,
  createWebHashHistory,
  RouterOptions,
  Router,
  RouteRecordRaw
} from "vue-router"

// RouteRecordRaw為個別route之型別(為物件)
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/pages/HomePage.vue")
  }
]

// RouterOptions為router options的型別
const options: RouterOptions = { history: createWebHashHistory(), routes }

// Router為router的型別
const router: Router = createRouter(options)

export default router
