import * as yup from 'yup';

export const EventSchema = yup.object({
  name: yup.string()
    .max(50, 'Informe o nome do evento com no máximo 50 caracteres.')
    .required('Informe o nome do evento.'),

  description: yup.string()
    .max(100, 'Informe uma descrição sobre o evento com no máximo 100 caracteres.')
    .required('Informe uma breve descrição sobre o evento.'),

  segment: yup.string()
    .max(50, 'Informe o segmento do evento com no máximo 50 caracteres.')
    .required('Informe o segmento do evento.'),

  local: yup.string()
    .max(50, 'Informa a localidade do evento com no máximo 50 caracteres.')
    .required('Informe a localidade do evento.'),

  capacity: yup.number()
    .typeError('Informe a capacidade do evento.')
    .moreThan(5, 'A capacidade do evento deve ser de no mínimo 5 lugares.')
    .required('Informe a capacidade do evento.'),

  occursAt: yup.string()
    .test('is-future', 'Não é permitido registrar eventos que já ocorreram.', (value) => {
      if (value) {
        const now = new Date();
        const date = new Date(value);

        if (date > now) {
          return true;
        }
      }
      return false;
    })
    .required('Informe o dia e a hora do evento.')
});