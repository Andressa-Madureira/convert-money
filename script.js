const button = document.querySelector("button")

function cliquei(){
    const inputCurrenyValue = document.querySelector(".input-currency").value

    const dolarToday = 6.01

    const convertedValue = inputCurrenyValue / dolarToday

    console.log(convertedValue)

    const currencyValueToConvert =document.querySelector(".value-to-converter")

    const currencyValueToConverted = document.querySelector(".value-to-converted")

    currencyValueToConvert.innerHTML = inputCurrenyValue

    currencyValueToConverted.innerHTML = convertedValue.toFixed(2)
    
}