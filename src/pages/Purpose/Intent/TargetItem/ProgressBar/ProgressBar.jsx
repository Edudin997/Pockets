import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const ProgressBar = ({ sumStart, sumEnd, bgColor }) => {
  const data = {
    datasets: [
      {
        borderWidth: 0,
        cutout: 20.5,
        data: [sumStart, sumEnd],
        backgroundColor: bgColor,
      },
    ],
  };

  const option = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  return <Chart width={56} height={56} type="doughnut" data={data} options={option} />;
};

export default ProgressBar;
