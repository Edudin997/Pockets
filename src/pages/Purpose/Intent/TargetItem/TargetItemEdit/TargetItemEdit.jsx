import { useState } from 'react';

import { Dots, EditIcon, TrashIcon } from 'src/assets/icons';
import { Button, Text } from 'src/components';
import { DeleteTargetModal } from 'src/pages/Purpose/IntentModal';
import ViewTargetModal from 'src/pages/Purpose/IntentModal/DetailsTargetModal/ViewTargetModal';

import styles from './TargetItemEdit.module.scss';

const TargetItemEdit = ({ props }) => {
  const [isActive, setIsActive] = useState(false);
  const [isEditOpened, setIsEditOpened] = useState(false);
  const [isDeleteOpened, setIsDeleteOpened] = useState(false);

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
      <div className={styles.dots}>
        <Button
          width={24}
          height={24}
          bgColor="more"
          radius={1000}
          variant="ghost"
          onClick={() => setIsActive(!isActive)}
        >
          <Dots />
        </Button>
        {isActive && (
          <div className={styles.more}>
            <Button width="100%" variant="ghost" onClick={handleEdit}>
              <div className={styles.edit}>
                <EditIcon width={18} height={18} fill="#FFF" />
                <Text size="s" color="contrast">
                  Подробности
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
        )}
      </div>
      <ViewTargetModal props={props} isOpened={isEditOpened} handleClose={handleEditClose} />
      <DeleteTargetModal target={props.id} isOpened={isDeleteOpened} handleClose={handleDeleteClose} />
    </>
  );
};

export default TargetItemEdit;
