import { ChangeEvent, useState } from 'react';
import { InputControls } from '../data';
import { IUserprops } from '../interface';

export const Form = ({ setLoginIn, userData, setUserData }: IUserprops) => {
  /* In React, components will not re-render if the state or props do not change so i store the data in state to can use Setstate to reRender The Dom  */
  const [inputsArr, setinputsArr] = useState(InputControls);

  /* Handler */
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  /* Renders */
  const RenderFromInputList = inputsArr.map((input) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}
      key={input.id}
    >
      <div className='form-groupe' style={{ flexGrow: 1 }}>
        <label htmlFor={input.id}>{input.lable}</label>
        <input
          id={input.id}
          style={{ width: '98%', padding: 10, marginBottom: '30px' }}
          name={input.name}
          type={input.type}
          placeholder='wright your'
          value={userData[input.name]}
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
      </div>

      <button
        onClick={() => {
          const filttred = inputsArr.filter((item) => item.id != input.id);
          setinputsArr(filttred);
        }}
        style={{ padding: '10px', marginBottom: '5px' }}
      >
        ❌
      </button>
    </div>
  ));

  return (
    <div>
      <h1 style={{ textAlign: 'start', textTransform: 'capitalize' }}>
        your email is: {userData.email}
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ textAlign: 'start' }}>{RenderFromInputList}</div>
        <button
          style={{
            display: 'block',
            padding: '10px 20px',
            margin: '10px auto',
            cursor: 'pointer',
          }}
          onClick={() => {
            setLoginIn(true);
          }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Form;
