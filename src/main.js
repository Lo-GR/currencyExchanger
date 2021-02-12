
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchanger from "./exchanger.js"

$(document).ready(function(){
  $("form#exchangeCalculator").submit(function(event){
    event.preventDefault();
    let value = parseFloat($(".numInput").val());
    // let currencyName = $("#currency").vall();
    let currencyName = "GEL";
    let promise = CurrencyExchanger.exchanger();
    promise.then(function(response){
      const body = JSON.parse(response);
      let conversionNameArray = [];
      let conversionRateArray = [];
      for (const [key, value] of Object.entries(body.conversion_rates)){
        conversionNameArray.push(key);
        conversionRateArray.push(value);
      }
      if (conversionNameArray.includes(currencyName)){
        let chosenNameRate = CurrencyExchanger.currencyTarget(currencyName, conversionNameArray, conversionRateArray);
        console.log(chosenNameRate);
      } else {
        $(".results").html("That's not a currency, silly");
      }
    }, function(error){
      console.log(error);
    })
  })
});