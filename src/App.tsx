import { useState } from 'react';
import './App.css';
import Form from './handleForms/form';
import Heading from './heading';
import Navbar from './nav';
import UserDetails from './userDetails';

function App() {
  const myLogo = 'CODAWY';
  const aboutUs = 'about-us';
  const [loginIn, setLoginIn] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  });

  // Handle form submission
  return (
    <>
      <Navbar
        Logo={myLogo}
        about={aboutUs}
        login={loginIn}
        setLogin={setLoginIn}
      />
      <Heading>
        <span> hello world </span>
      </Heading>
      {loginIn ? (
        <UserDetails user={userData} />
      ) : (
        <Form
          setLoginIn={setLoginIn}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </>
  );
}

export default App;
