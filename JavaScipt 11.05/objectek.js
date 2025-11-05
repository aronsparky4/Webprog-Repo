let diak = {
    nev: "Nagy Károly",
    kor: 60,
    varos: "Nagykanizsa"
}

let diakok = [
    {nev: "Kis pista", jegyei: [1,4,5], atlag: 0},
    {nev: "Nagy Pista", jegyei: [2,4,5], atlag: 0},
    {nev: "Szabó Pista", jegyei: [3,4,5], atlag: 0},
]
console.log("A diák neve: ", diak.nev)
console.log("Életkor: ", diak.kor)
console.log("Város", diak.varos)

diak.varos = "Budapest"
diak.kor = 15
console.log(diak)

diak.anyjaneve = "Nagy Lászlóné"
console.log(diak)

let szam1 = 5
let szam2 = szam1 // érték másolás
szam1 = 10
console.log(szam1)
console.log(szam2)

let tomb1 = [1,2,3]
let tomb2 = tomb1 // referencia másolás
tomb1[1] = 4
console.log(tomb1)
console.log(tomb2)

// hf.
let szamok = [1,6,4,9,3,6]

function osszegzes (a){
    let osszeg = 0
    for (let index = 0; index < a.length; index++){
        osszeg += a[index]
        
    }
    return osszeg
}
console.log(osszegzes(osszeg))