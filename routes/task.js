const express = require('express');
const taskController = require('../controller/TaskController');

const router = express.Router();

router.post('/save', (req, res) => {
  taskController.save(req, res);
});

router.get('/list', (req, res) => {
  taskController.list(req, res);
});

router.get('/total', (req, res) => {
  taskController.total(req, res);
});

router.post('/delete', (req, res) => {
  taskController.remove(req, res);
});

router.get('/coupons', (req, res) => {
  taskController.coupons(req, res);
});

router.post('/edit', (req, res) => {
  taskController.edit(req, res);
});

module.exports = router;