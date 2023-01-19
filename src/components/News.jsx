import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/CryptoNewsApi";
import { useGetCryptosQuery } from "../services/CryptoApi";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);

  const count = simplified ? 6 : 12;

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count,
  });

  if (!cryptoNews?.value) return "Loading... Please Wait";
  else
    return (
      <>
        {!simplified && (
          <Col span={24}>
            <Title
              level={2}
              className='news-title'
              style={{
                display: "flex",
                "justify-content": "left",
                "align-items": "left",
                color: "white",
              }}
            >
              News of: {newsCategory}
            </Title>
            <Select
              showSearch
              className='select-news'
              placeholder='Select a Crypto'
              optionFilterProp='children'
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value='Cryptocurency'>Cryptocurrency</Option>
              {data?.data?.coins?.map((currency) => (
                <Option value={currency.name}>{currency.name}</Option>
              ))}
            </Select>
          </Col>
        )}

        <div class='container mt-4 mx-auto w-full'>
          <div class='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
            {cryptoNews.value.map((news, i) => (
              <div
                key={news.url}
                class='card m-2 cursor-pointer border border-gray-700 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200'
              >
                <a href={news.url} target='_blank' rel='noreferrer'>
                  <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                    <a href='#'>
                      <img
                        className='rounded-t-lg w-96 h-48'
                        src={news?.image?.thumbnail?.contentUrl || demoImage}
                        alt=''
                      />
                    </a>
                    <div className='p-5'>
                      <a href='#'>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                          {news.name}
                        </h5>
                      </a>
                      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                        {news.description.length > 100
                          ? `${news.description.substring(0, 100)}...`
                          : `${news.description}`}
                      </p>
                      <a
                        href={news.url}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                      >
                        Read more
                      </a>
                      <div className='provider-container'>
                        <div>
                          <Avatar
                            src={
                              news.provider[0]?.image?.thumbnail?.contentUrl ||
                              demoImage
                            }
                            alt=''
                          />
                          <Text className='provider-name'>
                            {news.provider[0]?.name}
                          </Text>
                        </div>
                        <Text>
                          {moment(news.datePublished).startOf("ss").fromNow()}
                        </Text>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </>
    );
};

export default News;
