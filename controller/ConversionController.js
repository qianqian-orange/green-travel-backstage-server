const Pagination = require('../model/Pagination');
const conversionService = require('../service/ConversionService');

class Condition {
  constructor({
    name = '',
  }) {
    this.name = name;
  }
}

function list(req, res) {
  const pagination = new Pagination(req.query);
  const condition = new Condition(req.query);
  conversionService
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
  conversionService
    .total(condition)
    .then(result => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function remove(req, res) {
  const { ids } = req.body;
  conversionService
    .remove(ids)
    .then(() => res.json({ code: 0 }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

module.exports = {
  list,
  total,
  remove,
};