import Vue from "vue";
import VueRouter from "vue-router"
import QuizMenu from "../views/quiz/QuizMenu";
import GameController from "../views/quiz/GameController";
import GameOver from "../views/quiz/GameOver";
import ItemList from "../components/home/ItemList";
import TodoList from "../views/todo/TodoList";

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    component: ItemList
  }, {
    name: 'quiz',
    path: '/quiz-vue',
    component: QuizMenu
  }, {
    name: 'quiz-game',
    path: "/quiz-vue/game",
    component: GameController,
    props: (route) => ({
      number: route.query.number,
      difficulty: route.query.difficulty,
      category: route.query.category,
      type: route.query.type
    })
  }, {
    name: 'quiz-result',
    path: '/quiz-vue/result',
    component: GameOver
  }, {
    name: 'todo',
    path: '/todo',
    component: TodoList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router