"use strict";
// Variables
var num = 24;
var num2;
var numOrString;
num2 = 48;
//Tableau
var array = ["chien", "chat", "poisson"];
var tableau = [];
tableau.push(false);
tableau.push(24);
var player = {
    id: 0,
    name: "Zidane",
};
var Zidane = {
    id: 0,
    name: "Zidane",
    jersey: 2,
};
var sayName = function () {
    //   console.log(player.name);
};
sayName();
// Les classes
var Singer = /** @class */ (function () {
    function Singer(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
    return Singer;
}());
var prince = new Singer(0, "Prince");
// Fonctions
var sayMyName = function (name) {
    //   console.log(`Bonjour ${name}`);
};
sayMyName("Grégoire");
var ageDuCapitaine = function (age, size) {
    if (size) {
        console
            .log();
    }
    else {
        // console.log(`Le capitainer est agé de ${age}ans`);
    }
};
ageDuCapitaine(16);
// Enum & Tuple
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
var user1 = {
    name: "Julien",
    attributes: [24, "Test"],
    role: Role.ADMIN,
};
if (user1.role === Role.ADMIN) {
    console.log("co admin");
}
