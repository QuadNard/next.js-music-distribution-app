const NextAuth = require('next-auth');
const PrismaAdapter = require('@nextauth/prisma');

module.exports = NextAuth({
  providers: [
    {
      id: 'email',
      name: 'Email',
      type: 'email',
      adapter: PrismaAdapter,
    },
    {
      id: 'password',
      name: 'Password',
      type: 'password',
      adapter: PrismaAdapter,
    },
  ],
});