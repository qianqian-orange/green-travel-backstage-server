const publicWelfareService = require('../service/PublicWelfareService');
const Pagination = require('../model/Pagination');
const PublicWelfare = require('../model/PublicWelfare');

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
  publicWelfareService
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
  publicWelfareService
    .total(condition)
    .then(result => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function remove(req, res) {
  const { ids } = req.body;
  publicWelfareService
    .remove(ids)
    .then(() => res.json({ code: 0 }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function audit(req, res) {
  const publicWelfare = new PublicWelfare(req.body);
  publicWelfareService
    .audit(publicWelfare)
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
  audit,
};