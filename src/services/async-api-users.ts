import { EApi } from '../ENUM/Enum';
import { ICreateUser, IUsers } from '../interface';
import { StrinOrNumber } from '../store/actionTypes/actionTypes';
import services from './services';

export const UserApi = {
  async getUsers(): Promise<IUsers[]> {
    const { data } = await services.get(EApi.USERS);
    return data;
  },
  async getUser(id: StrinOrNumber): Promise<IUsers> {
    const { data } = await services.get(`${EApi.USERS}/${id}`);
    return data;
  },
  async postUser(body: ICreateUser): Promise<IUsers> {
    const { data } = await services.post(EApi.USER, body);
    return data;
  },
  async removeUser(payload: string | number): Promise<IUsers> {
    const { data } = await services.delete(`${EApi.USER}/${payload}`);
    return data;
  },
  async editUser(id: StrinOrNumber, body: ICreateUser): Promise<any> {
    const { data } = await services.put(`${EApi.USER_UPDATE}/${id}`, body);
    return data;
  },
};
