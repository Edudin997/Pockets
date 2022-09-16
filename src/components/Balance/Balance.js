import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Text } from 'src/components';
import { getBalance } from 'src/store/slices/transactionsSlice';

import styles from './Balance.module.scss';

const Balance = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBalance());
  }, [dispatch]);

  const totalBalance = useSelector((state) => state.transactions.totalBalance);
  const correctBalance = Number(totalBalance).toFixed(0);
  const number = Number(correctBalance).toLocaleString();
  return (
    <div className={styles.wrapper}>
      <Text as="h1" color="contrast">
        {number}
      </Text>
      <Text align="right" size="s" color="default">
        На счету
      </Text>
    </div>
  );
};

export default Balance;
