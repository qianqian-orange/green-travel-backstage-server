const express = require('express');
const publicWelfareController = require('../controller/PublicWelfareController');

const router = express.Router();

router.get('/total', (req, res) => {
  publicWelfareController.total(req, res);
});

router.get('/list', (req, res) => {
  publicWelfareController.list(req, res);
});

router.post('/delete', (req, res) => {
  publicWelfareController.remove(req, res);
});

router.post('/audit', (req, res) => {
  publicWelfareController.audit(req, res);
})

module.exports = router;