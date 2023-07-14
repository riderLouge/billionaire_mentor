import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import axios from 'axios';
import HighchartsBoost from 'highcharts/modules/boost';

HighchartsBoost(Highcharts);

const LastWeekData = () => {
  const [data, setData] = useState<{
    x: number;
    open: number;
    high: number;
    low: number;
    close: number | null;
  }[]>([]);

  const apiKey = 'E0N99QRD32XTLS6J';
  const symbol = 'AMZN';
  const startDate = '2023-06-06';
  const endDate = '2023-06-09';
  const volumeThreshold = 50000;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let formattedData: {
          x: number;
          open: number;
          high: number;
          low: number;
          close: number | null;
        }[] = [];

        let currentDate = moment(startDate);

        while (currentDate.isSameOrBefore(endDate)) {
          const response = await axios.get(
            `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=15min&apikey=${apiKey}`
          );
          const seriesData = response.data['Time Series (15min)'];

          if (seriesData) {
            const filteredData = Object.keys(seriesData).filter((timestamp) => {
              const volume = parseFloat(seriesData[timestamp]['5. volume']);
              return volume >= volumeThreshold;
            });

            const chunkFormattedData = filteredData.map((timestamp) => {
              const volume = parseFloat(seriesData[timestamp]['5. volume']);
              const close = parseFloat(seriesData[timestamp]['4. close']);

              return {
                x: moment(timestamp).valueOf(),
                open: parseFloat(seriesData[timestamp]['1. open']),
                high: parseFloat(seriesData[timestamp]['2. high']),
                low: parseFloat(seriesData[timestamp]['3. low']),
                close: volume >= volumeThreshold ? close : null,
              };
            });

            formattedData = formattedData.concat(chunkFormattedData);
          }

          currentDate = currentDate.add(1, 'day');
        }

        setData(formattedData);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    rangeSelector: {
      selected: 1,
    },
    accessibility: {
      enabled: false,
    },
    title: {
      text: 'Candlestick Chart',
    },
    series: [
      {
        type: 'candlestick',
        name: 'Candlestick',
        data: data,
      },
    ],
  };
  return (
    <div>
      <h1>Stock Data</h1>
      {data.length > 0 ? (
        <HighchartsReact highcharts={Highcharts} constructorType="stockChart" options={options} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LastWeekData;
