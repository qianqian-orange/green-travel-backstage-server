const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const client = require('./init/redis');
require('./init/mysql');
const uploadRouter = require('./routes/upload');
const merchandiseRouter = require('./routes/merchandise');
const advertisementRouter = require('./routes/advertisement');
const conversionRouter = require('./routes/conversion');
const publicWelfareRouter = require('./routes/publicWelfare');
const couponRouter = require('./routes/coupon');
const taskRouter = require('./routes/task');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');

const app = express();

/* favicon */
app.use(favicon(path.join(__dirname, './public/favicon.ico')));
/* static */
app.use('/admin/static/', express.static(path.join(__dirname, './public/static')));
app.use('/upload/', express.static(path.join(__dirname, './upload')));

app.use('/admin/api/upload', uploadRouter);

/* application/x-www-form-urlencoded */
app.use(express.urlencoded({ extended: false }));
/* application/json */
app.use(express.json());

/* TODO: domain后期要去掉 */
/* session */
app.use(session({
  cookie: {
    sameSite: 'strict', // will set the SameSite attribute to Strict for strict same site enforcement
    // secure: 如果设置为true,那么只能是https请求
  },
  secret: 'green travel backstage',
  resave: false,
  saveUninitialized: true,
  store: new redisStore({ client }),
}));

app.use('/admin/api', userRouter);
app.use('/admin/api', authRouter);
app.use('/admin/api', (req, res, next) => {
  const user = req.session.user;
  if (!user) return res.send('you can\'t do anything without login！');
  next();
});
app.use('/admin/api/merchandise', merchandiseRouter);
app.use('/admin/api/advertisement', advertisementRouter);
app.use('/admin/api/conversion', conversionRouter);
app.use('/admin/api/publicWelfare', publicWelfareRouter);
app.use('/admin/api/coupon', couponRouter);
app.use('/admin/api/task', taskRouter);

app.use((req, res) => {
  fs.readFile(path.join(__dirname, './public/index.html'), 'utf-8', (err, data) => {
    if (err) return res.send('server error!');
    res.setHeader('Content-Type', 'text/html');
    return res.send(data);
  });
});

app.listen(3000, () => {
  console.log('green travel backstage server started at port 3000!');
});