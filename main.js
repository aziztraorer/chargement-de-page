const bg =document.querySelector('.bg')
const charge=document.querySelector('.charge')

let compteur=0
let nombre=setInterval(chargement,30)

function chargement(){
    compteur++
    if (compteur>100) {
        clearInterval(nombre)
        
    }
    charge.textContent=`${compteur}%`
    charge.style.opacity=scale(compteur,0,100,1,0)
    bg.style.filter=`blur(${scale(compteur,0,100,30,0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}