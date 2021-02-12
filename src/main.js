
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchanger from "./exchanger.js"

$(document).ready(function(){
  $("form#exchangeCalculator").submit(function(event){
    event.preventDefault();
    let promise = CurrencyExchanger.exchanger();
    promise.then(function(response){
      const body = JSON.parse(response);
      console.log(body);
    }, function(error){
      console.log(error);
    })
  })
});