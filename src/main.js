
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchanger from "./exchanger.js";

$(document).ready(function(){
  $("form#exchangeCalculator").submit(function(event){
    $(".resultsCont").show();
    $(".results").html('<div class="spinner-border text-success" role="status"><span class="sr-only">Loading...</span></div>Loading.. if this loads longer than 1 minute, an error has occurred.</p>');
    event.preventDefault();
    let enteredValue = parseFloat($(".numInput").val());
    let currencyName = ($(".currencyInput").val()).toUpperCase();
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
        $(".results").html(`<h1 class="display-4">You can exchange ${enteredValue} USD for ${CurrencyExchanger.currencyCalculation(enteredValue, chosenNameRate[1])} ${chosenNameRate[0]}</h1><p class="lead">This exchange rate is based on an estimate of today only. Actual returns may very.</p>`);
      } else {
        $(".results").html(`<p class="lead">No known Currency with a Code of ${currencyName}</p>`);
      }
    }, function(error){
      let errorJSON = JSON.parse(error);
      $(".results").html(`An error was received from the Exchange Rate API. Please try again another time! Error returned: ${errorJSON["error-type"]}`);
    });
  });
});