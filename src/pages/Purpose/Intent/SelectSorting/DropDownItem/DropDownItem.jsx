import { Check } from 'src/assets/icons';
import { Box, Text } from 'src/components';

import styles from './DropDownItem.module.scss';

const DropDownItem = ({ name, sort, setCategory }) => {
  return (
    <div className={styles.dropdown__item} onClick={() => setCategory(name, sort)}>
      <Box mr={10}>
        <Check width="12" height="10" fill="#434546" />
      </Box>
      <Text align="center" size="s" color="contrast">
        {name}
      </Text>
    </div>
  );
};

export default DropDownItem;
