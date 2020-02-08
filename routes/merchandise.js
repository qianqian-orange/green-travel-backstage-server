const express = require('express');
const merchandiseController = require('../controller/MerchandiseController');
const router = express.Router();

router.post('/save', (req, res) => {
  merchandiseController.save(req, res);
});

router.get('/list', (req, res) => {
  merchandiseController.list(req, res);
});

router.post('/delete', (req, res) => {
  merchandiseController.remove(req, res);
});

router.post('/edit', (req, res) => {
  merchandiseController.edit(req, res);
});

router.get('/total', (req, res) => {
  merchandiseController.total(req, res);
});

module.exports = router;