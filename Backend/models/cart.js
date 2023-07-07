const db = require('../util/database');

module.exports = class Cart {
  constructor(id, userId) {
    this.id = id;
    this.userId = userId;
  }

  save() {
    return db.execute(
      'INSERT INTO carts (userId) VALUES (?)',
      [this.userId]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute('SELECT * FROM carts');
  }

  static findById(id) {
    return db.execute('SELECT * FROM carts WHERE carts.id = ?', [id]);
  }
};
