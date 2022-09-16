import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { LongArrow } from 'src/assets/icons';
import { Text } from 'src/components';
import { getTransactions, getTransactionsSorted } from 'src/store/slices/transactionsActions';
import { classnames } from 'src/utils';

import styles from './TableHeader.module.scss';

const TableHeader = ({ headerGroups }) => {
  const dispatch = useDispatch();

  const [isSorted, setIsSorted] = useState(0);
  const [isCategory, setIsCategory] = useState('');

  const sortTable = (category) => {
    if (isSorted === 0) {
      const date = '?sort_by=' + category;
      dispatch(getTransactionsSorted(date));
      setIsSorted(1);
      setIsCategory(category);
    } else if (isSorted === 1 && isCategory === category) {
      const date = '?sort_by=-' + category;
      setIsSorted(2);
      dispatch(getTransactionsSorted(date));
    } else if (isSorted !== 0 && isCategory !== category) {
      const date = '?sort_by=' + category;
      dispatch(getTransactionsSorted(date));
      setIsSorted(1);
      setIsCategory(category);
    } else {
      dispatch(getTransactions());
      setIsSorted(0);
      setIsCategory('');
    }
  };

  return (
    <thead className={styles.header}>
      {headerGroups.map((headerGroup) => {
        const { className: groupClassName, ...restGroupProps } = headerGroup.getHeaderGroupProps();
        return (
          <tr {...restGroupProps} className={classnames([groupClassName, styles.row])}>
            {headerGroup.headers.map((column) => {
              const { ...restColumnProps } = column.getHeaderProps();
              return (
                <th {...restColumnProps} className={styles.headerItem} onClick={() => sortTable(column.sort)}>
                  <div className={styles.arrow}>
                    {isSorted && isCategory === column.sort ? (
                      isSorted === 1 ? (
                        <div className={styles.increase}>
                          <LongArrow width={7.5} height={12.5} />
                        </div>
                      ) : (
                        <div className={styles.descending}>
                          <LongArrow width={7.5} height={12.5} />
                        </div>
                      )
                    ) : (
                      ''
                    )}
                    <div className={styles.headerItem}>
                      <Text
                        color={isCategory === column.sort ? 'brand' : 'default'}
                        weight={400}
                        size="s"
                        align="center"
                      >
                        {column.render('Header')}
                      </Text>
                    </div>
                  </div>
                </th>
              );
            })}
          </tr>
        );
      })}
    </thead>
  );
};

export default TableHeader;
