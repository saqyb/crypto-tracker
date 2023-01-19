import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "./App.css";
import "./custom.css";
import Marquee from "react-fast-marquee";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
  GlobalStat,
} from "./components";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Homepage />}></Route>
        <Route exact path='/exchanges' element={<Exchanges />}></Route>
        <Route
          exact
          path='/cryptocurrencies'
          element={<Cryptocurrencies />}
        ></Route>
        <Route exact path='/crypto/:coinId' element={<CryptoDetails />}></Route>
        <Route exact path='/news' element={<News />}></Route>
      </Routes>
    </>
  );
};

function App() {
  return (
    <>
      <div className='app'>
        <Marquee
          pauseOnHover={true}
          style={{
            position: "fixed",
            padding: "0",
            margin: "0",
            "z-index": "100",
          }}
          gradient={false}
          speed={50}
        >
          <GlobalStat />
          &c;
        </Marquee>
        <div className='navbar'>
          <Navbar></Navbar>
        </div>
        <div className='main'>
          <div className='routes'>
            <AppRoutes />
          </div>
          <footer className='shadow bottom-0 left-0 z-10 p-2 flex justify-center items-center w-full fixed'>
            <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
              Coded by{" "}
              <a
                target={"blank"}
                className='text-gray-500'
                href='https://github.com/saqyb'
              >
                Saqib
              </a>
              {/* &#10085; &#10084; &hearts; ❤️️ */}
            </span>
          </footer>
          {/* <div className='footer'>
            <Typography.Title
              level={5}
              style={{ color: "#0D1015", textAlign: "center" }}
            >
              CryptoTracker <br />
              All Rights Reserved
            </Typography.Title>
            <Space>
              <Link to='/'>Home</Link>
              <Link to='/exchanges'>Exchanges</Link>
              <Link to='/news'>News</Link>
            </Space>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
