export default function (context) {
    context.store.dispatch("initAuth", context.req);

    // if(context.store.getters.isEmployee == 'true') {
    //     context.redirect("/user")
    // } else if(context.store.getters.isHR == 'true') { 
    //     context.redirect("/visa-outsourcing")
    // }

    

    context.store.app.router.beforeEach((to, from, next) => {
        //console.log(context.store.getters.isEmployee)
        //context.redirect('/user')
      next() 
    })
  }