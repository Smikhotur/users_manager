import React from 'react';
import { Formik, useFormik } from 'formik';
import { ICreateUser } from '../../interface';
import * as Yup from 'yup';
import { ISchema } from '../../validations/validationAddUser';
import { PropsFormAddUser } from '../FormAddUser/FormAddUser';

interface Props {
  initialValues: ICreateUser;
  validationSchema: Yup.SchemaOf<ISchema>;
  Component: React.FC<PropsFormAddUser>;
  handleSubmit: (data: any) => void;
  rest?: undefined;
}

export interface IUseFormik {
  initialValues: any;
  enableReinitialize: boolean;
  validationSchema: Yup.SchemaOf<ISchema>;
  validateOnChange: boolean;
  validateOnBlur: boolean;
  onSubmit: (data: any) => void;
}

const FormikWrapper: React.FC<Props> = ({
  initialValues,
  validationSchema,
  Component,
  handleSubmit,
}) => {
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: handleSubmit,
  });

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Component formik={formik} />
    </Formik>
  );
};

export default FormikWrapper;
