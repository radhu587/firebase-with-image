import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register'
import login from '@/components/login'
import main from '@/components/main'

Vue.use(Router)

let router= new Router({
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '*',
      redirect: '/hello'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      meta:{
        requiresAuth:true
      }
    },
  ]

})

router.beforeEach((to,from,next)=>{
  let currentUser= firebase.auth().currentUser;
  let requiresAuth= to.matched.some(record=>record.meta.requiresAuth);

  if(requiresAuth && !currentUser){
    next('login');  
  }else if(!requiresAuth && currentUser){
    next('main');
  }else{
    next();       
  }
});
export default router
