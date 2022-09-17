import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { HomeOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";
import { MoneyCollectOutlined, BulbOutlined } from "@ant-design/icons";
import icon from "../images/crypto.png";

import { useState } from "react";
import { Select, Row, Col, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/CryptoNewsApi";
import { useGetCryptosQuery } from "../services/CryptoApi";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
const { Text, Title } = Typography;
const { Option } = Select;

const openLink = (value) => {
  <Link to={`/crypto/${value.uuid}`} />;
};

const Navbar = () => {
  const navigate = useNavigate();
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);

  return (
    <>
      <div className='nav-container'>
        <div className='logo-container'>
          <Avatar src={icon} size='large'></Avatar>
          <Typography.Title level={4} className='logo'>
            <Link to='/'>CryptoTracker</Link>
          </Typography.Title>
          {/* <Button className="menu-control-container"></Button> */}
        </div>
        <div className='navbar-links'>
          <Link to={"/"}>Home</Link>
          <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
          <Link to={"/exchanges"}>Exchanges</Link>
          <Link to={"/news"}>News</Link>
        </div>

        <div className='navbar-search'>
          <select
            style={{ backgroundColor: "#5E6056" }}
            showSearch
            className='select-navbar'
            placeholder='Select a Crypto'
            optionFilterProp='children'
            onChange={(value) => {
              if (value != "Cryptocurency") navigate(`/crypto/${value}`);
            }}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <option value='Cryptocurency'>Cryptocurrency</option>
            {data?.data?.coins?.map((currency) => (
              <option value={currency.uuid}>{currency.name}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Navbar;
