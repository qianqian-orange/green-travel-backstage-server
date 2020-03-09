const express = require('express');
const axios = require('axios');
const Coupon = require('../model/Coupon');
const couponController = require('../controller/CouponController');

const router = express.Router();

// router.post('/save', (req, res) => {
//   couponController.save(req, res);
// });

// router.get('/list', (req, res) => {
//   couponController.list(req, res);
// });

// router.get('/total', (req, res) => {
//   couponController.total(req, res);
// });

// router.post('/delete', (req, res) => {
//   couponController.remove(req, res);
// });

// router.post('/edit', (req, res) => {
//   couponController.edit(req, res);
// });

// router.get('/all', (req, res) => {
//   couponController.all(req, res);
// });

// proxy
router.post('/save', (req, res) => {
  axios.post('http://localhost:8080/green_travel/api/insertCoupon.action', req.body)
    .then((result) => {
      console.log('coupon save result: ', result.data);
      res.json(result.data);
    })
    .catch((e) => {
      console.log(e);
      res.send({ code: 1 });
    });
});

router.post('/delete', (req, res) => {
  axios.post('http://localhost:8080/green_travel/api/deleteCoupon.action', req.body)
    .then((result) => {
      console.log('coupon delete result: ', result.data);
      res.json(result.data);
    })
    .catch((e) => {
      console.log(e);
      res.send({ code: 1 });
    });
});

// "co_id": 1,
// "day": 1,
// "description": "是好东西66",
// "integral": 123.6,
// "exist": 0
router.get('/list', (req, res) => {
  axios.get('http://localhost:8080/green_travel/api/getAllCoupon.action', {
    params: req.query,
  }).then((result) => {
    console.log('coupon list result: ', result.data.code);
    const { code, data } = result.data;
    res.json({
      code,
      data: data.map(item => new Coupon({
        id: item.co_id,
        day: item.day,
        description: item.description,
        integral: item.integral,
      })),
    });
  }).catch((e) => {
    console.log(e);
    res.send({ code: 1 });
  });
});

router.get('/total', (req, res) => {
  axios.get('http://localhost:8080/green_travel/api/totalCoupons.action', {
    params: req.query,
  }).then((result) => {
    console.log('coupon all result: ', result.data);
    res.json(result.data);
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

router.post('/edit', (req, res) => {
  axios.post('http://localhost:8080/green_travel/api/updateCoupon.action', req.body)
    .then((result) => {
      console.log('coupon edit result: ', result.data);
      res.json(result.data);
    })
    .catch((e) => {
      console.log(e);
      res.send({ code: 1 });
    });
});

router.get('/all', (req, res) => {
  axios.get('http://localhost:8080/green_travel/api/getAllCoupons.action', {
    params: req.query,
  }).then((result) => {
    console.log('coupon all result: ', result.data.code);
    const { code, data } = result.data;
    res.json({
      code,
      data: data.map(item => new Coupon({
        id: item.co_id,
        day: item.day,
        description: item.description,
        integral: item.integral,
      })),
    });
  }).catch((e) => {
    console.log(e);
    res.send({ code: 1 });
  });
});

module.exports = router;