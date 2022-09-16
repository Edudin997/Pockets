import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Plus, Target } from 'src/assets/icons';
import { Box, Button, Text } from 'src/components';
import { getCategories } from 'src/store/slices/categoriesActions';
import { getTargets } from 'src/store/slices/targetsActions';

import { AddTargetModal } from '../IntentModal';

import styles from './Intent.module.scss';
import SelectSorting from './SelectSorting';
import TargetItem from './TargetItem';

const Intent = () => {
  const targets = useSelector((state) => state.targets.list);
  const [isOpened, setIsOpened] = useState(false);
  const openModal = () => setIsOpened(true);

  const handleClose = () => {
    setIsOpened(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTargets());
  }, [dispatch]);

  return (
    <>
      <div className={styles.wrapper}>
        <Box mb={4}>
          <div className={styles.header}>
            <div className={styles.header__left}>
              <Box mt={5}>
                <Text as="h3" color="contrast">
                  Цели
                </Text>
              </Box>
              {!!targets.length && (
                <Button radius={1000} width={156} height={36} bgColor="glass" onClick={openModal}>
                  <div className={styles.header__button}>
                    <Plus width={14} height={14} fill="#5D5FEF" />
                    <Text size="s" color="brand">
                      Добавить цель
                    </Text>
                  </div>
                </Button>
              )}
            </div>
            <SelectSorting />
          </div>
        </Box>
        {!!targets.length ? (
          <div className={styles.items}>
            {targets.map((object, index) => (
              <TargetItem key={index} props={object} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <Box mb={15}>
              <Target />
            </Box>
            <Text as="p" color="default">
              У вас нет ни одной цели
            </Text>
            <Box mt={30}>
              <Button width={240} height={56} radius={1000} variant="brand" onClick={openModal}>
                <Text weight={500} color="contrast" align="center" size="xl">
                  Добавить цель
                </Text>
              </Button>
            </Box>
          </div>
        )}
      </div>
      <AddTargetModal isOpened={isOpened} handleClose={handleClose} />
    </>
  );
};

export default Intent;
