import { object, string, ref } from 'yup';

export const createUserSchema = object({
  body: object({
    id: string().required('ID is required'),
    password: string().required('Password is required').min(6, 'Password should be 6 chars at least'),
    passwordConfirmation: string().oneOf([ref('password'), null], 'Passwords is not matched'),
  }),
});
