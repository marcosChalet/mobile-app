import React from 'react';

import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';

export default function Login() {
  const toggle = 1;
  return toggle ? <SignIn /> : <SignUp />;
}
