import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Farah',
      email: 'farah@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
  ],
  products: [
    
  ],
};

export default data;
