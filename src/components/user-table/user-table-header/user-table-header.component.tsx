import './user-table-header.styles.scss';

const UserTableHeader = () => {
  return (
    <div className='user-table-header'>
      <div className='user-table-header-column' defaultValue="name">Név</div>
      <div className='user-table-header-column' defaultValue="address">Lakcím</div>
      <div className='user-table-header-column' defaultValue="created">Létrehozás dátuma</div>
    </div>
  )
}

export default UserTableHeader;