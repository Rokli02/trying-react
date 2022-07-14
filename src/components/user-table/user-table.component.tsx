import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import UserTableHeader from './user-table-header/user-table-header.component';
import UserTableRow from './user-table-row/user-table-row.component';
import './user-table.styles.scss';

const UserTable = () => {
  const { users } = useContext(UserContext);

  return (
    <div className='user-table-container'>
      <div className='table-header'>
        <UserTableHeader />
      </div>
      <div className='table-content'>
        {users.map((user) => (
          <UserTableRow key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserTable;
