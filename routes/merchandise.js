const express = require('express');
const axios = require('axios');
const Merchandise = require('../model/Merchaindise');
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

/* proxy */
// "com_id": 235,
// "com_name": "acsd21",
// "com_intro": "qwe12",
// "com_value": 423,
// "com_image": "wcdw",
// "create_time": "2020-02-06",
// "exist": 0,
// "com_stock": 0,
// "status": 1
// router.post('/save', (req, res) => {
//   console.log(req.body);
//   axios.post('http://localhost:8080/green_travel/api/insertCommodity.action', req.body)
//     .then((result) => {
//       const { code } = result.data;
//       console.log(code);
//       res.json({ code });
//     }).catch((e) => {
//       console.log(e);
//       res.json({ code: 1 });
//     });
// });

// router.get('/list', (req, res) => {
//   console.log(req.query);
//   axios.get('http://localhost:8080/green_travel/api/likeCommodity.action', {
//     params: req.query,
//   })
//   .then((result) => {
//     const { code, data } = result.data;
//     res.json({
//       code,
//       data: data.map(item => new Merchandise({
//         id: item.com_id,
//         name: item.com_name,
//         description: item.com_intro,
//         integral: item.com_value,
//         path: item.com_image,
//         create_time: item.create_time,
//         exist: item.exist,
//         stock: item.com_stock,
//         status: item.status,
//       })),
//     });
//   }).catch((e) => {
//     console.log(e);
//     res.json({ code: 1 });
//   });
// });

// router.post('/delete', (req, res) => {
//   console.log(req.body);
//   axios.post('http://localhost:8080/green_travel/api/deleteAllCommodity.action', req.body)
//     .then((result) => {
//       const { code } = result.data;
//       console.log(code);
//       res.json({ code });
//     }).catch((e) => {
//       console.log(e);
//       res.json({ code : 1 });
//     });
// });

// router.post('/edit', (req, res) => {
//   console.log(req.body);
//   axios.post('http://localhost:8080/green_travel/api/updateCommodity.action', req.body)
//     .then((result) => {
//       const { code } = result.data;
//       console.log(code);
//       res.json({ code });
//     }).catch((e) => {
//       console.log(e);
//       res.json({ code: 1 });
//     });
// });

// router.get('/total', (req, res) => {
//   console.log(req.query);
//   axios.get('http://localhost:8080/green_travel/api/totalCommodity.action', {
//     params: req.query,
//   }).then((result) => {
//       const { code, data } = result.data;
//       console.log(code, data);
//       res.json({ code, data });
//     }).catch((e) => {
//       console.log(e);
//       res.json({ code: 1 });
//     });
// });

module.exports = router;