// DoughnutChartComponent.jsx
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChartComponent = () => {
  const data = {
    labels: ['Apples', 'Bananas', 'Oranges'],
    datasets: [
      {
        label: 'Fruit Distribution',
        data: [30, 50, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',   // Apples - pink
          'rgba(255, 206, 86, 0.6)',   // Bananas - yellow
          'rgba(54, 162, 235, 0.6)',   // Oranges - blue
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: 'Fruit Distribution Chart',
      },
    },
  };

  return (
    <div style={{ width: '500px', height: '500px', margin: 'auto' }} className='bg-white rounded-lg'>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChartComponent;