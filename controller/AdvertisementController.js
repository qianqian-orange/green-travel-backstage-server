const Advertisement = require('../model/Advertisement');
const Pagination = require('../model/Pagination');
const advertisementService = require('../service/AdvertisementService');

class CreateTime {
  constructor({
    max = '',
    min = '',
  }) {
    this.max = max;
    this.min = min;
  }
}

class Condition {
  constructor({
    create_time = {},
    status = -1,
  }) {
    this.create_time = new CreateTime(create_time);
    this.status = +status;
  }
}

function save(req, res, path) {
  const advertisement = new Advertisement({ path });
  advertisementService
    .save(advertisement)
    .then(() => {
      res.json({
        code: 0,
        path,
      });
    })
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function list(req, res) {
  const { create_time, status } = req.query;
  const pagination = new Pagination(req.query);
  const condition = new Condition({ status, create_time: JSON.parse(create_time) });
  advertisementService
    .list({
      pagination,
      condition,
    })
    .then(result => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function total(req, res) {
  const condition = new Condition(req.query);
  advertisementService
    .total(condition)
    .then(result => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function edit(req, res) {
  const advertisement = new Advertisement(req.body);
  advertisementService
    .edit(advertisement)
    .then(() => res.json({ code: 0 }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function remove(req, res) {
  const { ids } = req.body;
  advertisementService
    .remove(ids)
    .then(() => res.json({ code: 0 }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

module.exports = {
  save,
  list,
  total,
  edit,
  remove,
};