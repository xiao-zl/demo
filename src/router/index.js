
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
                component:()=>import('@/pages/demo1'),
                children:[
                    {
                        path:'people',
                        component:()=>import('@/pages/demo1/people')
                    }
                ]
            },
            {
                path:'demo2',
                component:()=>import('@/pages/Demo2'),
            }
        ]
    }
]

export default new VueRouter({
    mode:'history',
    routes
})