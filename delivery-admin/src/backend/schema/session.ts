import { object, string } from 'yup';

export const createUserSessionSchema = object({
  body: object({
    id: string().required('ID is required'),
    password: string().required('Password is required').min(6, 'Password should be 6 chars at least'),
  }),
});
