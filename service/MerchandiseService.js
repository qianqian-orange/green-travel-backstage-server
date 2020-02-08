const mysql = require('mysql');
const query = require('../init/mysql');
const Merchandise = require('../model/Merchaindise');

function save(merchandise) {
  return query('insert into merchandise(name, description, path, integral, create_time, exist) values(?, ?, ?, ?, ?, ?)', [
    merchandise.name,
    merchandise.description,
    merchandise.path,
    merchandise.integral,
    merchandise.create_time,
    merchandise.exist,
  ]);
}

function list({ pagination, condition }) {
  const { currentPage, pageSize } = pagination;
  const { name } = condition;
  return query(`select * from merchandise where exist = 0 and name like ${mysql.escape(`%${name}%`)} limit ?,?`, [
    (currentPage - 1) * pageSize,
    pageSize,
  ])
    .then((result) => {
      const merchandiseList = [];
      result.forEach((element) => {
        merchandiseList.push(new Merchandise(element));
      });
      return merchandiseList;
    })
    .catch(e => Promise.reject(e));
}

function remove(ids) {
  const sql = `update merchandise set exist = 1 where id in (${ids.map(() => '?').join(',')})`;
  return query(sql, ids);
}

function edit(merchandise) {
  return query('update merchandise set name = ?, description = ?, path = ?, integral = ? where id = ?', [
    merchandise.name,
    merchandise.description,
    merchandise.path,
    merchandise.integral,
    merchandise.id,
  ]);
}

function total(condition) {
  const { name } = condition;
  return query(`select count(1) as total from merchandise where exist = 0 and name like ${mysql.escape(`%${name}%`)}`)
    .then((result) => result[0].total)
    .catch(e => Promise.reject(e));
}

module.exports = {
  save,
  list,
  edit,
  total,
  remove,
};