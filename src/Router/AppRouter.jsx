import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../store/auth/Firebase/Firebase';
import { login, logOut } from '../store/auth/authSlice';
import { AuthRoutes } from './AuthRoutes';
import { LoginRoutes } from './LoginRoutes';

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return dispatch(logOut());
      const { email, displayName, photoURL, uid } = user;
      dispatch(login({ email, displayName, photoURL, uid }));
    });
  }, []);

  return (
    <>
      <Routes>
        {(status==='authenticated')
        ?
        <Route path="/*" element={<AuthRoutes/>} />
        :
        <Route path="/*" element={<LoginRoutes />} />
        }
      </Routes>
    </>
  );
};
