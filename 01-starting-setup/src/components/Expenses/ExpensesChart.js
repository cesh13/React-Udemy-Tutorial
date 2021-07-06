import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = props =>{
    const chartDatPoints = [
        {lable:'Jan', value:0},
        {lable:'Feb', value:0},
        {lable:'Mar', value:0},
        {lable:'Jun', value:0},
        {lable:'Jul', value:0},
        {lable:'Aug', value:0},
        {lable:'Sep', value:0},
        {lable:'Oct', value:0},
        {lable:'Nov', value:0},
        {lable:'Dec', value:0}
    ];

    return <Chart />
};

export default ExpensesChart;