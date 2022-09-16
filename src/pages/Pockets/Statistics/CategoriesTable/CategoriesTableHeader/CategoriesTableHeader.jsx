import { Text } from 'src/components';

import styles from './CategoriesTableHeader.module.scss';

const CategoriesTableHeader = () => {
  return (
    <div className={styles.wrapper}>
      <Text size="xs" color="default">
        Расходы по категориям
      </Text>
    </div>
  );
};

export default CategoriesTableHeader;
