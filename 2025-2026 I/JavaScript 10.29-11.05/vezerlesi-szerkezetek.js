// elágazások
let kor = 18;

//if elágazások
if(kor >= 18){
    console.log("Felnőtt ember vagy")
}
else{
    console.log("Kiskorú ember vagy")
}

// switch elágazás
let nap = "hétfő"

switch(nap){
    case "Hétfő":
        console.log("A hét első napja")
        break;
    case "Péntek":
        console.log("A hét utolsó munkanapja")
        break;
    default:
        console.log("Egyéb nap")
}

// ciklusok
// for
for (let index = 1; index <= 10; index++) {
    console.log(`${index}. iteráció`)
}

// while
let index = 0;
while(index < 10){
    console.log(`${index}. iteráció`)
    index++
}

// do
let dowhileindex = 0;
do{
    console.log(`${dowhileindex}. dowhile iteráció`)
    dowhileindex++
}while(dowhileindex <= 10)

// függvények
function osszead(a, b) {
    return a + b
}
console.log(osszead(3, 2))

const szoroz = function(a,b){
    return a*b
}
console.log(szoroz(4,2))

const negyzetreemel = (szam) => szam * szam
// => - return
console.log(negyzetreemel(5))

// scope
let globalis = "Globális"
function scopepelda(){
    let lokalis = "lokális"
    console.log("Globális változó elérése: ", globalis)
    console.log(lokalis)
}

scopepelda()

// callback
function szamolas(a,b, callback){
    console.log("Számolás eredénye: ")
    return callback(a,b)
}

console.log("Összeadás: ",
    szamolas(3,4, (a, b) => a+b)
)

console.log("Szorzás",
    szamolas(3,4, (a,b) => a*b)
)

function szamlalo(){
    let szamlalo = 0
    return function(){
        console.log("Meghívva")
        return ++szamlalo;
    }
}
console.log(szamlalo())
console.log(szamlalo())
console.log(szamlalo())
