
import VueRouter from 'vue-router'


const routes=[
    {
        path:'/hello',
        component:()=>import('@/pages/HelloWorld.vue')
    },

    {
        path:'/home',
        component:()=>import('@/pages/Home.vue'),
        children:[
            {
                path:'demo1',
                component:()=>import('@/pages/Demo1.vue'),
            },
            {
                path:'demo2',
                component:()=>import('@/pages/Demo2.vue'),
            }
        ]
    }
]

export default new VueRouter({
    mode:'history',
    routes
})