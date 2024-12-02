const button = document.querySelector("button")
const currencySelect = document.querySelector(".currency-select")


function cliquei() {
    const inputCurrenyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-converter")

    const currencyValueToConverted = document.querySelector(".currency-value")

    const dolarToday = 5.97
    const euroToday = 6.32

    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrenyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrenyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrenyValue)
}

function changeCurrency(){ // toda vez que meu select trocar de valor, ele vai executar essa função
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector('.currency-img')

    if(currencySelect.value == 'dolar'){
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/estados-unidos.png'
    }
    if(currencySelect.value == 'euro'){
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

  
}

cliquei()

currencySelect.addEventListener('change', changeCurrency)

/*   console.log(convertedValue)

   const currencyValueToConvert =document.querySelector(".value-to-converter")

   const currencyValueToConverted = document.querySelector(".value-to-converted")

   currencyValueToConvert.innerHTML = inputCurrenyValue

   currencyValueToConverted.innerHTML = convertedValue.toFixed(2)
   
}

*/