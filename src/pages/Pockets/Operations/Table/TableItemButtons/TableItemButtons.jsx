import { useState } from 'react';

import { Dots, EditIcon, TrashIcon } from 'src/assets/icons';
import { Text, Button } from 'src/components';

import { DeleteTransactionModal } from '../../../TableModals';
import AddNewOrUpdateTransactionModal from '../../../TableModals/AddNewOrUpdateTransactionModal';

import styles from './TableItemButtons.module.scss';

const TableItemButtons = ({ item }) => {
  const [isEditOpened, setIsEditOpened] = useState(false);
  const [isDeleteOpened, setIsDeleteOpened] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleEditClose = () => setIsEditOpened(false);
  const handleDeleteClose = () => setIsDeleteOpened(false);

  const handleEdit = () => {
    setIsEditOpened(true);
    setIsActive(false);
  };

  const handleDelete = () => {
    setIsDeleteOpened(true);
    setIsActive(false);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Button
          width={24}
          height={24}
          bgColor={isActive ? 'brand' : 'more'}
          radius={1000}
          variant="ghost"
          onClick={() => setIsActive(!isActive)}
        >
          <Dots />
        </Button>
        {isActive && (
          <>
            <div className={styles.more} onClick={() => setIsActive(false)}>
              <Button width="100%" variant="ghost" onClick={handleEdit}>
                <div className={styles.edit}>
                  <EditIcon width={18} height={18} fill="#FFF" />
                  <Text size="s" color="contrast">
                    Редактировать
                  </Text>
                </div>
              </Button>
              <Button width="100%" variant="ghost" onClick={handleDelete}>
                <div className={styles.edit}>
                  <TrashIcon width={18} height={18} />
                  <Text size="s" color="error">
                    Удалить
                  </Text>
                </div>
              </Button>
            </div>
          </>
        )}
      </div>
      <AddNewOrUpdateTransactionModal transaction={item} isOpened={isEditOpened} handleClose={handleEditClose} />
      <DeleteTransactionModal transaction={item} isOpened={isDeleteOpened} handleClose={handleDeleteClose} />
    </>
  );
};

export default TableItemButtons;
