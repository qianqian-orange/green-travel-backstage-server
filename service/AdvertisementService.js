const mysql = require('mysql');
const query = require('../init/mysql');
const Advertisement = require('../model/Advertisement');

function save(advertisement) {
  return query('insert into advertisement(path, create_time, outside_link, status) values(?, ?, ?, ?)', [
    advertisement.path,
    advertisement.create_time,
    advertisement.outside_link,
    advertisement.status,
  ]);
}

function list({ pagination, condition }) {
  const { currentPage, pageSize } = pagination;
  const { create_time: { max, min }, status } = condition;
  let sql = 'select * from advertisement where exist = 0';
  if (status !== -1) {
    sql = `${sql} and status = ${mysql.escape(status)}`;
  }
  if (min !== '') {
    sql = `${sql} and create_time >= ${mysql.escape(min)}`;
  }
  if (max !== '') {
    sql = `${sql} and create_time <= ${mysql.escape(max)}`;
  }
  sql = `${sql} limit ?, ?`;
  return query(sql, [
    (currentPage - 1) * pageSize,
    pageSize,
  ])
    .then((result) => {
      const advertisementList = [];
      result.forEach((element) => {
        advertisementList.push(new Advertisement(element));
      });
      return advertisementList;
    })
    .catch(e => Promise.reject(e));
}

function total(condition) {
  const { create_time: { max, min }, status } = condition;
  let sql = 'select count(1) as total from advertisement where exist = 0';
  if (status !== -1) {
    sql = `${sql} and status = ${mysql.escape(status)}`;
  }
  if (min !== '') {
    sql = `${sql} and create_time >= ${min}`;
  }
  if (max !== '') {
    sql = `${sql} and create_time <= ${max}`;
  }
  return query(sql)
    .then((result) => result[0].total)
    .catch(e => Promise.reject(e));
}

function edit(advertisement) {
  return query('update advertisement set outside_link = ?, status = ?, path = ? where id = ?', [
    advertisement.outside_link,
    advertisement.status,
    advertisement.path,
    advertisement.id,
  ]);
}

function remove(ids) {
  const sql = `update advertisement set exist = 1 where id in (${ids.map(() => '?').join(',')})`;
  return query(sql, ids);
}

module.exports = {
  save,
  list,
  total,
  edit,
  remove,
};