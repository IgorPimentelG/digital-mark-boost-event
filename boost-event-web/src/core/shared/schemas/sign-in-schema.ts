import * as yup from 'yup';

export const SignInSchema = yup.object({
  email: yup.string()
    .email('Informe um e-mail válido.')
    .required('Informe o seu e-mail.'),

  password: yup.string()
    .required('Informe sua senha.')
});