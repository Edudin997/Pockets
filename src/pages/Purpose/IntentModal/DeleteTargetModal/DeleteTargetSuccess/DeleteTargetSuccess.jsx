import { Modal, Button, Text, Box } from 'src/components';

import trash from '../../../../../assets/img/trash.png';

import styles from './DeleteTargetSuccess.module.scss';

const DeleteTargetSuccess = ({ isOpened, handleClose }) => {
  return (
    <Modal isOpened={isOpened} handleClose={handleClose}>
      <div className={styles.deleteTextWrapper}>
        <Box mb={24}>
          <img src={trash} alt="Цель успешно удалена" />
        </Box>
        <Box mb={17}>
          <Text as="h2" size="xl" lh="m" color="contrast">
            Цель удалена
          </Text>
        </Box>
        <div className={styles.rowButtons}>
          <Button radius={1000} width={196} height={56} bgColor="brand" onClick={handleClose}>
            <Text weight={500} size="xl" color="contrast">
              К целям
            </Text>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteTargetSuccess;
