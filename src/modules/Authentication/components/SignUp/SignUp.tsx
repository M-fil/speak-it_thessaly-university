import React, { useCallback, useState } from 'react';
import { Form, Input, Divider, Tooltip } from 'antd';
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Style from './StyledSignUp';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { displayFirstName, userEmail, userPassword } from './constants';
import { useTranslation } from 'react-i18next';
import { AuthRoutes } from '@core/constants/routes';
import { Color } from '@core/constants/colors';
import { ActionTypes } from '@store/actions/constans.d';
import { asyncSignUp } from '@store/actions/authActions';

const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onChangeHandlerEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.currentTarget;
      if (name === userEmail) {
        setEmail(value);
      }
    },
    [],
  );

  const onChangeHandlerPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.currentTarget;
      if (name === userPassword) {
        setPassword(value);
      }
    },
    [],
  );

  const onChangeHandlerName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.currentTarget;
      if (name === displayFirstName) {
        setDisplayName(value);
      }
    },
    [],
  );

  const createUser = useCallback(
    (event: React.SyntheticEvent) => {
      const user = { email, password };
      event.preventDefault();
      dispatch(asyncSignUp(user));
      history.push(AuthRoutes.home);
    },
    [dispatch, history, email, password],
  );

  const logginGoogle = useCallback(() => {
    try {
      dispatch({
        type: ActionTypes.ASYNC_SIGN_IN_GOOGLE,
      });
    } catch (error) {
      toast.error(error.message);
    }
  }, [dispatch]);

  return (
    <Style.Container>
      <Toaster />
      <Style.Form>
        <Form>
          <Style.Title>{t('signUp.title')}</Style.Title>
          <Form.Item>
            <Input
              type={t('signUp.input.displayName.type')}
              name={t('signUp.input.displayName.name')}
              placeholder={t('signUp.input.displayName.placeholder')}
              id={t('signUp.input.displayName.id')}
              value={displayName}
              onChange={onChangeHandlerName}
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Input
              type={t('signUp.input.email.type')}
              name={t('signUp.input.email.name')}
              placeholder={t('signUp.input.email.placeholder')}
              id={t('signUp.input.email.id')}
              value={email}
              onChange={onChangeHandlerEmail}
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
              type={t('signUp.input.password.type')}
              name={t('signUp.input.password.name')}
              placeholder={t('signUp.input.password.placeholder')}
              id={t('signUp.input.password.id')}
              value={password}
              onChange={onChangeHandlerPassword}
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined style={{ color: Color.AuthFormIcon }} />
                </Tooltip>
              }
            />
          </Form.Item>
          <Form.Item>
            <Style.Button>
              <button className="SignUp" onClick={createUser}>
                {t('signUp.buttonSignUp')}
              </button>
            </Style.Button>
            <Style.Links>
              <p> {t('signUp.textBeforeSignIn')}</p>
              <Link to="/signIn">{t('signUp.buttonSignIn')}</Link>
            </Style.Links>
          </Form.Item>
          <Divider plain>{t('signUp.textBeforeGoogle')}</Divider>
          <Form.Item>
            <Style.Button onClick={logginGoogle}>
              <button onClick={logginGoogle}>
                {t('signUp.buttonSignInGoogle')}
              </button>
            </Style.Button>
          </Form.Item>
        </Form>
      </Style.Form>
    </Style.Container>
  );
};

export default SignUp;
