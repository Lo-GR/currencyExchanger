import CurrencyExchanger from '../src/exchanger.js';

describe('CurrencyExchanger', () => {
  
  test('should return an inputted value converted into a currency value entered, parsed to 2 decimals', () => {
    let inputtedValue = 1.25;
    let comparedValue = 2;
    expect(CurrencyExchanger.currencyCalculation(inputtedValue, comparedValue)).toEqual((2.50).toFixed(2));
  });
  test('should return an array of in of currency name and currency conversion rate', ()=>{
    let currencyNames = [ "USD", "AED", "AFN", "ALL",]
    let currencyRates = [ 1, 3.6725, 77.2205, 102.0185]
    expect(CurrencyExchanger.currencyTarget("AED", currencyNames, currencyRates));
  })
});