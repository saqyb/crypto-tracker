import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/CryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const { Title } = Typography;
// const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coins",
//   headers: {
//     "X-RapidAPI-Key": "10483993dfmshd89d1f51ab6d6f3p177132jsn50a589d43255",
//     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  // console.log("🚀 ~ file: Homepage.jsx ~ line 33 ~ Homepage ~ data");
  // console.log(data);
  if (isFetching) return console.log("DATA NOT FOUND");
  else
    return (
      <>
        <div className='home-heading-container'>
          <p className='text-3xl font-semibold home-title'>
            Top 10 Cryptocurrencies in the World
          </p>
          <p className='text-xl show-more'>
            <Link to='/cryptocurrencies'>Show More</Link>
          </p>
        </div>
        <Cryptocurrencies simplified />
        <div className='home-heading-container'>
          <p className='text-3xl font-semibold home-title'>
            Latest Crypto News
          </p>
          <p className='text-xl show-more'>
            <Link to='/news'>Show More</Link>
          </p>
        </div>
        <News simplified />
      </>
    );
};

export default Homepage;
