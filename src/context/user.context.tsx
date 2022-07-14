import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import { User, UserPageAndLimitOutput } from '../models/user.type';
import { getAllUsersByPageAndLimit } from '../utils/user.utils';
import { PaginationContext } from './pagination.context';

type UserContextProps = {
  users: User[];
  limit: number;
  setLimit: (l: number | ((l: number) => number)) => any;
};

export const UserContext = createContext<UserContextProps>({
  users: [],
  limit: 5,
  setLimit: (limit: number | ((l: number) => number)): any => undefined,
});

export const UserProvider = ({ children }: { children: ReactElement }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [limit, setLimit] = useState<number>(10);

  const { currentPage, setCurrentPage, setPages } =
    useContext(PaginationContext);

  useEffect(() => {
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  useEffect(() => {
    fetchData().then((v) => console.log('fetch complete'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, limit]);

  const fetchData = async () => {
    const userPageData: UserPageAndLimitOutput =
      await getAllUsersByPageAndLimit(currentPage, limit);

    setUsers(userPageData.users);
    setPages(userPageData.pages);
  };

  const value = { users, limit, setLimit };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
