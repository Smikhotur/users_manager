import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectorUser } from '../../selectors/userSelector';
import { editUserFeatch, getUserFeatch } from '../../store/reducers/UserSlice';
import userImg from '../../assets/images/user.png';
import { S } from './styles';
import { ICreateUser, IUsers } from '../../interface';
import FormikWrapper from '../../components/FornikWrapper/FornikWrapper';
import { AddUserSchema } from '../../validations/validationAddUser';
import { FormEditUser } from '../../components/FormEditUser/FormEditUser';

const Details: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const user = useAppSelector<IUsers>(selectorUser);
  const dispatch = useAppDispatch();
  const { params } = useRouteMatch();

  useEffect(() => {
    dispatch(getUserFeatch(params));
  }, []);

  const initialValueAddUser: ICreateUser = {
    name: user.name,
    surname: user.surname,
    desc: user.desc,
  };

  const handleSubmitAddUser = (data: ICreateUser) => {
    dispatch(editUserFeatch({ ...params, data }));
    setOpenModal(false);
  };

  return (
    <S.WrapperDetails>
      <S.DetailsHeader>
        <S.DetailsTitle>Profile</S.DetailsTitle>
        <S.EditBtn onClick={() => setOpenModal(!openModal)} type='button'>
          {openModal ? 'close' : 'edit'}
        </S.EditBtn>
      </S.DetailsHeader>
      <S.MainContent>
        <S.AvatarInner>
          <S.Avatar src={userImg} alt='avatar' />
          <S.AvatarTitle>{`${user.name} ${user.surname}`}</S.AvatarTitle>
        </S.AvatarInner>
        <S.Desc>{user.desc}</S.Desc>
      </S.MainContent>
      <S.WrapperForm>
        {openModal && (
          <FormikWrapper
            initialValues={initialValueAddUser}
            Component={FormEditUser}
            handleSubmit={handleSubmitAddUser}
            validationSchema={AddUserSchema}
          />
        )}
      </S.WrapperForm>
    </S.WrapperDetails>
  );
};

export default Details;
