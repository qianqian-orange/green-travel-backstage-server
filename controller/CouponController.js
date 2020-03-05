const Coupon = require('../model/Coupon');
const Pagination = require('../model/Pagination');
const couponService = require('../service/CouponService');

function save(req, res) {
  const coupon = new Coupon(req.body);
  couponService
    .save(coupon)
    .then(() => res.json({ code: 0 }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function list(req, res) {
  const pagination = new Pagination(req.query);
  couponService
    .list({
      pagination,
    })
    .then(result => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function total(req, res) {
  couponService
    .total()
    .then(result => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function remove(req, res) {
  const { ids } = req.body;
  couponService
    .remove(ids)
    .then(() => res.json({ code: 0 }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function edit(req, res) {
  const coupon = new Coupon(req.body);
  couponService
    .edit(coupon)
    .then(() => res.json({ code: 0 }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function all(req, res) {
  couponService
    .all()
    .then(result => res.json({ code: 0, data: result }))
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
  edit,
  all,
};