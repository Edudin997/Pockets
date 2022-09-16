import { useSelector } from 'react-redux';

import { Minus, Plus } from 'src/assets/icons';
import { Box, Text } from 'src/components';
import { classnames } from 'src/utils';

import styles from './TransactionsSection.module.scss';

const TransactionsSection = () => {
  const totalExpenses = useSelector((state) => state.transactions.totalExpenses);
  const totalIncome = useSelector((state) => state.transactions.totalIncome);
  const numberFormat = (sum) => {
    const correctSum = Number(sum).toFixed(0);
    const number = Number(correctSum).toLocaleString();
    return number;
  };

  return (
    <div className={styles.wrapper}>
      <Box mb={16} pl={16} pr={16}>
        <Text size="xs" color="default">
          Общее
        </Text>
      </Box>
      <Box mb={8}>
        <div className={classnames([styles.tableItem, styles.tableItem__active])}>
          <Text size="s">Доход</Text>
          <div className={styles.sum}>
            <Plus width={14} height={14} fill="#5D5FEF" />
            <Text size="xl" weight={500} color="contrast">
              {!!Number(totalIncome) ? numberFormat(totalIncome) : '0'}
            </Text>
          </div>
        </div>
      </Box>
      <div className={classnames([styles.tableItem])}>
        <Text size="s">Расход</Text>
        <div className={styles.sum}>
          <Minus width={14} fill="#5D5FEF" />
          <Text size="xl" weight={500} color="contrast">
            {!!Number(totalExpenses) ? numberFormat(totalExpenses) : '0'}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default TransactionsSection;
