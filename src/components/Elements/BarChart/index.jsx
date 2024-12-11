/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const chartSetting = {
   
    width: 600,
    height: 300,
    
};

export default function BarsDataset(props) {
    const { desc } = props;

    return (
        <BarChart
            dataset={desc.data}
            xAxis={[{ scaleType: 'band', dataKey: desc.dataKey }]}
            series={desc.series}
            {...chartSetting}
        />
    );
}