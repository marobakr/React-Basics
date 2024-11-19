interface user {
  username: string;
  email: string;
  password: string;
  address: string;
}
interface FormGroup {
  lable: string;
  type: string;
  name: keyof user;
  id: keyof user /*
                    id: keyof user means 
                    id: 'username' or 'email' or 'password' or 'address'
                    */;
}
export const InputControls: FormGroup[] = [
  {
    lable: 'username',
    type: 'text',
    name: 'username',
    id: 'username',
  },
  {
    lable: 'email',
    type: 'text',
    name: 'email',
    id: 'email',
  },
  {
    lable: 'password',
    type: 'password',
    name: 'password',
    id: 'password',
  },
  {
    lable: 'address',
    type: 'text',
    name: 'address',
    id: 'address',
  },
];
