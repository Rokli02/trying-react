import { useContext } from 'react';
import LimitPicker from '../../components/limit-picker/limit-picker.component';
import Pagination from '../../components/pagination/pagination.component';
import UserTable from '../../components/user-table/user-table.component';
import { PaginationContext } from '../../context/pagination.context';
import { UserContext } from '../../context/user.context';
import './user-menu.styles.scss';

const UserMenu = () => {
  const { pages } = useContext(PaginationContext);
  const { users } = useContext(UserContext);
  const hasUsers: boolean = users !== undefined && users.length > 0;

  return hasUsers ? (
    <div>
      <UserTable />
      <div className='limit-input-container'>
        <LimitPicker />
      </div>
      <div className='pagination-container'>
        <Pagination pages={pages} numberOfButtons={5} />
      </div>
      <hr />
      <div>Something else</div>
    </div>
  ) : (
    <h1>Nincs user</h1>
  );
};

export default UserMenu;
