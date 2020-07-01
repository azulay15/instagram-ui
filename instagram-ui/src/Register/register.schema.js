import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Username is too short')
      .max(16, 'Username is too long')
      .required('Username is required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password is too short')
      .max(16, 'Password is too long')
      .required('Password is required'),
    agreeTerms: Yup.boolean()
      .oneOf([true], 'You must agree to terms')
});

