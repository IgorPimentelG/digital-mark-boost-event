import * as yup from 'yup';

export const EmailSchema = yup.object({
  subject: yup.string()
    .max(100, 'Informe o títuto com no máximo 100 caracteres.')
    .required('Informe o título do e-mail.'),
});