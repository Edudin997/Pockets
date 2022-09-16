import { useSelector } from 'react-redux';

import { Text } from 'src/components';
import { classnames } from 'src/utils';

import AddCategoryButton from '../CategoriesTableHeader/AddCategoryButton';

import styles from './CategoriesTableBody.module.scss';

const CategoriesTableBody = () => {
  const categories = useSelector((state) => state.categories.list);

  const numberFormat = (sum) => {
    const correctSum = Number(sum).toFixed(0);
    const number = Number(correctSum).toLocaleString();
    return number;
  };

  return (
    <>
      <div className={styles.row}>
        <div className={styles.headerWrapper}>
          <Text size="s">Категория</Text>
          <div className={styles.rightColumnItemText}>
            <Text size="s">Сумма</Text>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          {categories.map((item) => {
            return (
              <div key={item.id} className={styles.categoryItem}>
                <div className={styles.categoryItemColumn}>
                  <Text color="contrast">{item.name}</Text>
                </div>
                <div className={classnames([styles.rightColumnItem, styles.categoryItemColumn])}>
                  <div className={styles.rightColumnItemText}>
                    <Text color="contrast" align="right">
                      {numberFormat(item.transactions_sum)}
                    </Text>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.button}>
          <AddCategoryButton />
        </div>
      </div>
    </>
  );
};

export default CategoriesTableBody;
