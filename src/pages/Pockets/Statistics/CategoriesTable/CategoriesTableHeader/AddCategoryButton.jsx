import { useState } from 'react';

import { Plus } from 'src/assets/icons';
import { Button, Box, Text } from 'src/components';

import { AddNewCategoryModal } from '../../../TableModals';

import styles from './AddCategoryButton.module.scss';

const AddCategoryButton = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClose = () => {
    setIsOpened(false);
  };

  const openModal = () => setIsOpened(true);

  return (
    <>
      <Button width="100%" variant="ghost" onClick={openModal}>
        <Box pr={8} pt={12} pb={12}>
          <Text color="brand" size="s">
            Добавить категорию
          </Text>
        </Box>
        <div className={styles.icon}>
          <Plus width={10} height={10} fill="#5D5FEF" />
        </div>
      </Button>
      <AddNewCategoryModal isOpened={isOpened} handleClose={handleClose} />
    </>
  );
};

export default AddCategoryButton;
