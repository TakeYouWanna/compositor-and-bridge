import { User } from '../models/user.model';

export const USER_DIMON: User = {
  name: 'Димон Начальник',
  children: [
    {
      name: 'Саша гусь',
      children: [],
    },
    {
      name: 'Арче',
      children: [
        {
          name: 'Серега',
          children: [],
        },
        {
          name: 'Колян',
          children: [],
        },
      ],
    },
  ],
};
