import React, { MouseEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import Style from './StyledStartPage';
import { Button } from 'antd';
import { MainRoutes } from '@core/constants/routes';

const StartPage: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const handleStartButton = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      history.push(MainRoutes.mainPage);
    },
    [history],
  );

  return (
    <>
      <Style.Container>
        <h1>{t('StartPage.HeaderText')}</h1>
        <h3>{t('StartPage.MainText')}</h3>
        <Button type="primary" onClick={handleStartButton}>
          {t('StartPage.buttonStart')}
        </Button>
      </Style.Container>
    </>
  );
};

export default StartPage;
