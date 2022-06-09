import { ICreateUser } from '../../interface';

export type StrinOrNumber = string | number;

export interface IWorkerEditUserFetch {
  type: string;
  payload: {
    id: string;
    data: ICreateUser;
  };
}

export interface IPayloadStrinOrNumber {
  type: string;
  payload: {
    id: StrinOrNumber;
  };
}

export interface IWorkerPostUserFetch {
  type: string;
  payload: ICreateUser;
}
