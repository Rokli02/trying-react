import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import './limit-picker.styles.scss';

const limits = [
  {
    id: 0,
    value: 1,
  },
  {
    id: 1,
    value: 5,
  },
  {
    id: 2,
    value: 10,
  },
  {
    id: 3,
    value: 25,
  },
  {
    id: 4,
    value: 50,
  },
  {
    id: 5,
    value: 100,
  },
];

const LimitPicker = () => {
  const { limit, setLimit } = useContext(UserContext);

  const handleOnClick = (event: any) => {
    const limitValue = Number(event.target.value);
    setLimit(limitValue);
  };

  return (
    <select
      onChange={handleOnClick}
      defaultValue={limit}
      className='limit-picker'
    >
      {limits.map(({ id, value }) => (
        <option key={id} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default LimitPicker;
