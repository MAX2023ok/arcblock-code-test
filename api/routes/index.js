const middlewares = require('@blocklet/sdk/lib/middlewares');
const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const prismaClient = new PrismaClient();

router.use('/user', middlewares.session(), (req, res) => res.json(req.user || {}));

router.use('/data', async (req, res) => {
  const defaultUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  };
  const users = await prismaClient.user.findMany();
  if (users.length === 0) {
    await prismaClient.user.create({
      data: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
      },
    });
    res.json(defaultUser);
    return;
  }
  res.json(users[0]);
});

router.use('/savaDate', async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.json({
      message: 'sava data error',
    });
    return;
  }
  const users = await prismaClient.user.findMany();
  if (users.length === 0) {
    await prismaClient.user.create({
      data: {
        name,
        email,
        phone,
      },
    });
  } else {
    await prismaClient.user.update({
      where: {
        id: users[0].id,
      },
      data: {
        name,
        email,
        phone,
      },
    });
  }
  res.json({
    message: 'success',
  });
});

module.exports = router;
