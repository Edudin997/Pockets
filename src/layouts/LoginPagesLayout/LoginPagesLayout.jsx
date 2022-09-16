import { Box, Text, Link } from 'src/components';

import styles from './LoginPagesLayout.module.scss';

const LoginPagesLayout = ({ pageName, description, sublink, children }) => (
  <div className={styles.pageWrapper}>
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Text as="h1" size="xxl" align="center" color="contrast">
          {pageName}
        </Text>
      </div>
      <div className={styles.description}>
        <Text align="center" lh="m">
          {description}
        </Text>
      </div>
      <form className={styles.form}>
        <Box mt={145} mb={145}>
          {children}
        </Box>
      </form>
      <div className={styles.sublink}>
        <Text>{sublink.title}</Text>
        <Link to={sublink.link}>{sublink.text}</Link>
      </div>
    </div>
  </div>
);

export default LoginPagesLayout;
