import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';

import { EmptyList } from 'src/components';

import styles from './Table.module.scss';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import { columns, processServerDataIntoTableData } from './utils';

const Table = () => {
  const transactions = useSelector((state) => state.transactions.list);
  const data = useMemo(() => processServerDataIntoTableData(transactions), [transactions]);
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className={styles.wrapper}>
      <table {...getTableProps()} className={styles.table}>
        {!!transactions.length && (
          <>
            <TableHeader headerGroups={headerGroups} />
            <TableBody rows={rows} getTableBodyProps={getTableBodyProps} prepareRow={prepareRow} />
          </>
        )}
      </table>
      {!transactions.length && (
        <>
          <EmptyList text="У вас нет ни одной операции" height={305} />
        </>
      )}
    </div>
  );
};

export default Table;
