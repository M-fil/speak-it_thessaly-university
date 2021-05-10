import firebase from 'firebase';
import toast from 'react-hot-toast';
import { auth, generateUserDocument } from '.';
import i18n from '@i18n/index';

const provider = new firebase.auth.GoogleAuthProvider();

export const resetPassword = async (email: string): Promise<void> => {
  await auth.sendPasswordResetEmail(email);
  toast.success(`${i18n.t('toasts.resetPasswordSuccess')}`);
};

export const authStateChange = (): void => {
  auth.onAuthStateChanged(async (userAuth) => {
    const user = await generateUserDocument(userAuth);
    return user;
  });
};

export const signInEmailAndPassword = async (
  email: string,
  password: string,
): Promise<firebase.auth.UserCredential> => {
  const data = await auth.signInWithEmailAndPassword(email, password);
  toast.success(`${i18n.t('toasts.signInSuccess')}`);
  return data;
};

export const signInWithGoogle = async (): Promise<void> => {
  await auth.signInWithPopup(provider);
  toast.success(`${i18n.t('toasts.signInSuccess')}`);
};

export const signUpEmailAndPassword = async (
  email: string,
  password: string,
): Promise<void> => {
  await auth.createUserWithEmailAndPassword(email, password);
  toast.success(`${i18n.t('toasts.signUpSuccess')}`);
};

export const signOut = async (): Promise<void> => {
  await auth.signOut();
};
