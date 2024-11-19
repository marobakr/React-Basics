export interface IPropsLogo {
  Logo: string;
  about: string;
  login: boolean;
  setLogin: (param: boolean) => void;
}

export interface UserData {
  username: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}
export interface IUserprops {
  userData: UserData;
  setUserData: (userData: UserData) => void;
  setLoginIn: (param: boolean) => void;
}
