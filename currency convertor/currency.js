// countries api : https://www.restcountries.com/v3.1/all?fields=currencies
// currency api : https://api.fxratesapi.com/latest

const axios = require("axios")

// for getting exchange rate
const getExchangeRate = async (fromCurrency,toCurrency) =>{
   const res = await axios.get("https://api.fxratesapi.com/latest")
         const rate = res.data.rates
         const usDollar = 1/rate[fromCurrency]
         const exchangeRate = usDollar*rate[toCurrency]
         return exchangeRate;
       
}
getExchangeRate("EUR","RON");

// for getting countries currency
const getCountries = async (toCurrency) =>{
      const res = await axios.get(`https://www.restcountries.com/v3.1/all?fields=currencies`)
      res.data.map(country =>console.log(country.name))
}
getCountries("USD");