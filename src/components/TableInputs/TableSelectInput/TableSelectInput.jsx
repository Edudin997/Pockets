import { useState } from 'react';

import { Arrow, Check } from 'src/assets/icons';
import { Box, Text } from 'src/components';
import { defaultInputStyles } from 'src/components/DefaultInput/DefaultInput';
import { classnames } from 'src/utils';

import { defaultTableInputStyles } from '../TableDefaultInput/TableDefaultInput';

import styles from './TableSelectInput.module.scss';

const TableSelectInput = ({ value, isError, emptyListText, placeholder, selectOptions, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState(placeholder);
  return (
    <div className={styles.selectWrapper}>
      <div className={styles.dropdown}>
        <div
          className={classnames([
            defaultTableInputStyles.input,
            styles.selector,
            [defaultInputStyles.input__error, isError],
            [styles.defaultOption, !value],
          ])}
          onClick={() => setIsActive(!isActive)}
        >
          <div className={styles.row}>
            <div className={styles.row__flex}>
              <Text align="center" size="m" color={category === 'Категория' ? 'default' : 'contrast'}>
                {category}
              </Text>
            </div>
            <div className={`${styles.arrow} ${isActive ? styles.active : ''}`}>
              <Arrow />
            </div>
          </div>
        </div>
        {isActive && (
          <div className={styles.dropdown__content}>
            {selectOptions.length > 0 ? (
              <>
                {selectOptions.map((item) => (
                  <div
                    key={item.id}
                    className={styles.dropdown__item}
                    onClick={() => {
                      onChange(item.id);
                      setCategory(item.name);
                      setIsActive(false);
                    }}
                  >
                    <Box mr={10}>
                      <Check width="12" height="10" fill="#434546" />
                    </Box>
                    <Text align="center" size="s" color="contrast">
                      {item.name}
                    </Text>
                  </div>
                ))}
              </>
            ) : (
              <div className={styles.dropdown__item}>
                <Text align="center" size="s" color="contrast">
                  {emptyListText}
                </Text>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TableSelectInput;
