const express = require('express');
const Advertisement = require('../model/Advertisement');
const axios = require('axios');
const advertisementController = require('../controller/AdvertisementController');

const router = express.Router();

// router.get('/list', (req, res) => {
//   advertisementController.list(req, res);
// });

// router.get('/total', (req, res) => {
//   advertisementController.total(req, res);
// });

// router.post('/edit', (req, res) => {
//   advertisementController.edit(req, res);
// });

// router.post('/delete', (req, res) => {
//   advertisementController.remove(req, res);
// });

/* proxy */
// "ad_id": 5,
// "ad_path": "1",
// "ad_date": "2020-02-03",
// "ad_link": "1",
// "ad_status": 1,
// "ad_exist": 0
router.get('/list', (req, res) => {
  console.log(req.query);
  axios.get('http://localhost:8080/green_travel/api/getAdvertisement.action', {
    params: req.query,
  }).then((result) => {
    const { code, data } = result.data;
    res.json({
      code,
      data: data.map(item => new Advertisement({
        id: item.ad_id,
        path: item.ad_path,
        outside_link: item.ad_link,
        create_time: item.ad_date,
        status: item.ad_status,
        exist: item.ad_exist,
      })),
    });
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

router.get('/total', (req, res) => {
  axios.get('http://localhost:8080/green_travel/api/totalAdvertisement.action', {
    params: req.query,
  }).then((result) => {
    const { code, data } = result.data;
    console.log(code, data);
    res.json({ code, data });
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

router.post('/edit', (req, res) => {
  axios.post('http://localhost:8080/green_travel/api/updateAdvertisement.action', req.body)
    .then((result) => {
      const { code } = result.data;
      console.log(code);
      res.json({ code });
    })
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
});

router.post('/delete', (req, res) => {
  axios.post('http://localhost:8080/green_travel/api/deleteAllAdvertisement.action', req.body)
    .then((result) => {
      const { code } = result.data;
      console.log(code);
      res.json({ code });
    })
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
});

module.exports = router;