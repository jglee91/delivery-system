import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from 'layout/Layout';
import { Wrapper } from 'styles/signin.styles';

import TextInput from 'components/Input/TextInput';
import SignInButton from 'components/Button/SignInButton';

type FormInputType = {
  id: string;
  password: string;
};

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  const [formInput, setFormInput] = useState({
    id: '',
    password: '',
  } as FormInputType);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:3000/api/users/signin`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formInput),
      });
    } catch (e) {
      console.log(e);
      console.error(e);
    }
  };

  return (
    <Layout pageTitle="Sign In" footer={false}>
      <Wrapper>
        <h2>Sign In</h2>
        <form onSubmit={onSubmit}>
          <TextInput type="text" label="ID" name="id" value={formInput.id} onChange={onChange} />
          <TextInput type="password" label="PW" name="password" value={formInput.password} onChange={onChange} />
          <SignInButton text="Sign In" />
        </form>
      </Wrapper>
    </Layout>
  );
};

export default SignIn;
