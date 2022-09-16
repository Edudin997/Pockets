import { Modal, Button, Text, Box } from 'src/components';

import finish from '../../../../assets/img/finish.png';

import styles from './FinishTargetModal.module.scss';

const FinishTargetModal = ({ name, isOpened, handleClose }) => {
  return (
    <Modal isOpened={isOpened} handleClose={handleClose}>
      <div className={styles.deleteTextWrapper}>
        <Box mb={24}>
          <img src={finish} alt="Цель выполнена" />
        </Box>
        <Box mb={24}>
          <Text as="h2" size="xl" lh="m" color="contrast">
            Цель выполнена
          </Text>
        </Box>
        <Box mb={32}>
          <Text size="m" color="default" align="center" lh="m">
            Поздравляем! Вы успешно выполнили цель
          </Text>
          <Text size="m" color="default" align="center" lh="m">
            {'"' + name + '"'}
          </Text>
        </Box>
        <div className={styles.rowButtons}>
          <Button radius={1000} width={196} height={56} bgColor="brand" onClick={handleClose}>
            <Text weight={500} size="xl" color="contrast">
              Отлично
            </Text>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default FinishTargetModal;
