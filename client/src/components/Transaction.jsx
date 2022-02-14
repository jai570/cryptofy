import React from "react";
import { useTransactionProvider } from "../context/TransactionContext";
import useFetch from "../hooks/usFetch";

import dummyData from "../utils/dummyData";
const TransactionsCard = ({
  url,
  addressTo,
  addressFrom,
  keyword,
  message,
  amount,
  timestamp,
}) => {
  const gifUrl = useFetch({ keyword });
  return (
    <div
      className="flex flex-1 m-4 bd-[#181918]
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      flex-col
      p-3
      rounded-md hover:shadow-2xl
    "
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className=" w-full mb-6 p-2">
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white">
              {" "}
              From: {addressFrom.slice(0, 5)}...
              {addressFrom.slice(addressFrom.length - 4)}{" "}
            </p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white">
              To: {addressTo.slice(0, 5)}...
              {addressFrom.slice(addressTo.length - 4)}
            </p>
          </a>
          <p className="text-white text-base"> Amount: {amount} </p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="gif"
          className="w-full h-64 2x:h-96 rounded-md shadow-lg object-cover"
        />
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transaction = () => {
  const { currentAccount, transaction } = useTransactionProvider();
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <>
            <h3 className="text-white text-3xl text-center my-2">
              Latest Transactions
            </h3>
            <div className="flex flex-wrap justify-center items-center mt-10">
              {transaction.reverse().map((transaction, i) => (
                <TransactionsCard key={i} {...transaction} />
              ))}
            </div>
          </>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}
      </div>
    </div>
  );
};

export default Transaction;
