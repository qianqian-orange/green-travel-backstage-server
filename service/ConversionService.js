const mysql = require('mysql');
const { query } = require('../init/mysql');

function list({ pagination, condition }) {
  const { currentPage, pageSize } = pagination;
  const { name } = condition;
  return query(`select c.*, m.path m_path, m.name m_name, m.status m_status, m.integral m_integral, m.stock m_stock, m.description m_description, u.name u_name from conversion c, user u, merchandise m where c.merchandise_id = m.id and c.user_id = u.id and c.exist = 0 and u.name like ${mysql.escape(`%${name}%`)} limit ?,?`, [
    (currentPage - 1) * pageSize,
    pageSize,
  ])
    .then(result => result)
    .catch(e => Promise.reject(e));
}

function total(condition) {
  const { name } = condition;
  return query(`select count(1) as total from conversion c, user u, merchandise m where c.merchandise_id = m.id and c.user_id = u.id and c.exist = 0 and u.name like ${mysql.escape(`%${name}%`)}`)
    .then((result) => result[0].total)
    .catch(e => Promise.reject(e));
}

function remove(ids) {
  const sql = `update conversion set exist = 1 where id in (${ids.map(() => '?').join(',')})`;
  return query(sql, ids);
}

module.exports = {
  list,
  total,
  remove,
};