import axios from "axios";

const api = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/1eeccfb59edc61c8c944107e",
});

//to get currency exchange rate

export const currencyConverter = async (fromCurrency, toCurrency, amount) => {
  const res = await api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
  console.log(res, "data.conversion_rate");
  return res.data; //return the conversion rate
};
