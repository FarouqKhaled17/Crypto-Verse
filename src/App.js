import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout, Space } from 'antd';
import { Navbar, HomePage, Exchanges, CryptoDetails, Cryptocurrencies, News } from './Components';
import Typography from 'antd/es/typography/Typography';
import Link from 'antd/es/typography/Link';

function App() {
    return (
        <div className='App'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/exchanges' element={<Exchanges />} />
                            <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                            <Route path='/crypto/:coinId' element={<CryptoDetails />} />
                            <Route path='/news' element={<News />} />
                        </Routes>
                    </div>
                </Layout>
                <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse <br />
                        All rights reserved.
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    );
}

export default App;
