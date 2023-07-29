// cartItems.js
const db = require('../util/database');

class Wishlist {
  constructor(id,  product_id, user_id) {
    this.id = id;
    this.product_id = product_id;
    this.user_id = user_id;
  }

  async save() {
    const [result] = await db.execute(
      'INSERT INTO wishlist (product_id, user_id) VALUES ( ?, ?)',
      [this.product_id, this.user_id]
    );
    this.id = result.insertId;
  }

  static async fetchUserWishlist(user_id) {
    const [rows] = await db.execute(
      'SELECT * FROM wishlist WHERE user_id = ?',
      [user_id]
    );
    return rows;
  }

  static async productExist(product_id, user_id) {
    const [rows] = await db.execute(
      'SELECT * FROM wishlist WHERE product_id = ? AND user_id = ?',
      [product_id, user_id]
    );
    return rows;
  }

  static async findById(wishlist_id, user_id) {
    const [rows] = await db.execute('SELECT * FROM wishlist WHERE id = ? AND user_id = ?', [wishlist_id, user_id]);
    return rows[0];
  }
  
  static async deleteById(wishlist_id, user_id) {
    await db.execute('DELETE FROM wishlist WHERE id = ? AND user_id = ?', [wishlist_id, user_id]);
  }
}

module.exports = Wishlist;
