import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

const generateHashedPassword = () => bcrypt.hashSync('coder123', 10);

export const generateUsers = (count = 1) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 70 }),
      password: generateHashedPassword(),
      role: faker.helpers.arrayElement(['user', 'admin']),
      pets: [],
    });
  }

  return users;
};
