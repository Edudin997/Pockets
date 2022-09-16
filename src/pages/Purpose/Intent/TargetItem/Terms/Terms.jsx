import { Text } from 'src/components';

import styles from './Terms.module.scss';

const Terms = ({ text, number }) => {
  return (
    <div className={styles.terms}>
      <Text size="xs" color="default">
        {String(text)}
      </Text>
      <Text size="xs" color="primary">
        {String(number)}
      </Text>
    </div>
  );
};

export default Terms;
