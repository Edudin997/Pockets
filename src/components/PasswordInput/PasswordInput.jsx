import { useState } from 'react';

import { EyeOpened, EyeClosed } from 'src/assets/icons';
import { DefaultInput } from 'src/components';

import styles from './PasswordInput.module.scss';

const PasswordInput = ({ additionalPseudoLabel, isError, errorText, onFocus, onChange }) => {
  const [isPassShown, setIsPassShown] = useState(false);

  const handlePassVisibility = (event) => {
    event.preventDefault();
    setIsPassShown(!isPassShown);
  };

  return (
    <DefaultInput
      type={isPassShown ? 'text' : 'password'}
      isError={isError}
      errorText={errorText}
      placeholder={'Введите пароль'}
      onFocus={onFocus}
      onChange={onChange}
      additionalPseudoLabel={additionalPseudoLabel}
      className={styles.passInput}
      inputButton={
        <button className={styles.showPassButton} type="button" onClick={handlePassVisibility}>
          {isPassShown ? <EyeClosed /> : <EyeOpened />}
        </button>
      }
    />
  );
};

export default PasswordInput;
