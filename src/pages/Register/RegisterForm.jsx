import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { register, auth } from 'src/api/requests';
import { Checkbox, DefaultInput, PasswordInput, Button, Box, Text } from 'src/components';
import { PATHNAMES } from 'src/consts';

import styles from './RegisterForm.module.scss';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onChangeName = (e) => setUsername(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeIsAgree = () => setIsAgree(!isAgree);

  const onUsernameFocus = () => setUsernameError('');
  const onPasswordFocus = () => setPasswordError('');
  const onEmailFocus = () => setEmailError('');

  const handleError = (error) => {
    error?.username && setUsernameError('Некорректный ввод');
    error?.password && setPasswordError('Некорректный ввод');
    error?.email && setEmailError('Некорректный ввод');
  };

  const handleAuthSuccess = () => navigate('/');
  const authErrorHandler = () => navigate(PATHNAMES.login);

  const handleRegisterSuccess = () => {
    auth(
      {
        email,
        password,
      },
      handleAuthSuccess,
      authErrorHandler
    );
  };

  const registerUser = () => {
    register(
      {
        username,
        email,
        password,
      },
      handleRegisterSuccess,
      handleError
    );
  };

  return (
    <>
      <Box mb={16}>
        <DefaultInput
          value={username}
          isError={!!usernameError}
          errorText={usernameError}
          placeholder="Введите имя пользователя"
          onFocus={onUsernameFocus}
          onChange={onChangeName}
        />
      </Box>
      <Box mb={16}>
        <DefaultInput
          value={email}
          isError={!!emailError}
          errorText={emailError}
          placeholder="Введите почту"
          onFocus={onEmailFocus}
          onChange={onChangeEmail}
        />
      </Box>
      <Box mb={16}>
        <PasswordInput
          isError={!!passwordError}
          errorText={passwordError}
          onFocus={onPasswordFocus}
          onChange={onChangePassword}
        />
      </Box>
      <Box ml={16}>
        <Checkbox isChecked={isAgree} text="Я со всем согласен отпутите" onClick={onChangeIsAgree} />
      </Box>
      <div className={styles.toBottom}>
        <Button
          width={280}
          height={56}
          radius={1000}
          isDisabled={
            !username || !email || !isAgree || !password || !!usernameError || !!emailError || !!passwordError
          }
          variant="brand"
          onClick={registerUser}
        >
          <Text weight={500} color="contrast" align="center" size="xl">
            Зарегистрироваться
          </Text>
        </Button>
      </div>
    </>
  );
};

export default RegisterForm;
