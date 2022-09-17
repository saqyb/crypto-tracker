import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/CryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";

const GlobalStat = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading... Please Wait";
  else
    return (
      <>
        <div className='globalStatContainerBG'>
          <div className='globalStatContainer'>
            <div className='globalStat'>
              <p className='globalStat-title'>Cryptos: </p>
              <p className='globalStat-value'>{globalStats.total}</p>
            </div>
            <div className='globalStat'>
              <p className='globalStat-title'>Exchanges: </p>
              <p className='globalStat-value'>
                {millify(globalStats.totalExchanges)}
              </p>
            </div>
            <div className='globalStat'>
              <p className='globalStat-title'>Market Cap: </p>
              <p className='globalStat-value'>
                $ {millify(globalStats.totalMarketCap)}
              </p>
            </div>
            <div className='globalStat'>
              <p className='globalStat-title'>24h Vol: </p>
              <p className='globalStat-value'>
                $ {millify(globalStats.total24hVolume)}
              </p>
            </div>
            <div className='globalStat'>
              <p className='globalStat-title'>Market: </p>
              <p className='globalStat-value'>
                $ {millify(globalStats.totalMarkets)}
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default GlobalStat;
