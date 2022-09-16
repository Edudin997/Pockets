import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Arrow } from 'src/assets/icons';
import { Text } from 'src/components';
import { getTargetsSorted } from 'src/store/slices/targetsActions';

import DropDownItem from './DropDownItem';
import DropDownSepartor from './DropDownSepartor';
import styles from './SelectSorting.module.scss';

const SelectSorting = () => {
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState('Сортировать по');
  const buttonBgColor = isActive ? 'rgba(93, 95, 239, 0.1)' : '#17181C';

  const dispatch = useDispatch();

  const setNewCategory = (name, sort) => {
    dispatch(getTargetsSorted(sort));
    setCategory(name);
    setIsActive(false);
  };

  return (
    <div className={styles.selectWrapper} style={{ background: buttonBgColor }}>
      <div className={styles.dropdown}>
        <div className={styles.name} onClick={() => setIsActive(!isActive)}>
          <div className={styles.row}>
            <Text align="center" size="s" color="brand">
              {category}
            </Text>
            <div className={`${styles.arrow} ${isActive ? styles.active : ''}`}>
              <Arrow />
            </div>
          </div>
        </div>
        {isActive && (
          <div className={styles.dropdown__content}>
            <DropDownItem name="Ближе к завершению" sort="days_to_end" setCategory={setNewCategory} />
            <DropDownItem name="Дальше от завершения" sort="-days_to_end" setCategory={setNewCategory} />
            <DropDownSepartor />
            <DropDownItem name="Новее" sort="-created_at" setCategory={setNewCategory} />
            <DropDownItem name="Старее" sort="created_at" setCategory={setNewCategory} />
            <DropDownSepartor />
            <DropDownItem name="Больший %" sort="-percent" setCategory={setNewCategory} />
            <DropDownItem name="Меньший %" sort="percent" setCategory={setNewCategory} />
            <DropDownSepartor />
            <DropDownItem name="Самая дорогая цель" sort="-amount" setCategory={setNewCategory} />
            <DropDownItem name="Самая дешевая цель" sort="amount" setCategory={setNewCategory} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectSorting;
