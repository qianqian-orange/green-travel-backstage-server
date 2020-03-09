const express = require('express');
const axios = require('axios');
const Task = require('../model/Task');
const Coupon = require('../model/Coupon');
const taskController = require('../controller/TaskController');

const router = express.Router();

// router.post('/save', (req, res) => {
//   taskController.save(req, res);
// });

// router.get('/list', (req, res) => {
//   taskController.list(req, res);
// });

// router.get('/total', (req, res) => {
//   taskController.total(req, res);
// });

// router.post('/delete', (req, res) => {
//   taskController.remove(req, res);
// });

// router.get('/coupons', (req, res) => {
//   taskController.coupons(req, res);
// });

// router.post('/edit', (req, res) => {
//   taskController.edit(req, res);
// });

// proxy
router.post('/save', (req, res) => {
  axios.post('http://localhost:8080/green_travel/api/insertTask.action', req.body)
    .then((result) => {
      console.log('task save result: ', result.data);
      res.json(result.data);
    })
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
});

router.get('/total', (req, res) => {
  axios.get('http://localhost:8080/green_travel/api/totalTask.action', {
    params: req.query,
  }).then((result) => {
    console.log('task total result: ', result.data);
    res.json(result.data);
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});


// "aim": 0,
// "coupon": [],
// "integral": 1.0,
// "description": "1",
// "task_id": 1234564564,
// "growth": 1,
// "title": "asd",
// "type": 1
router.get('/list', (req, res) => {
  axios.get('http://localhost:8080/green_travel/api/totalTask.action', {
    params: req.query,
  }).then((result) => {
    console.log('task list result: ', result.data.code);
    const { code, data } = result.data;
    res.json({
      code,
      data: data.map(item => new Task({
        id: item.task_id,
        title: item.title,
        aim: item.aim,
        type: item.type,
        description: item.description,
        growth: item.growth,
        integral: item.integral,
        coupons: item.coupons,
      })),
    });
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

router.get('/coupons', (req, res) => {
  axios.get('http://localhost:8080/green_travel/api/getCouponByid.action', {
    params: req.query,
  }).then((result) => {
    console.log('task coupons result: ', result.data.code);
    const { code, data } = result.data; 
    res.json({
      code,
      data: data.map(item => new Coupon({
        id: item.co_id,
        integral: item.integral,
        description: item.description,
        day: item.day,
      })),
    });
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

router.post('/delete', (req, res) => {
  axios.post('http://localhost:8080/green_travel/api/deleteTask.action', req.body)
    .then((result) => {
      console.log('task delete result: ', result.data);
      res.json(result.data);
    })
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
});

router.post('/edit', (req, res) => {
  axios.post('http://localhost:8080/green_travel/api/updateTask.action', req.body)
    .then((result) => {
      console.log('task edit result: ', result.data);
      res.json(result.data);
    })
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
});

module.exports = router;