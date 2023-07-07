const db = require('../util/database');

module.exports = class CartItem {
  constructor(Id, qty ,productId,  userId) {
    this.id = id;
    this.qty
    this.productId = productId;
    this.userId = userId;
  }

  save() {
    return db.execute(
      'INSERT INTO cartItems (quantity, cartId, productId) VALUES (?, ?, ?, ?)',
      [this.qty, this.userId, this.productId ]
    );
  }

  static deleteById(id) {}

  static fetchCartProducts(productId) {
    return db.execute('SELECT * FROM cartItems WHERE cartItems.id', [userId]);
  }

  static fetchUserCart(userId) {
    return db.execute('SELECT productId FROM cartItems WHERE cartItems.id', [userId])
}

  static productExist(productId) {
    return db.execute(
      'SELECT * FROM cartItems WHERE productId = ?',
      [productId]
    )
  }

  static updateQuantity(productId, qty) {
    return db.execute(
      'SELECT * FROM cartItems WHERE productId = ?',
      [productId]
    )
  }
};
