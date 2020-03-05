const express = require('express');
const couponController = require('../controller/CouponController');

const router = express.Router();

router.post('/save', (req, res) => {
  couponController.save(req, res);
});

router.get('/list', (req, res) => {
  couponController.list(req, res);
});

router.get('/total', (req, res) => {
  couponController.total(req, res);
});

router.post('/delete', (req, res) => {
  couponController.remove(req, res);
});

router.post('/edit', (req, res) => {
  couponController.edit(req, res);
});

router.get('/all', (req, res) => {
  couponController.all(req, res);
});

module.exports = router;