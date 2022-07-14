import { Link } from 'react-router-dom';
import './navigation-item.styles.scss';

const NavigationItem = (props: { text: string, to: string }) => {
  const { text, to } = props;
  return (
    <span className='navigation-item'>
      <Link to={to}>{text}</Link>
      <span className='underline' />
    </span>
  );
};

export type NavItem = {
  id: string;
  text: string;
  url: string;
};

export default NavigationItem;
