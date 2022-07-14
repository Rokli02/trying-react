import { User, UserPageAndLimitOutput } from '../models/user.type';

const BASE_URL = 'http://localhost:3001/';

const getAllUser = async () => {
  try {
    const response: Response = await fetch(`${BASE_URL}api/users`);
    const users: User[] = await response.json();
    return users;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getAllUsersByPageAndLimit = async (page: number, limit: number) => {
  const emptyPageReturnValue: UserPageAndLimitOutput = {
    users: [],
    pages: 0,
  };

  try {
    const response: Response = await fetch(
      `${BASE_URL}api/users/page/${page}?limit=${limit}`
    );
    const pageValue: UserPageAndLimitOutput = await response.json();

    if (pageValue.users === undefined && pageValue.pages === undefined) {
      return emptyPageReturnValue;
    }

    return pageValue;
  } catch (err) {
    console.error(err);
    return emptyPageReturnValue;
  }
};

export { getAllUser, getAllUsersByPageAndLimit };
