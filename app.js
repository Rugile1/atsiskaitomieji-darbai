const { request } = require('express')
const express = require('express')
const path= require("path")
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,"static")))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const prekes = {
    "papuga1": {
        "pavadinimas": "Papuga Kinu kilmes",
        "kaina": "120.10",
        "aprasymas": "Papuga draugiska",
        "paveiksliukas": "https://www.foxystudio.lt/uploads/15799_1.jpg"

        },
    "papuga2": {
        "pavadinimas": "Papuga Britu kilmes",
        "kaina": "110.20",
        "aprasymas": "Papuga nebaili",
        "paveiksliukas": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2009/09/30/19/246125.jpg?quality=75&width=990&crop=630%3A430%2Csmart&auto=webp" 
    },
   
    "papuga3": {
        "pavadinimas": "Papugo Ispanu kilmes",
        "kaina": "100.10",
        "aprasymas": "Papuga serga",
        "paveiksliukas":"https://augintinis.patarimupasaulis.lt/images/Augintinis/Papugos/ara-papuga-macaw.jpg"
    }
        
}

 app.get("/prekes", (req, res) => {
    let html = `
    <html lang="en">
        <hrader>
            <title> Prekiu katalogas </title>
            <base href="http://localhost:3000">
            <link rel="stylesheet" href="style.css">
        </hedaer>
        <body>`

        for (const papuga in prekes) {
            
            html +=`<a href="prekes/${papuga}"><h1>${prekes[papuga]["pavadinimas"]}</h1></a>
            <p>Kaina: ${prekes[papuga]["kaina"]}€</p>
            <p>Kaina: ${prekes[papuga]["aprasymas"]}</p>
            <img src="${prekes[papuga]["paveiksliukas"]}">`  
        }
        






    // let papuga = "papuga1";
    // html +=`<h1>${prekes[papuga]["pavadinimas"]}</h1>
    //     <p>Kaina: ${prekes[papuga]["kaina"]}€</p>
    //     <p>Kaina: ${prekes[papuga]["aprasymas"]}</p>
    //     <img src="${prekes[papuga]["paveiksliukas"]}">`

    // papuga = "papuga2"
    // html +=`<h1>${prekes[papuga]["pavadinimas"]}</h1>
    // <p>Kaina: ${prekes[papuga]["kaina"]}€</p>
    // <p>Kaina: ${prekes[papuga]["aprasymas"]}</p>
    // <img src="${prekes[papuga]["paveiksliukas"]}">`

    // papuga = "papuga3"
    // html +=`<h1>${prekes[papuga]["pavadinimas"]}</h1>
    // <p>Kaina: ${prekes[papuga]["kaina"]}€</p>
    // <p>Kaina: ${prekes[papuga]["aprasymas"]}</p>
    // <img src="${prekes[papuga]["paveiksliukas"]}">`

    

    html += `</body>
    </html>
    `
    res.send(html); 
 })
 
    
app.get("/prekes/:preke", (req, res) => {
    if (prekes[req.params.preke]) {

        let html = `<!DOCTYPE html>
        <html lang="en">
            <head>
                <title>${req.params.preke}</title>
                <base href="http://localhost:3000">
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1>${prekes[req.params.preke]["pavadinimas"]}</h1>
                <p>Kaina: ${prekes[req.params.preke]["kaina"]}€</p>
                <p>Aprašymas: ${prekes[req.params.preke]["aprasymas"]}</p>
                <img src="${prekes[req.params.preke]["paveiksliukas"]}">
            </body>
        </html>
        `
        res.send(html); 

    } else {
        res.send("Tokios prekes nera, atsiprasome.")
    }
    
    // res.send(req.params.preke)
    // res.send(prekes[req.params.preke])
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
