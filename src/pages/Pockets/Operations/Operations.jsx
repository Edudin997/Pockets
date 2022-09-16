import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Box, Text } from 'src/components';
import { getTransactions } from 'src/store/slices/transactionsActions';

import Exchange from './Exchange';
import styles from './Operations.module.scss';
import Table from './Table';
import TableBottomAddTransactionButton from './Table/TableBottomAddTransactionButton';

const Operations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Box mb={18}>
        <div className={styles.header}>
          <Text as="h3" color="contrast">
            Операции
          </Text>
          <Exchange />
        </div>
      </Box>
      <Table />
      <TableBottomAddTransactionButton />
    </div>
  );
};

export default Operations;
