import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Modal, Button, Text, Box } from 'src/components';
import { deleteTarget } from 'src/store/slices/targetsActions';

import styles from './DeleteTargetModal.module.scss';
import DeleteTargetSuccess from './DeleteTargetSuccess';

const DeleteTargetModal = ({ target, isOpened, handleClose }) => {
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteTarget = () => {
    setIsDeleteSuccess(true);
  };

  const handleDeleteSuccess = () => {
    dispatch(deleteTarget({ targetId: target, callback: handleClose }));
    setIsDeleteSuccess(false);
  };

  return (
    <>
      <Modal isOpened={isOpened} handleClose={handleClose}>
        <div className={styles.deleteTextWrapper}>
          <Box mb={16}>
            <Text as="h1" size="xxl" lh="m" color="contrast">
              Удалить цель?
            </Text>
          </Box>
          <Box mb={32}>
            <Text size="m" color="default">
              Вы не сможете отменить действие
            </Text>
          </Box>
          <div className={styles.rowButtons}>
            <Button radius={1000} width={196} height={56} bgColor="glass" onClick={handleClose}>
              <Text weight={500} size="xl" color="brand">
                Назад
              </Text>
            </Button>
            <Button radius={1000} width={196} height={56} bgColor="error" onClick={handleDeleteTarget}>
              <Text weight={500} size="xl" color="contrast">
                Удалить
              </Text>
            </Button>
          </div>
        </div>
      </Modal>
      <DeleteTargetSuccess isOpened={isDeleteSuccess} handleClose={handleDeleteSuccess} />
    </>
  );
};

export default DeleteTargetModal;
