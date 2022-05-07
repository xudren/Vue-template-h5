// //路由权限 页面
// import router from './index';
// //token
// function getToken(){
//   return localStorage.getItem('token')
// }

// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   if(!getToken()){ //没有登录
//     if(to.meta.token){
//       next({name:'login'})
//     }else{
//       next()
//     }
//   }else{ //已经登录
//     next()
//   }
// })