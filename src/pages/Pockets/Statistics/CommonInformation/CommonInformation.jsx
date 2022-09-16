import { Box } from 'src/components';

import styles from './CommonInformation.module.scss';
import DiagramSection from './DiagramSection';
import TransactionsSection from './TransactionsSection';

const CommonInformation = () => {
  return (
    <div className={styles.wrapper}>
      <TransactionsSection />
      <Box mt={30}>
        <DiagramSection />
      </Box>
    </div>
  );
};

export default CommonInformation;
