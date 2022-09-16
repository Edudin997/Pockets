import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { EmptyList, Text } from 'src/components';

import styles from './DiagramSection.module.scss';
import getChartData from './getChartData';

const DiagramSection = () => {
  const categories = useSelector((state) => state.categories.list);
  const backgroundCircle = ['Orange', 'Purple', 'MediumSeaGreen', 'SteelBlue'];
  const chartData = getChartData(categories);

  const data = {
    datasets: [
      {
        layout: {
          padding: 150,
        },
        borderWidth: 0,
        data: chartData.categorySum,
        backgroundColor: backgroundCircle,
        tooltip: {
          callbacks: {
            label: (context) => {
              return '  ' + context.label + ' ' + context.formattedValue + ' % ';
            },
          },
        },
      },
    ],
    labels: chartData.categoryName,
  };

  const option = {
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={styles.wrapper}>
      {!!chartData.categorySum.length ? (
        <>
          <div className={styles.circle}>
            <Chart type="pie" data={data} options={option} />
          </div>
          <div className={styles.categoryList}>
            {chartData.categoryName.map((name, index) => (
              <div key={index} className={styles.category}>
                <i style={{ backgroundColor: backgroundCircle[index] }}></i>
                <Text size="xs" color="default">
                  {name}
                </Text>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.empty}>
          <EmptyList height={120} size="xs" text="Нет данных" />
        </div>
      )}
    </div>
  );
};

export default DiagramSection;
