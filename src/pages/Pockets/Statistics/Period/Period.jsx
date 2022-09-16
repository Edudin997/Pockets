import { useDispatch } from 'react-redux';

import { MONTH } from 'src/consts';
import { setMonth, setYear } from 'src/store/slices/periodSlice';

import DateSwitcher from './DateSwitcher';
import styles from './Period.module.scss';

const Period = ({ toDay }) => {
  const dispatch = useDispatch();

  const prevMonth = () => {
    let month;
    if (toDay.month !== 1) {
      month = toDay.month - 1;
    } else {
      month = 12;
    }
    dispatch(setMonth(month));
  };

  const nextMonth = () => {
    let month;
    if (toDay.month !== 12) {
      month = toDay.month + 1;
    } else {
      month = 1;
    }
    dispatch(setMonth(month));
  };

  const prevYear = () => {
    if (toDay.year > 2010) {
      const year = toDay.year - 1;
      dispatch(setYear(year));
    }
  };

  const nextYear = () => {
    if (toDay.year < 2022) {
      const year = toDay.year + 1;
      dispatch(setYear(year));
    }
  };

  return (
    <div className={styles.wrapper}>
      <DateSwitcher width={150} name={MONTH[toDay.month - 1]} prev={prevMonth} next={nextMonth} />
      <DateSwitcher width={120} name={toDay.year} prev={prevYear} next={nextYear} />
    </div>
  );
};

export default Period;
