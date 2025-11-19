function OsztalyHozzaadas()
{
    let elem = document.getElementById("osztalypelda")
    elem.classList.add("piros")
    //elem.style.color = "red"
    //console.log(elem)
}

function OsztalyTorles(){
    let elem = document.getElementById("osztalypelda")
    elem.classList.remove("piros")
}

function OsztalyCsere()
{
    let elem = document.getElementById("osztalypelda")

    if (elem.classList.contains("piros"))
    {
        elem.classList.replace("piros", "kek")
    }
    else
    {
        elem.classList.add("kek")
    }
}

function OsszesKijeloles()
{
    let elem = document.getElementsByClassName("kijelolheto")
    for (let index = 0; index < elem.length; index++) {
        elem[index].style.backroundColor = "yellow"
        elem[index].style.fontWeight = "bold"
    }
}

let jelenlegiElem = null
function DOMNavigalas()
{
    let szuloElem = document.getElementById("szulo")
    if(!jelenlegiElem)
    {
        jelenlegiElem = szuloElem.firstElementChild
    }
    else
    {
        jelenlegiElem = jelenlegiElem.NextElementSibling
        if(!jelenlegiElem)
        {
            jelenlegiElem = szuloElem.firstElementChild
        }
    }
    
    let gyerekek = szuloElem.children
    for (let index = 0; index < gyerekek.length; index++) {
        gyerekek[index].style.backroundColor = "white"
        
    }
    jelenlegiElem.style.color = "yellow"
}