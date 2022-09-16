import { useState } from 'react';

import { Box, Button, DefaultInput, Modal, Text } from 'src/components';

import SepartorInModal from '../../SepartorInModal';
import ViewInput from '../ViewInput';

import styles from './EditTargetModal.module.scss';

const EditTargetModal = ({ props, isOpened, handleClose }) => {
  const [name, setName] = useState(props.name);
  const onChangeName = (e) => setName(e.target.value);

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
    <Modal isOpened={isOpened} handleClose={handleClose}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <DefaultInput value={name} placeholder="Введите название категории" onChange={onChangeName} />
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
              Назад
            </Text>
          </Button>
          <Button width={196} height={56} radius={1000} variant="brand" onClick={''}>
            <Text weight={500} color="contrast" align="center" size="xl">
              Сохранить
            </Text>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditTargetModal;
