import { IPropsLogo } from '../interface';

const Navbar = ({ Logo, about, login, setLogin }: IPropsLogo) => {
  return (
    <div style={{ backgroundColor: '#6d3c44', borderRadius: '20px' }}>
      <ul
        style={{
          display: 'flex',
          gap: 20,
          listStyle: 'none',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: 20,
          textTransform: 'capitalize',
        }}
      >
        <li>{Logo}</li>
        <li>blog</li>
        <li>acount</li>
        <li>{about}</li>
        <li
          onClick={() => {
            setLogin(false);
          }}
          style={{
            backgroundColor: 'black',
            padding: 8,
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {login ? 'LOGUOT' : 'LOGIN'}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
