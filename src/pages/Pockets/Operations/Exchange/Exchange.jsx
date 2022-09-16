import { useDispatch, useSelector } from 'react-redux';

import { exportFromServer, importToServer } from 'src/api/requests/file';
import { Exp, Imp } from 'src/assets/icons';
import { Text } from 'src/components';
import { getCategoriesPeriod } from 'src/store/slices/categoriesActions';
import { getTotalAmountsPeriod, getTransactions } from 'src/store/slices/transactionsActions';

import styles from './Exchange.module.scss';

const Exchange = () => {
  const getMonth = useSelector((state) => state.period.month);
  const getYear = useSelector((state) => state.period.year);
  const period = { month: getMonth, year: getYear };

  const dispatch = useDispatch();

  const uploadHandler = async (event) => {
    await importToServer(event);
    dispatch(getTransactions());
    dispatch(getCategoriesPeriod(period));
    dispatch(getTotalAmountsPeriod(period));
  };

  return (
    <div className={styles.wrapper}>
      <button>
        <div className={styles.imp}>
          <Imp fill="#5D5FEF" opacity=".5" />
          <Text size="s" color="brand">
            Импорт
          </Text>
          <label>
            <input type="file" accept=".xlsx" onChange={uploadHandler} />
          </label>
        </div>
      </button>
      <button onClick={exportFromServer}>
        <div className={styles.exp}>
          <Exp fill="#5D5FEF" opacity=".5" />
          <Text size="s" color="brand">
            Экспорт
          </Text>
        </div>
      </button>
    </div>
  );
};

export default Exchange;
