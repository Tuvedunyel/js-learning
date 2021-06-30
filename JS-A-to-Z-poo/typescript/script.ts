// Variables
let num = 24;
let num2: number;
let numOrString: number | string;

num2 = 48;

//Tableau
let array = ["chien", "chat", "poisson"];

let tableau: (number | boolean)[] = [];
tableau.push(false);
tableau.push(24);

// Objets
interface Player {
  id: number;
  name: string;
  jersey?: number;
}
interface Player2 {
  id: number;
  name: string;
  jersey: number;
}

let player: Player = {
  id: 0,
  name: "Zidane",
};
let Zidane: Player = {
  id: 0,
  name: "Zidane",
  jersey: 2,
};

const sayName = () => {
  //   console.log(player.name);
};
sayName();

// Les classes
class Singer {
  id: number;
  name: string;
  alive?: boolean;

  constructor(id: number, name: string, alive?: boolean) {
    this.id = id;
    this.name = name;
    this.alive = alive;
  }
}

const prince = new Singer(0, "Prince");

// Fonctions
const sayMyName = (name: string) => {
  //   console.log(`Bonjour ${name}`);
};

sayMyName("Grégoire");

const ageDuCapitaine = (age: number | string, size?: number) => {
  if (size) {
    console
      .log
      //   `La taille du capitainer est de ${size}cm et il est agé de : ${age}ans`
      ();
  } else {
    // console.log(`Le capitainer est agé de ${age}ans`);
  }
};

ageDuCapitaine(16);

// Enum & Tuple
enum Role {
  ADMIN,
  PREMIUM,
  BASIC,
}

interface User {
  name: string;
  attributes: [number | boolean, string];
  role: Role;
}

const user1: User = {
  name: "Julien",
  attributes: [24, "Test"],
  role: Role.ADMIN,
};

if (user1.role === Role.ADMIN) {
  console.log("co admin");
}
