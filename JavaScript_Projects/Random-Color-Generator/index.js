
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");





for (let i = 0; i < 10; i++) {



}
//random number generated from this function
function randomizer() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return [r, g, b];
}

//storing the values in the vaiables
let [r1, g1, b1] = randomizer();
let [r2, g2, b2] = randomizer();
let [r3, g3, b3] = randomizer();
let [r4, g4, b4] = randomizer();
let [r5, g5, b5] = randomizer();



//adding random background colors using the funciton
box1.style.backgroundColor = `rgb(${r1},${g1},${b1})`;
box2.style.backgroundColor = `rgb(${r2},${g2},${b2})`;
box3.style.backgroundColor = `rgb(${r3},${g3},${b3})`;
box4.style.backgroundColor = `rgb(${r4},${g4},${b4})`;
box5.style.backgroundColor = `rgb(${r5},${g5},${b5})`;

//console preview
console.log("box 1:",r1, g1, b1);
console.log("box 2:",r2, g2, b2);
console.log("box 3:",r3, g3, b3);
console.log("box 4:",r4, g4, b4);
console.log("box 5:",r5, g5, b5);