import React, { MouseEvent, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { database } from '@firebaseConfig/index';
import Style from './StyledLongTermStatistics';
import { Button } from 'antd';
import { MainRoutes } from '@core/constants/routes';
import { useTranslation } from 'react-i18next';

const LongTermStatistics: React.FC = () => {
  const [info, setInfo] = useState([]);
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    database
      .ref()
      .child('/users')
      .on('value', snapshot => {
        setInfo(Object.values(snapshot.val()));
      });
  }, []);

  const sorted = [...info].sort((a, b) => {
    return b.score - a.score;
  });

  const handlerSortButtons = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setInfo(sorted);
    },
    [sorted],
  );

  const hanlderBackButton = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      history.push(MainRoutes.shortTermStatistics);
    },
    [history],
  );

  return (
    <>
      <Style.Buttons>
        <Button type="primary" onClick={hanlderBackButton}>
          {t('LongStatistics.buttonReturn')}
        </Button>
        <Button onClick={handlerSortButtons}>
          {t('LongStatistics.sortByScore')}
        </Button>
      </Style.Buttons>
      <Style.UsersTable>
        <tr>
          <tr>{t('LongStatistics.position')}</tr>
          <th>{t('LongStatistics.email')}</th>
          <th>{t('LongStatistics.displayName')}</th>
          <th>{t('LongStatistics.score')}</th>
          <th>{t('LongStatistics.date')}</th>
        </tr>
        {info.map(
          (
            res: {
              date: string;
              displayName: string;
              email: string;
              photoURL: string;
              score: number;
              uid: string;
            },
            i: number,
          ) => {
            return (
              <tr key={res.uid}>
                <td>{++i}</td>
                <td>{res.email}</td>
                <td>{res.displayName}</td>
                <td>{res.score}</td>
                <td>{res.date}</td>
              </tr>
            );
          },
        )}
      </Style.UsersTable>
    </>
  );
};

export default LongTermStatistics;
