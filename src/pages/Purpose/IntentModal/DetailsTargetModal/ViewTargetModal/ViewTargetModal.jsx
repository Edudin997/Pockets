import { useState } from 'react';

import { EditIcon } from 'src/assets/icons';
import { Box, Button, Modal, Text } from 'src/components';

import SepartorInModal from '../SepartorInModal';

import EditTargetModal from './EditTargetModal';
import ViewInput from './ViewInput';
import styles from './ViewTargetModal.module.scss';

const ViewTargetModal = ({ props, isOpened, handleClose }) => {
  const [isEditOpened, setIsEditOpened] = useState(false);
  const handleEditClose = () => setIsEditOpened(false);

  const handleEdit = () => {
    setIsEditOpened(true);
    handleClose();
  };

  const numberFormat = (sum) => {
    const correctSum = Number(sum).toFixed(0);
    const number = Number(correctSum).toLocaleString();
    return number;
  };
  const formatDate = (value) => {
    const date = new Date(value)
      .toLocaleString('default', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
      .replace(/\./g, '')
      .replace(/\s *г/g, '');
    return date;
  };

  return (
    <>
      <Modal isOpened={isOpened} handleClose={handleClose}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Text as="h2" size="xl" color="contrast" lh="m">
              {String(props.name)}
            </Text>
            <Button radius={1000} width={156} height={34} bgColor="glass" onClick={handleEdit}>
              <div className={styles.header__button}>
                <EditIcon width={18} height={18} fill="#5D5FEF" />
                <Text size="s" color="brand">
                  Редактировать
                </Text>
              </div>
            </Button>
          </div>
          <div className={styles.body}>
            <Box mb={16}>
              <ViewInput name="Накоплено" value={numberFormat(props.total_amount)} />
            </Box>
            <Box mb={16}>
              <ViewInput name="Цель" value={numberFormat(props.amount)} />
            </Box>
            <Box mb={16}>
              <SepartorInModal />
            </Box>
            <Box mb={16}>
              <ViewInput name="Дата создания" value={formatDate(props.created_at)} />
            </Box>
            <Box mb={16}>
              <ViewInput name="Срок (месяцы)" value={props.deposit_term} />
            </Box>
            <Box mb={16}>
              <SepartorInModal />
            </Box>
            <Box mb={16}>
              <ViewInput name="Ставка" value={numberFormat(props.percent) + ' %'} />
            </Box>
            <Box mb={16}>
              <ViewInput
                name="Доход от % в текущем месяце"
                value={numberFormat(props.current_month_amount - Number(props.initial_deposit))}
              />
            </Box>
            <Box mb={32}>
              <ViewInput
                name="Доход от % за все время"
                value={numberFormat(props.total_amount - Number(props.initial_deposit))}
              />
            </Box>
          </div>
          <div className={styles.button}>
            <Button width={196} height={56} radius={1000} variant="brand" onClick={''}>
              <Text weight={500} color="contrast" align="center" size="xl">
                Пополнить
              </Text>
            </Button>
          </div>
        </div>
      </Modal>
      <EditTargetModal props={props} isOpened={isEditOpened} handleClose={handleEditClose} />
    </>
  );
};

export default ViewTargetModal;
