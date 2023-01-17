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
          {/* <Layout> */}
          <div className='routes'>
            <AppRoutes />
          </div>
          {/* </Layout> */}
          <div className='footer'>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
