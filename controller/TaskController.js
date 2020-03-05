const Task = require('../model/Task');
const Pagination = require('../model/Pagination');
const taskService = require('../service/TaskService');

class Condition {
  constructor({
    type = -1,
  }) {
    this.type = +type;
  }
}

function save(req, res) {
  const task = new Task(req.body);
  taskService
    .save(task)
    .then(() => res.json({ code: 0 }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function list(req, res) {
  const condition = new Condition(req.query);
  const pagination = new Pagination(req.query);
  taskService
    .list({ condition, pagination })
    .then(data => res.json({ code: 0, data }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function total(req, res) {
  const condition = new Condition(req.query);
  taskService
    .total(condition)
    .then(data => res.json({ code: 0, data }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function remove(req, res) {
  const { ids } = req.body;
  taskService
    .remove(ids)
    .then(() => res.json({ code: 0 }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function coupons(req, res) {
  const { id } = req.query;
  taskService
    .coupons(id)
    .then(data => res.json({ code: 0, data }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function edit(req, res) {
  const task = new Task(req.body);
  taskService
    .edit(task)
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
  remove,
  coupons,
  edit,
};