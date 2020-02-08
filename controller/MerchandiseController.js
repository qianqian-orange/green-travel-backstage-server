const Merchandise = require('../model/Merchaindise');
const Pagination = require('../model/Pagination');
const merchandiseService = require('../service/MerchandiseService');

class Condition {
  constructor({
    name = '',
  }) {
    this.name = name;
  }
}

function save(req, res) {
  const merchandise = new Merchandise(req.body);
  merchandiseService
    .save(merchandise)
    .then(() => res.json({ code: 0 }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function list(req, res) {
  const pagination = new Pagination(req.query);
  const condition = new Condition(req.query);
  merchandiseService
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

// console.log(result.affectedRows);
function remove(req, res) {
  const { ids } = req.body;
  merchandiseService
    .remove(ids)
    .then(() => res.json({ code: 0 }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
} 

function edit(req, res) {
  const merchandise = new Merchandise(req.body);
  merchandiseService
    .edit(merchandise)
    .then(() => res.json({ code: 0 }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function total(req, res) {
  const condition = new Condition(req.query);
  merchandiseService
    .total(condition)
    .then(result => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

module.exports = {
  save,
  list,
  edit,
  total,
  remove,
};