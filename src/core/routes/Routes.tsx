import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Authentication from '../../modules/Authentication/Authentication';
import { generateUserDocument, auth, database } from '@firebaseConfig/index';
import { signInAction } from '@store/actions/authActions';
import HomePage from '../../modules/HomePage/HomePage';

const Routes: React.FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.currentAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      console.log('userAuth', userAuth);
      const user = await generateUserDocument(userAuth);
      if (user) {
        dispatch(signInAction(user));
        database.ref().child('users').child(`${user.uid}`).set(user)
          .catch((error) => {
            console.log('error user set', error);
          });
      }
    });
  }, [dispatch]);

  console.log('user', user.login);

  return user.login ? (
    <>
      <Toaster />
      <Router>
        <HomePage />
      </Router>
    </>
  ) : (
    <Router>
      <Authentication />
    </Router>
  );
};

export default Routes;
