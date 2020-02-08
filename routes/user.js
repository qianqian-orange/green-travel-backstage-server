const express = require('express');
const router = express.Router();

router.get('/user', (req, res, next) => {
  const user = req.session.user;
  return res.json({ user });
});

module.exports = router;