import React, { useState } from 'react';

import Layout from '../layout/Layout';
import { Wrapper } from '../styles/signin.styles';

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  const [formInput, setFormInput] = useState({});

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault;

    console.log(id, password);
  };

  return (
    <Layout pageTitle="Sign In" footer={false}>
      <Wrapper>
        <h2>Sign In</h2>
        <form>
          <div>
            <label>ID</label>
            <input type="text" value={id} onChange={onChange} />
          </div>
          <div>
            <label>PW</label>
            <input type="password" value={password} onChange={onChange} />
          </div>
          <button type="submit" onSubmit={onSubmit}>
            Sign In
          </button>
        </form>
      </Wrapper>
    </Layout>
  );
};

export default SignIn;
