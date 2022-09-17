import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/CryptoApi";
import { useState } from "react";
import { useEffect } from "react";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  console.log(cryptosList);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <>Loading... Please Wait</>;
  else
    return (
      <>
        {!simplified && (
          <div className='search-crypto'>
            <Input
              placeholder='Search Crypto Currency'
              onChange={(e) => setSearchTerm(e.target.value)}
              type='text'
            />
          </div>
        )}

        <div class='container mt-4 mx-auto'>
          <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
            {cryptos?.map((currency) => (
              <Link to={`/crypto/${currency.uuid}`}>
                <div
                  key={currency.uuid}
                  class='card bg-[#293143] hover:bg-[#171B26] hover:text-slate-500 m-2 cursor-pointer border border-gray-700 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200'
                >
                  <div class='m-3'>
                    <h2 class='text-white  text-lg mb-2'>
                      {`${currency.rank}. ${currency.name}`}
                      <span class='text-sm text-teal-800 font-mono  inline rounded-full px-2 align-top float-right animate-pulse'>
                        <img
                          className='crypto-image w-9'
                          src={currency.iconUrl}
                        />
                      </span>
                    </h2>
                    <p class='text-white font-light font-mono text-sm  transition-all duration-200'>
                      Price: ${millify(currency.price)}
                      <br />
                      Market Cap: ${millify(currency.marketCap)}
                      <br />
                      Daily Change: {millify(currency.change)}%
                    </p>
                  </div>
                </div>
              </Link>
              // </Col>
            ))}
          </div>
        </div>
      </>
    );
};

export default Cryptocurrencies;
