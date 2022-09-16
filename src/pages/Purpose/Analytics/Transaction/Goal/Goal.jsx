import { Text } from 'src/components';

import styles from './Goal.module.scss';

const Goal = ({ text, sum }) => {
  return (
    <div className={styles.wrapper}>
      <Text size="xs" color="default">
        {text}
      </Text>
      <Text size="xs" color="primary">
        {String(sum)}
      </Text>
    </div>
  );
};

export default Goal;
