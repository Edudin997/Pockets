import { Link as RouterLink } from 'react-router-dom';

import styles from './Link.module.scss';

const Link = ({ to, target, children }) => (
  <RouterLink className={styles.link} target={target} to={to}>
    {children}
  </RouterLink>
);

export default Link;
