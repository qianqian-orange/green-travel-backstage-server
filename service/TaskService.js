const moment = require('moment');
const Task = require('../model/Task');
const Coupon = require('../model/Coupon');
const { query, transaction } = require('../init/mysql');

async function save(task) {
  try {
    const {
      title,
      description,
      type,
      integral,
      growth,
      aim,
      coupons,
    } = task;
    const date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    await query('insert into task(title, description, type, integral, growth, aim, create_time) values (?, ?, ?, ?, ?, ?, ?)', [
      title,
      description,
      type,
      integral,
      growth,
      aim,
      date,
    ]);
    const result = await query('select id from task where create_time = ? limit 1', date);
    if (result.length === 0) return Promise.reject('找不到此任务！');
    if (coupons.length === 0) return;
    const task_id = result[0].id;
    const sql = `insert into task_coupon(task_id, coupon_id) values ${coupons.map(item => `(${task_id}, ${item})`).join(',')}`;
    await query(sql);
  } catch(e) {
    return Promise.reject(e);
  }
}

function list({ pagination, condition }) {
  const { pageSize, currentPage } = pagination;
  const { type } = condition;
  let sql = 'select * from task where exist = 0';
  if (type !== -1) {
    sql = `${sql} and type = ${type}`;
  }
  sql = `${sql} limit ?, ?`;
  return query(sql, [
      (currentPage - 1) * pageSize,
      pageSize,
    ])
      .then(result => result.map(item => new Task(item)))
      .catch(e => Promise.reject(e));
}

function total({ type }) {
  let sql = 'select count(1) as total from task where exist = 0';
  if (type !== -1) {
    sql = `${sql} and type = ${type}`;
  }
  return query(sql)
    .then((result) => result[0].total)
    .catch(e => Promise.reject(e));
}

function remove(ids) {
  const sql = `update task set exist = 1 where id in (${ids.map(() => '?').join(',')})`;
  return query(sql, ids);
}

function coupons(id) {
  return query('select c.* from task_coupon tc, task t, coupon c where t.id = tc.task_id and tc.coupon_id = c.id and t.id = ?', [id])
    .then(result => result.map(item => new Coupon(item)))
    .catch(e => Promise.reject(e));  
}

async function edit(task) {
  const execute = [
    ['update task set title = ?, aim = ?, type = ?, description = ?, growth = ?, integral = ? where id = ?', [
      task.title,
      task.aim,
      task.type,
      task.description,
      task.growth,
      task.integral,
      task.id,
    ]],
  ];
  if (task.coupons.length !== 0) {
    execute.push(['delete from task_coupon where task_id = ?', [task.id]]);
    execute.push([`insert into task_coupon(task_id, coupon_id) values ${task.coupons.map(item => `(${task.id}, ${item})`)}`, []]);
  }
  await transaction(execute);
}

module.exports = {
  save,
  list,
  total,
  remove,
  coupons,
  edit,
};