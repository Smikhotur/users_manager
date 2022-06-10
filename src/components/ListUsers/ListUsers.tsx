import React, { FC } from 'react';
import { ERoutes } from '../../ENUM/Enum';
import { IUsers } from '../../interface';
import { S } from './styles';
import userImg from '../../assets/images/user.png';
import remove from '../../assets/images/remove.png';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { removeUserAction } from '../../store/reducers/UserAction';

interface Props {
  users: IUsers[];
}

const ListUsers: FC<Props> = ({ users }) => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const linkDetails = (e: React.MouseEvent, id: number | undefined) => {
    e.preventDefault();
    const name = e.target as HTMLInputElement;

    if (!name.alt?.includes('remove')) {
      return history.push(`details/${id}`);
    }

    dispatch(removeUserAction(id));
  };

  return (
    <S.List>
      {users.map((user: IUsers) => (
        <S.Item key={user._id}>
          <S.Link
            onClick={(e: React.MouseEvent) => linkDetails(e, user.user_id)}
          >
            <S.InnerAvatar>
              <S.ImgAvatar src={userImg} alt='user avatar' />
              <S.FullName>{`${user.name} ${user.surname}`}</S.FullName>
            </S.InnerAvatar>
            <S.Desc>{user.desc?.slice(0, 25) + '...'}</S.Desc>
            <S.ImgRemoveUser src={remove} alt='remove icon' />
          </S.Link>
        </S.Item>
      ))}
    </S.List>
  );
};

export default ListUsers;
