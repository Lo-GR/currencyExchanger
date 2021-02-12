
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
    let promise = CurrencyExchanger.exchanger();
    promise.then(function(response){
      const body = JSON.parse(response);
      let currencyNameArray = [];
      let currencyRateArray = [];
      for (const [key, value] of Object.entries(body.conversion_rates)){
        currencyNameArray.push(key);
        currencyRateArray.push(value);
      }
    }, function(error){
      console.log(error);
    })
  })
});