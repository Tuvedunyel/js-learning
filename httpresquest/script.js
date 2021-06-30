// XML HttpRequest

function reqListener()  {
    // console.log(this.responseText);
}

let req = new XMLHttpRequest(); //Vieille méthode de requête serveur
req.onload = reqListener;
// req.open('get', 'data.txt', true);
// req.open('get', 'data.json', true);
req.open('get', "https://api.blablagues.net/?rub=blagues", true);
req.send();

// ----------------------------------------------------------------
// Fetch

// fetch("monlien", "object d'options").then((response) => {
//     //response
// }).catch((error) => console.log(error));

// fetch('data.txt').then((response) => response.text()).then((data) => console.log(data)).catch((error) => console.log(error))

// fetch('data.json').then((response) => response.json()).then((data) => console.log(data)).catch((error) => console.log(error))

const myHeaders = new Headers();

const init = {
    method: "GET",
    headers : myHeaders,
    mode: "cors",
    cache: "default"
}

// fetch("data.json", init).then((res) => console.log(res))

// CRUD => Create (POST), read (GET), update (PUT), delete (DELETE)

const init2 = {
    method: "POST",
    header: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        pseudo: "Tuve",
        message: "Yo les gens"
    }),
    mode: "cors",
    credentials: "same-origin",
}
// document.querySelector('form').addEventListener('submit', () => {
//     fetch("http://localhost:3000/posts", init2).then( () => {
//         console.log('data envoyée')
//     }).catch((error) => console.log(error))
// });

//--------------------------------------
// Asynchrone

// setTimeout( () => {
//     console.log('test')
// }, 2000); // Pas très précis



// Promise
// fetch('monLien').then((res) => res)

// async/await
// async function fetchData() {
//     await fetch('monlien')
//     // Attend que la await soit éxécuté avant de faire la suite

//     executeFunction()
//     await console.log("coucou")
//     await console.log('truc')
// }

// const fetchData2 = async () => {
//     await //...
// }

// ----------------------------------------------
// Le Json


// Méthode .json() = méthode qui s'auto-résout en renvoyer le Body de la requête.

fetch('data.json').then((res) => res.json()).then((data) => {

    //Stringify => convertit en JSON
    let settings = JSON.stringify(data);
    // console.log(settings)

    //Parse => transform Json en objet JS
    // console.log(JSON.parse(settings));
})





// ----------------------------------------
// Web API

//CLIENT Storage
//Local storage
// localStorage.data = "Je stock la data";
// document.body.textContent = localStorage.data;
// localStorage.removeItem('data')

const obj = {
    name: "Denis",
    age: 22
}

//Chaine de caractère obligatoire

localStorage.user = JSON.stringify(obj);
// console.log(JSON.parse(localStorage.user));


//------------------------------------------------------
// Session storage
sessionStorage.dataSettings = "55px";
console.log(sessionStorage.dataSettings)


// --------------------------------------------------
// Cookie 
document.cookie = "username=FromScratch";


// Bonne pratique
document.cookie = "pseudo=FS;path=/; expire= Thu, 31 Dec 2099 23:59:59 GMT; secure; samesite";

let maCle;

document.body.addEventListener('keydown', (e) => {
    console.log(e);
    maCle = e.key;
    console.log(maCle);
});