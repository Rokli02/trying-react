type User = {
  _id: string;
  name: string;
  address: {
    city: string;
    road?: string;
    house_num?: string;
  };
  created?: Date;
};

type UserPageAndLimitOutput = { users: User[]; pages: number };

export type { User, UserPageAndLimitOutput };
