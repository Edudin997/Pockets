import { useSelector } from 'react-redux';

import { Box, Text } from 'src/components';

import Goal from './Goal';
import GoalSepartor from './GoalSepartor';
import styles from './Transaction.module.scss';

const Transaction = () => {
  const analytics = useSelector((state) => state.targets.analytics);
  const numberFormat = (sum) => {
    const correctSum = Number(sum).toFixed(0);
    const number = Number(correctSum).toLocaleString();
    return number;
  };
  const numberPrecent = (sum) => {
    const number = analytics.open_target_total * (sum / 100);
    return number.toFixed(0);
  };
  return (
    <div className={styles.wrapper}>
      <Box mb={8}>
        <div className={styles.tableItem}>
          <Text size="s">Цели</Text>
          <Text size="xl" weight={500} color="contrast">
            {analytics?.open_target_count ? String(analytics.open_target_count) : '0'}
          </Text>
        </div>
      </Box>
      <div className={styles.tableItem}>
        <Text size="s">Средств на целях</Text>
        <Text size="xl" weight={500} color="contrast">
          {analytics?.open_target_total ? String(numberFormat(analytics.open_target_total.toFixed(0))) : '0'}
        </Text>
      </div>
      <Box mt={30}>
        <div className={styles.goals}>
          <Goal
            text="Всего доход от %"
            sum={analytics?.all_time_percent ? numberFormat(numberPrecent(analytics.all_time_percent)) : 0}
          />
          <Goal
            text="В этом месяце доход от %"
            sum={analytics?.current_month_percent ? numberFormat(numberPrecent(analytics.current_month_percent)) : 0}
          />
          <Goal
            text="Ближайшая цель (дней)"
            sum={analytics?.nearest_end_target_days ? analytics.nearest_end_target_days : 0}
          />
          <GoalSepartor />
          <Goal
            text="Самая успешная категория"
            sum={analytics?.most_successful_category?.name ? analytics.most_successful_category.name : '-'}
          />
          <Goal
            text="Самая популярная категория"
            sum={analytics?.most_popular_category?.name ? analytics?.most_popular_category?.name : '-'}
          />
        </div>
      </Box>
    </div>
  );
};

export default Transaction;
