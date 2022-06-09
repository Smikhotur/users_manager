import React from 'react';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import { S } from './styles';

export interface PropsFormAddUser {
  formik: any;
}

export const FormAddUser: React.FC<PropsFormAddUser> = ({ formik }) => {
  console.log(formik);
  return (
    <S.FormWrapper>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.FormTitle>Add User</S.FormTitle>
        <label htmlFor=''>
          <S.FormInput
            value={formik.values.name.trim()}
            onChange={formik.handleChange}
            name='name'
            placeholder='Name'
            type='text'
          />
          {formik.errors.name ? <ErrorMsg msg={formik.errors.name} /> : ''}
        </label>
        <label htmlFor=''>
          <S.FormInput
            value={formik.values.surname.trim()}
            onChange={formik.handleChange}
            name='surname'
            placeholder='Surname'
            type='text'
          />
          {formik.errors.surname ? (
            <ErrorMsg msg={formik.errors.surname} />
          ) : (
            ''
          )}
        </label>
        <label htmlFor=''>
          <S.FormTextarea
            value={formik.values.desc}
            onChange={formik.handleChange}
            name='desc'
            placeholder='Write something about the user 😀'
          />
          {formik.errors.desc ? <ErrorMsg msg={formik.errors.desc} /> : ''}
        </label>
        <S.FormButton type='submit'>add user</S.FormButton>
      </S.Form>
    </S.FormWrapper>
  );
};
