import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Text } from 'src/components';
import { getCategoriesPeriod } from 'src/store/slices/categoriesActions';
import { getTotalAmountsPeriod } from 'src/store/slices/transactionsActions';

import CategoriesTable from './CategoriesTable';
import CommonInformation from './CommonInformation';
import Period from './Period';
import styles from './Statistics.module.scss';

const Statistics = () => {
  const getMonth = useSelector((state) => state.period.month);
  const getYear = useSelector((state) => state.period.year);
  const toDay = { year: getYear, month: getMonth };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesPeriod(toDay));
    dispatch(getTotalAmountsPeriod(toDay));
  });

  return (
    <div className={styles.leftColumnWrapper}>
      <Box mb={30}>
        <div className={styles.header}>
          <Text as="h3" color="contrast">
            Статистика
          </Text>
          <Period toDay={toDay} />
        </div>
      </Box>
      <div className={styles.state}>
        <CommonInformation />
        <CategoriesTable toDay={toDay} />
      </div>
    </div>
  );
};

export default Statistics;
