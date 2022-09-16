import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Minus, Plus } from 'src/assets/icons';
import { Modal, Text, Button, TableAmountInput, TableDateInput, TableSelectInput, Box } from 'src/components';
import { addNewTransaction, updateTransaction } from 'src/store/slices/transactionsSlice';

import styles from './AddNewOrUpdateTransactionModal.module.scss';

const AddNewOrUpdateTransactionModal = ({ transaction, isOpened, handleClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);

  const [transactionType, setTransactionType] = useState(transaction?.category ? 'expense' : 'income');
  const [date, setDate] = useState(transaction?.transaction_date || '');
  const [amount, setAmount] = useState(transaction?.amount || '');
  const [category, setCategory] = useState(transaction?.category?.id || '');

  const [isDateError, setIsDateError] = useState(false);
  const [isCategoryError, setIsCategoryError] = useState(false);
  const [isAmountError, setIsAmountError] = useState(false);

  const resetForm = () => {
    setDate('');
    setAmount('');
    setCategory('');
    setIsDateError(false);
    setIsAmountError(false);
    setIsCategoryError(false);
  };

  const changeTransactionType = (type) => {
    setTransactionType(type);
    if (!transaction) resetForm();
  };

  const onCloseModal = () => {
    handleClose();
    if (!transaction) resetForm();
  };

  const changeToIncome = () => changeTransactionType('income');
  const changeToExpense = () => changeTransactionType('expense');

  const handleDateChange = (value) => {
    setIsDateError(false);
    setDate(value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    setIsAmountError(false);
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

  const validateForm = () => {
    let isError = false;

    if (!date) {
      setIsDateError(true);
      isError = true;
    }
    if (!amount || Number(amount) === 0) {
      setIsAmountError(true);
      isError = true;
    }
    if ((category === -1 || !category) && transactionType === 'expense') {
      setIsCategoryError(true);
      isError = true;
    }
    return isError;
  };

  const handleCreateTransaction = () => {
    if (validateForm()) return;

    if (transaction) {
      dispatch(
        transactionType === 'expense'
          ? updateTransaction({
              data: {
                category,
                transaction_date: date,
                amount: Number(amount),
                transaction_type: 'expense',
              },
              transactionId: transaction.id,
              callback: handleClose,
            })
          : updateTransaction({
              data: {
                category,
                transaction_date: date,
                amount: Number(amount),
                transaction_type: 'income',
              },
              transactionId: transaction.id,
              callback: handleClose,
            })
      );
      return;
    }

    dispatch(
      addNewTransaction({
        data: {
          category,
          transaction_date: date,
          amount,
          transaction_type: transactionType,
        },
        callback: onCloseModal,
      })
    );
  };

  return (
    <Modal isOpened={isOpened} title="Добавить операцию" handleClose={onCloseModal}>
      <div className={styles.buttonsWrapper}>
        <div className={styles.income}>
          <Button bgColor={transactionType === 'income' ? 'brand' : 'glass'} onClick={changeToIncome}>
            <Box mr={8}>
              <Text size="s" weight={600} color={transactionType === 'income' ? 'contrast' : 'brand'}>
                Доход
              </Text>
            </Box>
            <Plus fill={transactionType === 'income' ? '#FFFFFF' : '#5D5FEF'} />
          </Button>
        </div>
        <div className={styles.consumption}>
          <Button bgColor={transactionType === 'expense' ? 'brand' : 'glass'} onClick={changeToExpense}>
            <Box mr={8}>
              <Text size="s" weight={600} color={transactionType === 'expense' ? 'contrast' : 'brand'}>
                Расход
              </Text>
            </Box>
            <Minus fill={transactionType === 'income' ? '#5D5FEF' : '#FFFFFF'} />
          </Button>
        </div>
      </div>
      <div className={styles.inputsContainer}>
        <TableDateInput isError={isDateError} max={new Date()} value={date} onChange={handleDateChange} />
        {transactionType === 'expense' && (
          <div className={styles.categories}>
            <TableSelectInput
              placeholder="Категория"
              selectOptions={categories}
              emptyListText="Нет категорий"
              isError={isCategoryError}
              value={category}
              onChange={handleCategoryChange}
            />
          </div>
        )}
        <div className={styles.amount}>
          <TableAmountInput isError={isAmountError} value={amount} placeholder="Сумма" onChange={handleAmountChange} />
        </div>
      </div>
      <Button radius={1000} width={208} height={56} variant="brand" onClick={handleCreateTransaction}>
        <Text weight={500} size="xl" color="contrast">
          Добавить
        </Text>
      </Button>
    </Modal>
  );
};

export default AddNewOrUpdateTransactionModal;
