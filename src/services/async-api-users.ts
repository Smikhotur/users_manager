import { EApi } from '../ENUM/Enum';
import { ICreateUser, IUsers } from '../interface';
import { StrinOrNumber } from '../store/actionTypes/actionTypes';
import services from './services';

export const UserApi = {
  async getUsers(): Promise<IUsers[]> {
    const { data } = await services.get(EApi.users);
    return data;
  },
  async getUser(id: StrinOrNumber): Promise<IUsers> {
    const { data } = await services.get(`${EApi.user}/${id}`);
    return data;
  },
  async postUser(body: ICreateUser): Promise<IUsers> {
    const { data } = await services.post(EApi.users, body);
    return data;
  },
  async removeUser(id: StrinOrNumber): Promise<IUsers> {
    const { data } = await services.delete(`${EApi.user}/${id}`);
    return data;
  },
  async editUser(id: StrinOrNumber, body: ICreateUser): Promise<any> {
    const { data } = await services.put(`${EApi.user}/${id}`, body);
    return data;
  },
};
