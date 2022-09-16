import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, Link, Modal, TableDefaultInput, TableSelectInput, Text } from 'src/components';
import { addNewTarget } from 'src/store/slices/targetsActions';

import styles from './AddTargetModal.module.scss';

const AddTargetModal = ({ isOpened, handleClose }) => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.list);
  const [name, setName] = useState('');
  const [endSum, setEndSum] = useState('');
  const [startSum, setStartSum] = useState('');
  const [category, setCategory] = useState(categories?.id || '');
  const [numberMonth, setNumberMonth] = useState('');
  const [percent, setPercent] = useState('');

  const [isCategoryError, setIsCategoryError] = useState(false);

  const resetForm = () => {
    setName('');
    setEndSum('');
    setStartSum('');
    setCategory('');
    setIsCategoryError(false);
    setNumberMonth('');
    setPercent('');
  };

  const onCloseModal = () => {
    handleClose();
    resetForm();
  };

  const handleCategoryChange = (event) => {
    try {
      const rawCategory = event;
      if (Number.isNaN(rawCategory)) throw new Error('category is NaN');
      setCategory(rawCategory);
      setIsCategoryError(false);
    } catch {
      setIsCategoryError(true);
    }
  };

  const handleNameChange = (event) => {
    if (event.target.value.match(/[,.[\]{}&$@^:;=<>]/)) return;
    setName(event.target.value);
  };

  const handleEndSumChange = (event) => {
    setEndSum(event.target.value);
  };

  const handleStartSumChange = (event) => {
    setStartSum(event.target.value);
  };

  const handleNumberMonthChange = (event) => {
    setNumberMonth(event.target.value);
  };

  const handlePercentChange = (event) => {
    setPercent(event.target.value);
  };

  const handleCreateTarget = () => {
    dispatch(
      addNewTarget({
        data: {
          name: name,
          amount: endSum,
          initial_deposit: startSum,
          percent: percent,
          deposit_term: numberMonth,
          category_id: category,
        },
        callback: onCloseModal,
      })
    );
  };

  return (
    <Modal isOpened={isOpened} title="Создание цели" handleClose={onCloseModal}>
      <div className={styles.wrapper}>
        <Text align="center" size="m" color="default" lh="m">
          Создайте цель. Разместите средства под процент.
        </Text>
        <Text align="center" size="m" color="default" lh="m">
          Получайте статистику по движению к цели и анализируйте выгоду от своего вклада!
        </Text>
        <Box mt={16} mb={32}>
          <Link to="#">
            <Text align="center" size="m" color="brand">
              ссылка на условия
            </Text>
          </Link>
        </Box>
        <Box mb={16}>
          <div className={styles.intent}>
            <TableDefaultInput
              textAlign="left"
              value={name}
              width={320}
              placeholder="Введите название цели"
              onChange={handleNameChange}
            />
          </div>
        </Box>
        <Box mb={32}>
          <div className={styles.items}>
            <Box mb={16}>
              <div className={styles.item}>
                <Text size="m" color="default" lh="m">
                  Сколько вы планируете накопить?
                </Text>
                <div className={styles.intent}>
                  <TableDefaultInput
                    textAlign="center"
                    value={endSum}
                    width={85}
                    placeholder="Сумма"
                    onChange={handleEndSumChange}
                  />
                </div>
              </div>
            </Box>
            <Box mb={16}>
              <div className={styles.item}>
                <Text size="m" color="default" lh="m">
                  С какой суммы планируете начать?
                </Text>
                <div className={styles.intent}>
                  <TableDefaultInput
                    textAlign="center"
                    value={startSum}
                    width={85}
                    placeholder="Сумма"
                    onChange={handleStartSumChange}
                  />
                </div>
              </div>
            </Box>
            <Box mb={16}>
              <div className={styles.item}>
                <Text size="m" color="default" lh="m">
                  Категория
                </Text>
                <div className={styles.intent}>
                  <TableSelectInput
                    width={85}
                    placeholder="Категория"
                    selectOptions={categories}
                    emptyListText="Нет категорий"
                    isError={isCategoryError}
                    value={category}
                    onChange={handleCategoryChange}
                  />
                </div>
              </div>
            </Box>
            <Box mb={16}>
              <div className={styles.item}>
                <Text size="m" color="default" lh="m">
                  Срок (месяцы)
                </Text>
                <div className={styles.intent}>
                  <TableDefaultInput
                    textAlign="center"
                    value={numberMonth}
                    width={60}
                    placeholder="1"
                    onChange={handleNumberMonthChange}
                  />
                </div>
              </div>
            </Box>
            <Box mb={16}>
              <div className={styles.item}>
                <Text size="m" color="default" lh="m">
                  Процент
                </Text>
                <div className={styles.intent}>
                  <TableDefaultInput
                    textAlign="center"
                    value={percent}
                    width={60}
                    placeholder="0 %"
                    onChange={handlePercentChange}
                  />
                </div>
              </div>
            </Box>
          </div>
        </Box>
        <div className={styles.button}>
          <Button width={240} height={56} radius={1000} variant="brand" onClick={handleCreateTarget}>
            <Text weight={500} color="contrast" align="center" size="xl">
              Создать
            </Text>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddTargetModal;
