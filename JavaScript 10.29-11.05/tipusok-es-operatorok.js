var valtozo = "Ez egy var típúsú változó"; // DONT USE IT!!
let valtozo2 = "Egy egy let típúsú változó";
let valtozo3 = 5;
const KONSTANS = 7;

console.log("A variable típúsa:", typeof valtozo3, "értéke:", valtozo3);

// alap adattípúsok
let szam = 40; //Number
let szoveg = "valami"; //string
let boolean = true; //boolean
let nagyEgesz = 6741234567n //BigInt
let uresErtek = null //Üres (null)
let nemdefinialt;

console.log(nemdefinialt)

// típus konverziók számból -> szöveg, szövegből -> szám
let szambolszoveg = String(123)
console.log(szambolszoveg)

let szovegbolszam = Number(200)
console.log(szovegbolszam)

let logikaibolszam = Number(true)
console.log(logikaibolszam)

// Matematikai operátorok
let a = 10
let b = 5
console.log("Összeadás: ", a + b)
console.log("Kivonás: ", a - b)
console.log("Szorzás: ", a * b)
console.log("Osztás: ", a/b)
console.log("Maradékos osztás: ", a % b)

// összehasonlító
console.log("Egyenlő (==)", "5" == 5)
console.log("Szigorúan egyenlő (===)", "5" === 5)
console.log("Nagyobb reláció", a > b)
console.log("Kisebb reláció", a < b)

// logikai operátorok
console.log("ÉS (&&)", true && false)
console.log("VAGY (||)", true || false)
console.log("Tagadó (!)", !true)

console.log(1 && 0)

// tömb
let tomb = ["alma", "korte", "banán"]
let szamarray = new Array(1,2,3,4)
let vegyestomb = ["szöveg", 123, true]

for (let index = 0; index < tomb.length; index++) {
    console.log(`${index}. elem: ${vegyestomb[index]} amelynek a típusa ${typeof vegyestomb[index]}`)
}

// tömb push
console.log("Eredeti tömb: ", tomb)
tomb.push("narancs")
console.log("Push utáni tömb: ", tomb)

// tömb pop
tomb.pop();
console.log()
console.log("pop utáni tömb: ", tomb)

// tomb splice
tomb.splice(1, 0, "ananász")
console.log("splice utáni tömb: ", tomb)
tomb.splice(1, 2, "gránátalma")
console.log("splice utáni tömb: ", tomb)
