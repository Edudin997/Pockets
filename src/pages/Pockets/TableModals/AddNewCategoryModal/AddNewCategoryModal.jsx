import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Box, Button, Modal, TableDefaultInput, Text } from 'src/components';
import { addNewCategory } from 'src/store/slices/categoriesSlice';

import styles from './AddNewCategoryModal.module.scss';

const AddNewCategoryModal = ({ isOpened, handleClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleOnChange = (event) => {
    if (event.target.value.match(/[,.[\]{}&$@^:;=<>]/)) return;
    setName(event.target.value);
  };

  const onCloseModal = () => {
    setName('');
    handleClose();
  };

  const handleAddNewCategory = () => {
    dispatch(
      addNewCategory({
        name,
      })
    ).then((res) => {
      if (!res?.error) onCloseModal();
    });
  };

  return (
    <Modal isOpened={isOpened} title="Добавить категорию" handleClose={onCloseModal}>
      <Box mb={32}>
        <div className={styles.category}>
          <TableDefaultInput
            textAlign="left"
            value={name}
            width={320}
            placeholder="Введите название категории"
            onChange={handleOnChange}
          />
        </div>
      </Box>
      <Button radius={1000} width={208} height={56} variant="brand" onClick={handleAddNewCategory}>
        <Text weight={500} size="xl" color="contrast">
          Добавить
        </Text>
      </Button>
    </Modal>
  );
};

export default AddNewCategoryModal;
