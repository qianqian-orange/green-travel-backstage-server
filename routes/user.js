const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  const user = req.session.user;
  if (user) res.json({ code: 0, user });
  else res.json({ code: 1 });
});

module.exports = router;