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