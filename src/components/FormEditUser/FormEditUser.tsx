import React from 'react';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import { PropsFormAddUser } from '../FormAddUser/FormAddUser';
import { S } from './styles';

export const FormEditUser: React.FC<PropsFormAddUser> = ({ formik }) => {
  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.FormTitle>Edit</S.FormTitle>
      <label htmlFor=''>
        <S.FormInput
          value={formik.values.name?.trim()}
          onChange={formik.handleChange}
          name='name'
          placeholder='Name'
          type='text'
        />
        {formik.errors.name ? <ErrorMsg msg={formik.errors.name} /> : null}
      </label>
      <label htmlFor=''>
        <S.FormInput
          value={formik.values.surname?.trim()}
          onChange={formik.handleChange}
          name='surname'
          placeholder='Surname'
          type='text'
        />
        {formik.errors.surname ? (
          <ErrorMsg msg={formik.errors.surname} />
        ) : null}
      </label>
      <label htmlFor=''>
        <S.FormTextarea
          value={formik.values.desc}
          onChange={formik.handleChange}
          name='desc'
          placeholder='Write something about the user 😀'
        />
        {formik.errors.desc ? <ErrorMsg msg={formik.errors.desc} /> : null}
      </label>
      <S.FormButton type='submit'>send</S.FormButton>
    </S.Form>
  );
};
