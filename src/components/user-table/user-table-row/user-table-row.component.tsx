import { User } from '../../../models/user.type';
import './user-table-row.styles.scss';

const UserTableRow = (props: { user: User }) => {
  const { user } = props;
  return (
    <div className='user-table-row'>
      <div className='user-table-column'>{user.name}</div>
      <div className='user-table-column'>
        {user.address.city}
        {user.address.road ? ', '+user.address.road : null}
        {user.address.house_num ? ' - '+user.address.house_num : null}
      </div>
      <div className='user-table-column'>
        {user.created ? user.created.toLocaleString(): null}
      </div>
    </div>
  );
};

export default UserTableRow;
