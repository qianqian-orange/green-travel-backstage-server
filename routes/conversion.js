const express = require('express');
const axios = require('axios');
const conversionController = require('../controller/ConversionController');

const router = express.Router();

router.get('/list', (req, res) => {
  conversionController.list(req, res);
});

router.get('/total', (req, res) => {
  conversionController.total(req, res);
});

router.post('/delete', (req, res) => {
  conversionController.remove(req, res);
});

// "u_name": "zhengzekai",
// "quantity": 1,
// "create_time": "2020-02-22 00:00:00",
// "com_id": 44,
// "serial_number": "green_travel-C6X2KFzoBN",
// "com_image": "/upload/merchandise/2020-02-14/53cf3988194d422c869d1fb5f26d5aba.jpg",
// "exist": 0,
// "user_id": 48142178,
// "com_intro": "小可爱",
// "com_value": 32.0,
// "order_id": 304348827,
// "com_name": "蓝猫",
// "status": 1,
// "com_stock": 221
// router.get('/list', (req, res) => {
//   axios.get('http://localhost:8080/green_travel/api/getAllorder.action', {
//     params: req.query,
//   }).then((result) => {
//     const { code, data } = result.data;
//     console.log(code);
//     res.json({
//       code,
//       data: data.map(item => ({
//         id: item.order_id,
//         merchandise_id: item.com_id,
//         serial_number: item.serial_number,
//         user_id: item.user_id,
//         quantity: item.quantity,
//         create_time: item.create_time,
//         exist: item.exist,
//         m_path: item.com_image,
//         m_name: item.com_name,
//         m_status: item.status,
//         m_integral: item.com_value,
//         m_stock: item.com_stock,
//         m_description: item.com_intro,
//         u_name: item.u_name,
//       })),
//     })
//   }).catch((e) => {
//     console.log(e);
//     res.json({ code: 1 });
//   });
// });

// router.get('/total', (req, res) => {
//   axios.get('http://localhost:8080/green_travel/api/getTotalorder.action', {
//     params: req.query,
//   }).then((result) => {
//     const { data, code } = result.data;
//     console.log('converseion total result: ', data, code);
//     res.json({ code, data });
//   }).catch((e) => {
//     console.log(e);
//     res.json({ code: 1 });
//   });
// });

// router.post('/delete', (req, res) => {
//   console.log(req.body);
//   axios.post('http://localhost:8080/green_travel/api/deleteOrders.action', req.body)
//     .then((result) => {
//       const { code } = result.data;
//       console.log('conversion delete result: ', code);
//       res.json({ code });
//     }).catch((e) => {
//       console.log(e);
//       res.json({ code : 1 });
//     });
// });

module.exports = router;