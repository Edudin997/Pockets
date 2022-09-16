import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Box, Text } from 'src/components';
import { getTargetsAnalytics } from 'src/store/slices/targetsActions';

import styles from './Analytics.module.scss';
import Transaction from './Transaction';

const Analytics = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTargetsAnalytics());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Box mb={16}>
        <div className={styles.header}>
          <Text as="h3" color="contrast">
            Аналитика
          </Text>
        </div>
      </Box>
      <Transaction />
    </div>
  );
};

export default Analytics;
