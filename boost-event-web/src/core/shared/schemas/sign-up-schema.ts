import * as yup from 'yup';

export const SignUpSchema = yup.object({
  name: yup.string()
    .max(255, 'Informe o nome com no máximo 255 caracteres.')
    .required('Informe o seu nome.'),

  whatsapp: yup.string()
    .required('Informe o seu número de whatsapp.'),

  email: yup.string()
    .email('Informe um e-mail válido.')
    .required('Informe o seu e-mail.'),

  password: yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/,
      'A senha deve ter pelo menos 8 caracteres, conter uma letra maiúscula, uma letra minúscula, \
			 um número e um caractere especial.')
    .required('Informe sua senha.')
});





