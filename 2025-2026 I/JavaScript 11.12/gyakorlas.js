function szokoev_e(ev){
    if(typeof ev != 'number') return false

    /*if(ev % 4 == 0 || ev % 100 != 0 ){
        return true
    }*/

    return (ev % 4 === 0 && ev % 100 != 0) || (ev % 400 == 0)
    
}
console.log(szokoev_e(2003))

function HonapNapjaiSzM(honap, ev){
    if(typeof honap != 'string' && typeof ev != 'number') return null
    const honapneve = honap.trim().toLowerCase()
    const ekezetesN_nevek = ["januar", "februar", "marcius", "aprilis", "majus"]

    switch (honapneve) {
        case "január" || ekezetesN_nevek[0]:
            return 31
            break;
        case "február" || ekezetesN_nevek[1]:
            return szokoev_e(ev) ? 29 : 28
        case "március" || ekezetesN_nevek[2]:
            return 31
        case "április" || ekezetesN_nevek[3]:
            return 30
        case "május" || ekezetesN_nevek[4]:
            return 31
        default:
            break;
    }
    
    return null
}
console.log(HonapNapjaiSzM("január", 2005))

function parosE(szam){
    if(typeof szam !== 'number') return false
    return szam % 2 == 0
}
console.log(parosE(7))

// hőmérséklet csekk
function homerseklet(celsius){
    if (celsius < 20){
        return "hideg van"
    }
    else if (celsius < 20){
        return "kellemes"
    }
    else if (celsius < 30){
        return "meleg van"
    }
    
    return "KÁNIKULAAA"
}
console.log(homerseklet(29))

// szorzó tábla
function szorzas(szorzando, szorzo){
    let szorzasok = []
    for (let index = 1; index <= szorzo; index++){
        szorzasok[index-1] = `${szorzando} * ${index}` 
    }
    return szorzasok
}
console.log(szorzas(5,6))

// páros számok listázása
function ParosList(szam){
    let parosszamok = []
    for (let index = 0; index < szam; index++) {
        if (index % 2 == 0){
            parosszamok[index] = index
        }
        else {
            parosszamok[index] = "odd"
        }
    }
    return parosszamok
}
console.log(ParosList(30))

function paratlanlist(tomb){
    return tomb.filter(szam => szam % 2 !== 0)
    // hf
    /*
    let modositott = tomb
    for (let index = tomb.Length; index >= 0; index--) {
        if (tomb[index] % 2 !== 0){
            modositott.splice(index,1)
        }
    }
    return modositott
    */
}
console.log(2,5,3,7,9,10,21,11)
console.log(paratlanlist([2,5,3,7,9,10,21,11]))