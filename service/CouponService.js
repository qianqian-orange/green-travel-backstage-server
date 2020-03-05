const { query } = require('../init/mysql');
const Coupon = require('../model/Coupon');

function save(coupon) {
  return query('insert into coupon(integral, day, description) values(?, ?, ?)', [
    coupon.integral,
    coupon.day,
    coupon.description,
  ]);
}

function list({ pagination }) {
  const { currentPage, pageSize } = pagination;
  return query(`select * from coupon where exist = 0 limit ?,?`, [
    (currentPage - 1) * pageSize,
    pageSize,
  ])
    .then(result => result.map(item => new Coupon(item)))
    .catch(e => Promise.reject(e));
}

function total() {
  return query(`select count(1) as total from coupon where exist = 0`)
    .then((result) => result[0].total)
    .catch(e => Promise.reject(e));
}

function remove(ids) {
  const sql = `update coupon set exist = 1 where id in (${ids.map(() => '?').join(',')})`;
  return query(sql, ids);
}

function edit(coupon) {
  return query('update coupon set integral = ?, day = ?, description = ? where id = ?', [
    coupon.integral,
    coupon.day,
    coupon.description,
    coupon.id,
  ]);
}

function all() {
  return query('select * from coupon where exist = 0 order by integral asc')
    .then(result => result.map(item => new Coupon(item)))
    .catch(e => Promise.reject(e));
}

module.exports = {
  save,
  list,
  total,
  remove,
  edit,
  all,
};