import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setData(data))
    }, [])
    return (
        <div className='chart-section'>
            <div className='first-chart'>
            <h1>Month Wise Sell</h1>
            <LineChart width={400} height={300} data={data}>
                <Line type={'monotone'} dataKey={'sell'} ></Line>
                <Line type={'monotone'} dataKey={'month'}></Line>
                <XAxis dataKey="name"></XAxis>
                <Tooltip></Tooltip>
                <YAxis/>
            </LineChart>
            </div>

            <div className='second-chart'>
                <h1>Investment vs. Revenue</h1>
            <AreaChart width={400}  height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type={'monotone'} dataKey={'revenue'}></Area>
            <Area type={'monotone'} dataKey={'investment'}></Area>
            </AreaChart>
            </div>
            
        </div>
    );
};

export default Dashboard;