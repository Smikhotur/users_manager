import { EApi } from '../ENUM/Enum';
import { ICreateUser, IUsers } from '../interface';
import services from './services';

export const getUsersAPI = async (): Promise<IUsers[]> => {
  const promise: any = await services.get(EApi.users);
  return promise;
};

export const getUserAPI = async (id: number): Promise<IUsers> => {
  const promise: any = await services.get(`${EApi.user}/${id}`);
  return promise;
};

export const postUserAPI = async (data: ICreateUser): Promise<{}> => {
  const promise: any = await services.post(EApi.users, data);
  return promise;
};

export const removeUserAPI = async (id: string) => {
  const promise: any = await services.delete(`${EApi.user}/${id}`);
  return promise;
};

export const editUserAPI = async (
  id: string,
  data: ICreateUser
): Promise<any> => {
  console.log(id, data);
  const promise: any = await services.put(`${EApi.user}/${id}`, data);
  return promise;
};
