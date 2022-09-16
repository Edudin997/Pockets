import { useDispatch } from 'react-redux';

import { Modal, Button, Text, Box } from 'src/components';
import { deleteTransaction } from 'src/store/slices/transactionsSlice';

import styles from './DeleteTransactionModal.module.scss';

const DeleteTransactionModal = ({ transaction, isOpened, handleClose }) => {
  const dispatch = useDispatch();

  const handleDeleteTransaction = () => {
    dispatch(
      deleteTransaction({
        data: {
          transaction_date: transaction?.transaction_date,
        },
        transactionId: transaction?.id,
        callback: handleClose,
      })
    );
  };

  return (
    <Modal isOpened={isOpened} handleClose={handleClose}>
      <div className={styles.deleteTextWrapper}>
        <Box mb={16}>
          <Text as="h1" size="xxl" lh="m" color="contrast">
            Удалить операцию?
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
          <Button radius={1000} width={196} height={56} bgColor="error" onClick={handleDeleteTransaction}>
            <Text weight={500} size="xl" color="contrast">
              Удалить
            </Text>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteTransactionModal;
