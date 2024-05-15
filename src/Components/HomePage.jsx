import { Col, Row, Statistic } from 'antd'
import Typography from 'antd/es/typography/Typography'
import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi.js'
import millify from 'millify'
import { Link } from 'react-router-dom'
import Cryptocurrencies from './Cryptocurrencies.jsx'
import News from './News.jsx'
const { Title } = Typography
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10)
  const globalStats=data?.data?.stats
  if (isFetching) return 'Loading...'
  console.log(data)
  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>
      <Title level={3} className='home-subtitle'>
        Track all the latest crypto trends
      </Title>
      <Row>
        <Col span={12}><Statistic title="Total CryptoCurrencies" value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchange" value={millify(globalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24 Volume" value={millify(globalStats.total24hVolume)}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={3} className='home-title'>Top 10 Cryptos In The World</Title>
        <Title level={5} className='show-more'><Link to='/cryptocurrencies'>Show More...</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className='home-heading-container'>
        <Title level={3} className='home-title'>Latest News</Title>
        <Title level={3} className='show-more'><Link to='/news'></Link></Title>
      </div>
      <News simplified/>
    </>
  )
}

export default HomePage
