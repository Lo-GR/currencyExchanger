export default class CurrencyExchanger{
  static exchanger (){
    return new Promise(function (resolve, reject){
      let request = new XMLHttpRequest();
      const api = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.onload = function(){
        if (this.status === 200){
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", api, true);
      request.send();
    });
  }
  static currencyCalculation(inputtedValue, comparedValue){
    let returnedNumber = inputtedValue * comparedValue;
    return parseFloat(returnedNumber).toFixed(2);
  }
  static currencyTarget(comparedName, currencyNames, currencyRates){
    
  }
}