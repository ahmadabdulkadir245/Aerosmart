const db = require('../util/database');

const Cart = require('./cart')

module.exports = class User {
    constructor(id, email, password,isAdmin) {
      this.id = id;
      this.email = email;
      this.password = password
      this.isAdmin = isAdmin
    }
    async  save() {
      const createUser = 'INSERT INTO users (email, password, isAdmin) VALUES (?, ?, ?)'
      const createCartSql = 'INSERT INTO carts (userId) VALUES (?)';
      try {
        const result = await db.execute(createUser, [ this.email, this.password, this.isAdmin ]);
        const id = await result[0].insertId
        if (!id) {
          throw new Error('Failed to get user ID');
        }
        await db.execute(createCartSql, [id]);
        // await db.execute(triggerSql);
      } catch (error) {
        console.error(error);
      }
    }
    static userExist(email) {
      return db.execute(
        'SELECT * FROM users WHERE email = ?',
        [email]
      )
    }
  }