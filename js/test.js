


console.log("helllllllllo")
doMajic()

function doMajic(){
    console.log("inside the maaaaaaaaaaaaaaaagic!!!!")

    //console.log(Cookies.get()) // => { name: 'value' }
    Cookies.set("heeello", "ameenah")


    var cookiesList = Cookies.get()
    console.log(cookiesList)
    console.log(typeof(cookiesList))

    names = Object.keys(cookiesList)

    for(var  name in names ){
       // Document.Cookies.re
        //Cookies.remove( name, { path: '/', domain: '.medium.com' })

    }

    console.log( Cookies.get())

}




