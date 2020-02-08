const express = require('express');
const axios = require('axios');
const router = express.Router();

const { GITHUB_OAUTH_URL, CLIENT_ID, CLIENT_SECRET } = require('../config/auth');

router.get('/login', (req, res, next) => {
  return res.redirect(GITHUB_OAUTH_URL);
});

router.get('/logout', (req, res, next) => {
  req.session.user = null;
  return res.send();
});

router.get('/auth', async (req, res, next) => {
  const { code } = req.query;
  if (!code) {
    return res.send('the code is lost!');
  }
  let result = await axios.post('https://github.com/login/oauth/access_token', {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
  }, {
    headers: {
      Accept: 'application/json',
    },
  });
  if (result.status !== 200) return res.send('github auth fail!');
  if (result.data.error) return res.send('the code is expired!');
  const { token_type, access_token } = result.data;
  result = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  });
  if (result.status !== 200) return res.send('get user information fail!');
  req.session.user = result.data;
  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '/';
  return res.redirect(url);
});

module.exports = router;