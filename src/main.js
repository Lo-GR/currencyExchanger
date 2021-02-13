
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchanger from "./exchanger.js"

$(document).ready(function(){
  $("form#exchangeCalculator").submit(function(event){
    $(".results").html('<div class="spinner-border text-success" role="status"><span class="sr-only">Loading...</span></div>')
    event.preventDefault();
    let enteredValue = parseFloat($(".numInput").val());
    let currencyName = $(".currencyInput").val();
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
        $(".results").html(`Rate Exchange is ${CurrencyExchanger.currencyCalculation(enteredValue, chosenNameRate[1])} ${chosenNameRate[0]}`)
      } else {
        $(".results").html("That's not a currency, silly");
      }
    }, function(error){
      $(".results").html("An error was received from the Exchange Rate API. Please try again another time!")
      console.log(error);
      //this is put in a console log because I wasn't able to verify how the error response would look like from this api.
      //This is because this api returns status 200 OK for errors
    })
  })
});