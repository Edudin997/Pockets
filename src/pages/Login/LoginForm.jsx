import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from 'src/api/requests';
import { DefaultInput, PasswordInput, Button, Link, Box, Text } from 'src/components';
import { PATHNAMES } from 'src/consts';

import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPaswword] = useState('');
  const [errorText, setErrorText] = useState('');

  const onChangeLogin = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPaswword(e.target.value);

  const handleAuthSuccess = () => navigate('/');

  const handleOnFocus = () => setErrorText('');

  const errorHandler = () => setErrorText('Неверные данные');

  const authUser = () => {
    auth(
      {
        email,
        password,
      },
      handleAuthSuccess,
      errorHandler
    );
  };

  return (
    <>
      <Box mb={16}>
        <DefaultInput
          value={email}
          errorText={errorText}
          isError={!!errorText}
          placeholder="Введите почту"
          onFocus={handleOnFocus}
          onChange={onChangeLogin}
        />
      </Box>
      <PasswordInput
        isError={!!errorText}
        onFocus={handleOnFocus}
        onChange={onChangePassword}
        additionalPseudoLabel={
          <Box mt={16} ml={16}>
            <Link to={PATHNAMES.forgetPassword} textSize="m">
              <Text size="m" color="brand">
                Забыли пароль?
              </Text>
            </Link>
          </Box>
        }
      />
      <div className={styles.toBottom}>
        <Button
          radius={1000}
          width={280}
          height={56}
          isDisabled={!email || !password || !!errorText}
          variant="brand"
          onClick={authUser}
        >
          <Text color="contrast" weight={500} align="center" size="xl">
            Войти
          </Text>
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
