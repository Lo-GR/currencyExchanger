import CurrencyExchanger from '../src/exchanger.js';

describe('CurrencyExchanger.currencyCalculation', () => {
  
  test('should return an inputted value converted into a currency value entered, parsed to 2 decimals', () => {
    let inputtedValue = 1.25;
    let comparedValue = 2;
    expect(CurrencyExchanger.currencyCalculation(inputtedValue, comparedValue)).toEqual(2.50);
  });
});