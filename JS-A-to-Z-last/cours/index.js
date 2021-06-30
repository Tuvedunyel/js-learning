"use strict";
// Canvas

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

function draw() {
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(10, 10, 50, 50);

  ctx.fillStyle = "rgba(0, 100, 200, 0.5)";
  ctx.fillRect(30, 30, 100, 50);

  ctx.fillStyle = "rgba(0, 100, 200, 0.5)";
  ctx.fillRect(10, 25, 100, 100);
  ctx.clearRect(15, 25, 40, 40);
  ctx.strokeRect(125, 75, 50, 50);

  ctx.beginPath();
  ctx.moveTo(180, 150);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 150), ctx.fill();
}
// window.addEventListener("load", draw);

// --------------------------------------------------

// Try and Catch
// try {
//   mafonction();
// } catch (error) {
//   console.log(error);
// }

// function isValideJSON(txt) {
//   try {
//     JSON.stringify(txt);
//     return true;
//   } catch (error) {
//     return false;
//   }
// }

// console.log(isValideJSON("aojojoij ijezfiojf"));

// try {
//   maFonction();
// } catch (error) {
//   // console.log(error);
// } finally {
//   // console.log("On est arrivé au bout");
// }

// Throw
// function isNumber(num) {
//   if (isNaN(num)) {
//     throw "Not a number !";
//   } else {
//     console.log("nombre");
//   }
// }

// try {
//   isNumber("2d");
// } catch (error) {
//   console.log(error);
// }

// -----------------------------------------
// Strict Mode

// voiture = "toyota";
// console.log(voiture); // Ne marche pas en mode strict
