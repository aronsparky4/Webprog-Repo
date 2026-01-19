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
    elem.classList.remove("kek")
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

let gombszam = 1
function UjGombHozzaadas()
{
    let UjGomb = document.createElement("button")
    UjGomb.innerHTML = gombszam + ". gomb"
    UjGomb.onclick = function ()
    {
        this.remove()
        gombszam--
    }
    document.getElementById("DinamikusTarolo").appendChild(UjGomb)
    gombszam++
}

document.addEventListener("DOMContentLoaded", 
    function(){
        let input = document.getElementById("esemenyInput")
        let doboz = document.getElementById("esemenyBox")

        input.addEventListener("keyup", function(e){
            console.log("Leütött billentyű", e.key)
        })

        doboz.addEventListener("mouseenter", function(){
            this.style.backroundColor = "lightgreen";
        })

        doboz.addEventListener("mouseleave", function(){
            this.style.backroundColor = "purple";
        })

        doboz.addEventListener("click", function(){
            this.innerHTML = "kattintottál!"
        })
    }
)