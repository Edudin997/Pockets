import { useState } from 'react';
import ReactCalendar from 'react-calendar';
import './Calendar.scss';

import { Calendar } from 'src/assets/icons';
import { Box, Text, Popover } from 'src/components';
import { defaultInputStyles } from 'src/components/DefaultInput/DefaultInput';
import { classnames } from 'src/utils';

import { defaultTableInputStyles } from '../TableDefaultInput/TableDefaultInput';

import styles from './TableDateInput.module.scss';

const TableDateInput = ({ isError, min, max, value, onChange }) => {
  const [isOpened, setIsOpened] = useState(false);
  const date = value?.split('-').reverse().join('.');

  const toggleOpen = () => setIsOpened(!isOpened);
  const handleClose = () => setIsOpened(false);

  const handleOnChangeDate = (date) => {
    onChange(date.toLocaleDateString().split('.').reverse().join('-'));
    setIsOpened(false);
  };

  const formatDate = (value) => {
    if (!value) {
      return 'Дата';
    }
    const formatDate = new Date(value)
      .toLocaleString('default', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
      .replace(/\./g, '')
      .replace(/\s *г/g, '');
    return formatDate;
  };

  return (
    <Popover
      isOpened={isOpened}
      handleClose={handleClose}
      content={
        <ReactCalendar
          value={value ? new Date(value) : new Date()}
          minDate={new Date(min)}
          maxDate={new Date(max)}
          onChange={handleOnChangeDate}
          showFixedNumberOfWeeks={true}
          next2Label={null}
          prev2Label={null}
          nextLabel={'›'}
          navigationLabel={({ date }) => {
            const month = date.toLocaleString('ru-RU', { month: 'short' });
            const year = date.getFullYear();
            return (
              <div className={styles.dateTitle}>
                <Box mr={8}>
                  <Text weight={600} size="s" lh="m" color="contrast">
                    {month.replace(/\./g, '')}
                  </Text>
                </Box>
                {year}
              </div>
            );
          }}
        />
      }
    >
      <button
        className={classnames([
          defaultTableInputStyles.input,
          styles.button,
          [defaultInputStyles.input__error, isError],
        ])}
        onClick={toggleOpen}
      >
        <div className={styles.textPosition}>
          <Box mr={10}>
            <Calendar />
          </Box>
          <Box mr={10}>
            <Text align="center" color={value ? 'contrast' : 'default'} size="m">
              {formatDate(value)}
            </Text>
          </Box>
        </div>
      </button>
    </Popover>
  );
};

export default TableDateInput;
