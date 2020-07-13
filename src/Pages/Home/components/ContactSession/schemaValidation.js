import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Obrigatório'),
  subject: yup.string().required('Obrigatório'),
  email: yup
    .string()
    .email('E-mail inválido')
    .required('Obrigatório'),
  message: yup.string().required('Obrigatório'),
});
