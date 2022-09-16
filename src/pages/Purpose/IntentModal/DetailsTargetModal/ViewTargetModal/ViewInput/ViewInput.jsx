import { Text } from 'src/components';

import styles from './ViewInput.module.scss';

const ViewInput = ({ name, value }) => {
  return (
    <div className={styles.characteristics}>
      <Text size="s" color="default">
        {name}
      </Text>
      <Text size="m" color="contrast">
        {String(value)}
      </Text>
    </div>
  );
};

export default ViewInput;
