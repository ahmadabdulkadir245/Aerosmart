const db = require('../util/database');

const Cart = require('./cart')

module.exports = class User {
    constructor(id, email, password,isAdmin, first_name, last_name) {
      this.id = id;
      this.email = email;
      this.password = password
      this.isAdmin = isAdmin
      this.first_name = first_name
      this.last_name = last_name
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
    static userEmailExist(email) {
      return db.execute(
        'SELECT * FROM users WHERE email = ?',
        [email]
      )
    }
    static userExist(id) {
      return db.execute(
        'SELECT * FROM users WHERE id = ?',
        [id]
      )
    }
    static async fetchUsers() {
      const [rows] = await db.execute(
        'SELECT * FROM users',
      );
      return rows;
    }
    static async fetchUser(id) {
      const [rows] = await db.execute(
        'SELECT * FROM users WHERE id = ?',
        [id]
      );
      return rows[0];
    }
    updateById(id) {
      return db.execute(
        'UPDATE users SET email=?, password=?, isAdmin=?, first_name=?, last_name=? WHERE id = ?',
        [this.email, this.password, this.isAdmin, this.first_name, this.last_name,  id]
      );
    }
    static async updateName(first_name, last_name, id) {
      await db.execute(
        'UPDATE users SET first_name = ?, last_name = ? WHERE id = ?',
        [first_name, last_name, id]
      );
    }
  }