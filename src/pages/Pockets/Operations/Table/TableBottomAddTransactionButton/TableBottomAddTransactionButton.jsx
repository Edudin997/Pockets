import { useState } from 'react';

import { BottomBg, Plus } from 'src/assets/icons';
import { Button } from 'src/components';

import { AddNewTransactionModal } from '../../../TableModals';

import styles from './TableBottomAddTransactionButton.module.scss';

const TableBottomAddTransactionButton = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClose = () => {
    setIsOpened(false);
  };

  const openModal = () => setIsOpened(true);

  return (
    <>
      <div className={styles.toBottom}>
        <Button radius={1000} width={54} height={54} variant="brand" onClick={openModal}>
          <Plus width={19} height={19} fill="#FFF" />
        </Button>
      </div>
      <div className={styles.toBottom2}>
        <BottomBg />
      </div>
      <AddNewTransactionModal isOpened={isOpened} handleClose={handleClose} />
    </>
  );
};

export default TableBottomAddTransactionButton;
