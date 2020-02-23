const mysql = require('mysql');
const PublicWelfare = require('../model/PublicWelfare');
const { query } = require('../init/mysql');

function list({ pagination, condition }) {
  const { currentPage, pageSize } = pagination;
  const { name } = condition;
  return query(`select p.*, u.name from public_welfare p inner join user u on u.id = p.user_id where exist = 0 and name like ${mysql.escape(`%${name}%`)} limit ?,?`, [
    (currentPage - 1) * pageSize,
    pageSize,
  ])
    .then((result) => {
      const list = [];
      result.forEach((element) => {
        list.push({
          ...new PublicWelfare(element),
          name: element.name,
        });
      });
      return list;
    })
    .catch(e => Promise.reject(e));
}

function total(condition) {
  const { name } = condition;
  return query(`select count(1) as total from public_welfare p inner join user u on u.id = p.user_id where p.exist = 0 and u.name like ${mysql.escape(`%${name}%`)}`)
    .then((result) => result[0].total)
    .catch(e => Promise.reject(e));
}

function remove(ids) {
  const sql = `update public_welfare set exist = 1 where id in (${ids.map(() => '?').join(',')})`;
  return query(sql, ids);
}

function audit({ status, reason, id }) {
  return query('update public_welfare set status = ?, reason = ? where id = ? and exist = 0 and destory = 0', [
    status,
    reason,
    id,
  ]);
}

module.exports = {
  list,
  total,
  remove,
  audit,
};