const middlewares = require('@blocklet/sdk/lib/middlewares');
const router = require('express').Router();

router.use('/user', middlewares.session(), (req, res) => res.json(req.user || {}));

router.use('/data', (req, res) => {
  const defaultUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  };
  res.json(defaultUser);
});

router.use('/savaDate', (req, res) => {
  res.json({
    message: 'success',
  });
});

module.exports = router;
