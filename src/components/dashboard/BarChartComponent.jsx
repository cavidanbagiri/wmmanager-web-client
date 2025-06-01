// DoughnutChartComponent.

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { BarChart } from 'react-chartjs-2';

import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

// Register required components
// Chart.register(ArcElement, Tooltip, Legend);
Chart.register(CategoryScale);

const BarChartComponent = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Fruit Distribution',
        data: [30, 50, 20, 10, 40, 50, 20, 10, 40, 50, 20, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',  
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',  
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
    <div style={{  height: '500px', margin: 'auto' }} className='bg-white rounded-lg w-[57%] 2xl:w-[50%] '>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChartComponent;