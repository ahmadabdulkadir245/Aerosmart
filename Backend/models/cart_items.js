// cartItems.js
const db = require('../util/database');

class CartItems {
  constructor(id, quantity, product_id, user_id) {
    this.id = id;
    this.quantity = quantity;
    this.product_id = product_id;
    this.user_id = user_id;
  }

  async save() {
    const [result] = await db.execute(
      'INSERT INTO cart_items (quantity, product_id, user_id) VALUES (?, ?, ?)',
      [this.quantity, this.product_id, this.user_id]
    );
    this.id = result.insertId;
  }

  static async fetchUserCart(user_id) {
    const [rows] = await db.execute(
      'SELECT * FROM cart_items WHERE user_id = ?',
      [user_id]
    );
    return rows;
  }

  static async productExist(product_id, user_id) {
    const [rows] = await db.execute(
      'SELECT * FROM cart_items WHERE product_id = ? AND user_id = ?',
      [product_id, user_id]
    );
    return rows;
  }

  static async updateQuantity(cartItem_id, newQuantity) {
    await db.execute(
      'UPDATE cart_items SET quantity = ? WHERE id = ?',
      [newQuantity, cartItem_id]
    );
  }

  static async findById(user_id, cart_item_id) {
    const [rows] = await db.execute('SELECT * FROM cart_items WHERE id = ? AND user_id = ?', [cart_item_id, user_id]);
    return rows[0];
  }
  
  static async deleteById(user_id, cart_item_id) {
    await db.execute('DELETE FROM cart_items WHERE id = ? AND user_id = ?', [cart_item_id, user_id]);
  }
  static async delete(id) {
    await db.execute('DELETE FROM cart_items WHERE product_id = ?', [id]);
  }
}

module.exports = CartItems;
