import { Arrow } from 'src/assets/icons';
import { Box, Text } from 'src/components';
import Balance from 'src/components/Balance/Balance';

import { Link } from '../../components';

import styles from './MainPagesLayout.module.scss';

const MainPagesLayout = ({ pageName, leftColumnChildren, rightColumnChildren }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <Box mb={54}>
          <div className={styles.row}>
            <div className={styles.title}>
              <Link to="/">
                <div className={styles.buttonPrev}>
                  <Arrow width={15} height={10} />
                </div>
              </Link>
              <Box ml={24}>
                <Text as="h1" color="contrast">
                  {pageName}
                </Text>
              </Box>
            </div>
            <Balance />
          </div>
        </Box>
        <div className={styles.content}>
          {leftColumnChildren}
          {rightColumnChildren}
        </div>
      </div>
    </div>
  );
};

export default MainPagesLayout;
