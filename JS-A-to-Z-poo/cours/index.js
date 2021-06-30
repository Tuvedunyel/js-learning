const obj = {
    //index: value => paramètre
    pseudo: "From Scratch",
    ville: "Bordeaux",
    admin: false,

    // direBonjour() {
    //     console.log("Bonjour je suis " + this.pseudo)
    // }
    direBonjour: function () {
        console.log("Bonjour je suis " + this.pseudo)
    }
}

// console.log(typeof obj);

// Ajouter
obj.age = 24
obj["admin"] = true

//Modifier
obj.pseudo = "Tuve"

//Supprimer
delete obj.ville

// Checker si proprité existé
// console.log("pseudo" in obj);
// console.log("ville" in obj);

// Parcourir un objet 
for (const key in obj) {
    // console.log(key + " : " + obj[key])
}
// console.log(obj.direBonjour());

// Obtenir les clés d'un objet 
const keys = Object.keys(obj)
// console.log(keys);

// Obtenir les valeurs
const values = Object.values(obj);
// console.log(values);

const nestedArray = Object.entries(obj)
// console.log(nestedArray);

const obj2 = {
    taille: "1m75",
    poind: "93.6kg",
    pseudo: "Tuvedunyel" //Le dernier annocé l'emporte
}

// Fussioner objects
const fusion = Object.assign({}, obj, obj2)
// console.log(fusion);

// Empecher les modifications sur les paramètres
// const newObj = Object.freeze(obj)
const newObj = Object.seal(obj);
newObj.pseudo = "Test";
newObj.adresse = "42 avenue du code";
// console.log(newObj);


// ----------------------------------------------------------------
// Construire des objets
// ----------------------------------------------------------------


// Focntion construteur

function User(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;

    this.getCity = function() {
        console.log(this.pseudo + " réside à " + this.ville);
    }
}

const user1 = new User("Tuve", "Tours");
const user2 = new User("Denis", "Nantes");
// console.log(user1);
// console.log(user2.getCity());


// Factory function

function User3(pseudo, ville) {
    return {
        pseudo,
        ville
    }
}

const user4 = User3("Tuvedunyel", "Tours");
// console.log(user4);

// Class

class Utilisateur {
    constructor(pseudo, ville) {
        this.pseudo = pseudo;
        this.ville = ville;
    }

    sayMyName = function () {
        console.log("Bonjour je suis " + this.pseudo)
    }
}

const user5 = new Utilisateur('Samia', "Lyon");

Utilisateur.prototype.sayCity = function () {
    console.log("J'habite à " + this.ville)
}

Object.assign(Utilisateur.prototype, {
    method1() {
        // Ma Méthode
    },
    method2 () {
        // Ma méthode
    }
})

// console.log(user5);


// ------------------------------------------------
// L'héritage

class Animal {
    constructor(nom, age) {
        this.name = nom;
        this.age = age
    }
    
    saySomething(text) {
        console.log(this.name + " dit : " + text)
    }
}

class Dog extends Animal {
    run() {
        console.log("Le chien court !");
    }
}

class Cat extends Animal {
    hunt() {
        console.log("J'ai tué un oiseau");
    }
}


const rintintin = new Dog("Rintintin", 5)

console.log(rintintin)