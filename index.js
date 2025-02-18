/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    const num = document.getElementById("number").value
    calcLength(num)
    calcVolume(num)
    calcMass(num)
})

function calcLength(n){
    const element = document.getElementById("length-unit")
    const meter = (n * 3.281).toFixed(3)
    const feet = (n / 3.281).toFixed(3)
    
    element.innerHTML = `${n} meters = ${meter} feet | ${n} feet = ${feet} meters`
}

function calcVolume(n){
    const element = document.getElementById("volume-unit")
    const liter = (n * 0.264).toFixed(3)
    const gallon = (n / 0.264).toFixed(3)
    
    element.innerHTML = `${n} liters = ${liter} gallon | ${n} gallon = ${gallon} liters`
}

function calcMass(n){
    const element = document.getElementById("mass-unit")
    const kg = (n * 2.204).toFixed(3)
    const pound = (n / 2.204).toFixed(3)
    
    element.innerHTML = `${n} kilos = ${kg} pounds | ${n} pounds = ${pound} kilos`
}

