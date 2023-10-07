const CC = require('currency-converter-lt');
let CurrencyConverter = new CC();

try {
  CurrencyConverter.amount(100).from("USD").to("BYN");

  CurrencyConverter.convert().then((response) => {
    console.log("Конвертация " + CurrencyConverter.currencyAmount + " " + CurrencyConverter.currencyFrom + " в " + response.toFixed(0) + " " + CurrencyConverter.currencyTo);
  }).catch((error) => {
    console.log("Ошибка при конвертации:", error);
  });
} catch (error) {
  console.log("Ошибка при настройке конвертера:", error);
}
