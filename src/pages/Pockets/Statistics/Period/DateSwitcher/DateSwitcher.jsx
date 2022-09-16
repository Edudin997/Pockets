import { Arrow } from 'src/assets/icons';
import { Box, Button, Text } from 'src/components';

import styles from './DateSwitcher.module.scss';

const DateSwitcher = ({ name, prev, next, width }) => {
  return (
    <div className={styles.wrapper} style={{ width }}>
      <Button width={25} height={20} onClick={prev}>
        <Arrow transform="rotate(90)" />
      </Button>
      <Box pl={5} pr={5}>
        <Text size="s" weight={600} color="contrast">
          {String(name)}
        </Text>
      </Box>
      <Button width={25} height={20} onClick={next}>
        <Arrow transform="rotate(-90)" />
      </Button>
    </div>
  );
};

export default DateSwitcher;
