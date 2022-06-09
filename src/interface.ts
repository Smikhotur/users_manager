export interface IUsers {
  _id?: string;
  name?: string;
  surname?: string;
  desc?: string;
  user_id?: number;
  __v?: number;
}

export interface ICreateUser {
  name?: string;
  surname?: string;
  desc?: string;
}
