import { Box, Button, Text } from 'src/components';

import styles from './EmptyList.module.scss';

const EmptyList = ({ text, bText = false, height = '100%', size = 'm', onClick }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        height,
        size,
      }}
    >
      <Box pl={50} pr={50}>
        <Text size={size} align="center">
          {text}
        </Text>
      </Box>
      {bText && (
        <Box mt={24}>
          <Button radius={1000} width={280} height={56} variant="brand" onClick={onClick}>
            <Text color="contrast" weight={500} align="center" size="xl">
              {bText}
            </Text>
          </Button>
        </Box>
      )}
    </div>
  );
};

export default EmptyList;
