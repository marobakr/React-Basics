interface IProps {
  user: {
    username: string;
    email: string;
    password: string;
    address: string;
    phone: string;
  };
}
const UserDetails = ({ user }: IProps) => {
  return (
    <ul
      style={{
        listStyle: 'none',
        textAlign: 'start',
        textTransform: 'capitalize',
      }}
    >
      <li>
        <h5> username: {user.username} </h5>
      </li>
      <li>
        <h5> email: {user.email} </h5>
      </li>
      <li>
        <h5> password: {user.password} </h5>
      </li>
      <li>
        <h5> address: {user.address} </h5>
      </li>
    </ul>
  );
};

export default UserDetails;
