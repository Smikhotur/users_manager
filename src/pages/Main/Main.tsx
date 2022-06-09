import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectorIsLouder, selectorUsers } from '../../selectors/userSelector';
import {
  getUsersFeatch,
  setUserPostFeatch,
} from '../../store/reducers/UserSlice';
import { Oval } from 'react-loader-spinner';
import { S } from './styles';
import { EColors } from '../../ENUM/Enum';
import ListUsers from '../../components/ListUsers/ListUsers';
import FormikWrapper from '../../components/FornikWrapper/FornikWrapper';
import { FormAddUser } from '../../components/FormAddUser/FormAddUser';
import { AddUserSchema } from '../../validations/validationAddUser';
import { ICreateUser } from '../../interface';

const Main: React.FC = () => {
  const [openModul, setOpenModul] = useState<boolean>(false);
  const isLouder = useAppSelector(selectorIsLouder);
  const users = useAppSelector(selectorUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersFeatch());
  }, []);

  const initialValueAddUser: ICreateUser = {
    name: '',
    surname: '',
    desc: '',
  };

  const handleSubmitAddUser = async (data: ICreateUser): Promise<any> => {
    dispatch(setUserPostFeatch(data));
  };

  return (
    <S.Inner>
      <S.BoxTitle>
        <S.Title>list of users</S.Title>
        <S.BtnAddUser onClick={() => setOpenModul(!openModul)} type='button'>
          {openModul ? 'close' : 'add user'}
        </S.BtnAddUser>
      </S.BoxTitle>
      {isLouder ? (
        <S.InnerOval>
          <Oval
            secondaryColor={EColors.headerBackground}
            color={EColors.orangeNavigation}
            height={80}
            width={80}
          />
        </S.InnerOval>
      ) : (
        <ListUsers users={users} />
      )}
      {openModul && (
        <FormikWrapper
          initialValues={initialValueAddUser}
          Component={FormAddUser}
          handleSubmit={handleSubmitAddUser}
          validationSchema={AddUserSchema}
        />
      )}
    </S.Inner>
  );
};

export default Main;
