import { createRouter, createWebHistory } from "vue-router";
import CreateTask from "../src/CreateTask.vue";
import App from "@/App.vue";
import EditTask from "@/editTask.vue";
import delTask from "@/delTask.vue";


const routes = [
    {path:'/createTask',name:'criação de task',component: CreateTask},
    {path:'/App',name:'app',component:App},
    {path:'/editTask/:id',name:'editar task',component:EditTask},
    {path:'/deleteTask/:id',name:'deletar',component:delTask}
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router
