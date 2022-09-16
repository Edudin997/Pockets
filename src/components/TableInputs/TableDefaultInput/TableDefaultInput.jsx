import { defaultInputStyles } from 'src/components/DefaultInput/DefaultInput';
import { classnames } from 'src/utils';

import styles from './TableDefaultInput.module.scss';

export { styles as defaultTableInputStyles };

const TableDefaultInput = ({
  type = 'text',
  textAlign = 'center',
  isError,
  value,
  placeholder,
  maxLength,
  extraClasses,
  onChange,
  width,
}) => {
  return (
    <input
      type={type}
      value={value}
      maxLength={maxLength}
      className={classnames([
        styles.input,
        extraClasses,
        [defaultInputStyles.input__error, isError],
        styles[`input__align-${textAlign}`],
      ])}
      placeholder={placeholder}
      onChange={onChange}
      style={{
        width,
      }}
    />
  );
};

export default TableDefaultInput;
