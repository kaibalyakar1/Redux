import React, { useState } from "react";
import { currencyConverter } from "./PostApi";
import { useQuery } from "@tanstack/react-query";
const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["currency"],
    queryFn: () => currencyConverter(fromCurrency, toCurrency, amount),
    enabled: false, //if it is true, it will run the query when the component mounts
    //measn it will fetch the data from 1st render
    //if it is false, it will not run the query when the component mounts
    //it will only run when the button is clicked
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount > 0) {
      refetch(); //to fetch the data from the API
    } else {
      alert("Please enter a valid amount");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Currency Converter
        </h1>

        <hr className="my-4" />
        <form action="">
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full p-2 border border-gray-300 rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="flex gap-4 my-4">
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {["USD", "EUR", "INR"].map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>

            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {["USD", "EUR", "INR"].map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Convert
          </button>

          <hr />

          <div className="flex justify-between my-4">
            <div>
              <p className="text-gray-600">Amount</p>
              <p className="text-gray-800">{amount}</p>
            </div>
            <div>
              <p className="text-gray-600">Conversion Rate</p>
              <p className="text-gray-800">{data.conversion_rate}</p>
            </div>
            <div>
              <p className="text-gray-600">Rate</p>
              <p className="text-gray-800">{data.conversion_result}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CurrencyConverter;
