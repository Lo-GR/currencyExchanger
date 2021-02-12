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
    for (let index = 0; index < currencyNames.length; index ++){
      if (comparedName === currencyNames[index]){
        return [currencyNames[index], currencyRates[index]];
      }
    }
    // Due to the "if" statement in the UI, this should never be seen.
    // I included it in case there is a major error since static methods must return something.
    return "error! Issue with currencyTarget function"
  }
}