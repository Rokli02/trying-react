import NavigationItem, {
  NavItem,
} from '../navigation-item/navigation-item.component';
import './navigation.styles.scss';

const navigationItems: NavItem[] = [
  {
    id: '1',
    text: 'User Page',
    url: '/',
  },
  {
    id: '2',
    text: 'Other page',
    url: '/other',
  },
];

const Navigation = () => {
  return (
    <div className='navigation-bar-container'>
      <div className='navigation-item-container'>
        {navigationItems.map((item) => (
          <NavigationItem key={item.id} text={item.text} to={item.url} />
        ))}
      </div>
      <div className='navigation-item-container'>
        <NavigationItem text='Log in, or out' to='' />
      </div>
    </div>
  );
};

export default Navigation;
