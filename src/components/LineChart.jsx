import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import { useEffect } from "react";

ChartJS.register(...registerables);
const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimeStamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.unshift(coinHistory.data.history[i].price);
    coinTimeStamp.unshift(
      new Date(
        coinHistory.data.history[i].timestamp * 1000
      ).toLocaleDateString()
    );
  }
  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  // useEffect(() => {
  //   if (data != null) data.destroy();
  // }, []);

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <Row className='chart-header'>
        <Title level={2} className='chart-title'>
          {coinName} Price Chart
        </Title>
        <Col className='price-container'>
          <Title level={5} className='price-change'>
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className='current-price'>
            current {coinName} Price: ${currentPrice}
          </Title>
        </Col>
      </Row>

      <Line data={data} options={options}></Line>
    </>
  );
};

export default LineChart;
