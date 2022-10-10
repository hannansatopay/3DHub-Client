export default function (context) {

    //console.log(typeof context.store.getters.isEmployee)
    if(context.store.getters.isEmployee == 'true'){ 
        console.log('redirect to user')
        context.redirect("/visa-outsourcing/")
    }else{
        console.log('redirect')
        context.redirect("/visa-outsourcing/")
    }
}