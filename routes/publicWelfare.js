const express = require('express');
const axios = require('axios');
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
});

// "reason": "",
// "create_time": "2020-02-05 00:00:00",
// "destory": 0,
// "end_time": "2020-02-29 00:00:00",
// "description": "捐出你的爱",
// "title": "献出你的爱心吧",
// "exist": 0,
// "path": "14/53cf3988194d422c869d1fb5f26d5aba.jpg",
// "pw_id": 32312,
// "user_id": 123456,
// "integral": 22.0,
// "name": "kkk",
// "status": 0

// router.get('/list', (req, res) => {
//   axios.get('http://localhost:8080/green_travel/api/getAllPublicWelfare.action', {
//     params: req.query,
//   }).then((result) => {
//     const { code, data } = result.data;
//     console.log('publicWelfare list result: ', code, data);
//     res.json({
//       code,
//       data: data.map((item) => ({
//         id: item.pw_id,
//         user_id: item.user_id,
//         reason: item.reason,
//         title: item.title,
//         description: item.description,
//         integral: item.integral,
//         create_time: item.create_time,
//         end_time: item.end_time,
//         path: item.path,
//         name: item.name,
//         status: item.status,
//         destory: item.destory,
//         exist: item.exist,
//       })),
//     });
//   }).catch((e) => {
//     console.log(e);
//     res.json({ code: 1 });
//   });
// });

// router.get('/total', (req, res) => {
//   axios.get('http://localhost:8080/green_travel/api/totalPublicWelfare.action', {
//     params: req.query,
//   }).then((result) => {
//     const { code, data } = result.data;
//     console.log('publicWelfare total result: ', code, data);
//     res.json({ code, data });
//   }).catch((e) => {
//     console.log(e);
//     res.json({ code: 1 });
//   });
// });

// router.post('/delete', (req, res) => {
//   axios.post('http://localhost:8080/green_travel/api/deletePublicWelfare.action', req.body)
//     .then((result) => {
//       const { code } = result.data;
//       console.log('publicWelfare delete reuslt: ', code);
//       res.json({ code });
//     })
//     .catch((e) => {
//       console.log(e);
//       res.json({ code: 1 });
//     });
// });

// router.post('/audit', (req, res) => {
//   axios.post('http://localhost:8080/green_travel/api/updateStatus.action', req.body)
//     .then((result) => {
//       const { code } = result.data;
//       console.log('publicWelfare audit reuslt: ', code);
//       res.json({ code });
//     })
//     .catch((e) => {
//       console.log(e);
//       res.json({ code: 1 });
//     });
// });

module.exports = router;