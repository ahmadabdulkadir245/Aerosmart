const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, image_url, description, price, category, quantity, user_id) {
    this.id = id;
    this.title = title;
    this.image_url = image_url;
    this.description = description;
    this.price = price;
    this.category = category
    this.quantity = quantity
    this.user_id = user_id;
  }

  save() {
    return db.execute(
      'INSERT INTO products (title, price, image_url, description,category, quantity, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [this.title, this.price, this.image_url, this.description, this.category, this.quantity, this.user_id]
    );
  }

  static deleteById(id) {
    return db.execute('DELETE FROM products WHERE products.id=?', [id])
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findAndCountAll(limit, offset) {
    return db.execute(`SELECT * FROM products LIMIT ${limit} OFFSET ${offset}`)
  }


  static async fetchProductsInCart(ids) {
    try {
      // ids should be an array of product_ids
      const placeholders = ids.map((id) => '?').join(',');
      const sql = `SELECT * FROM products WHERE id IN (${placeholders})`;
      const [rows, fields] = await db.execute(sql, ids);
      return rows;
    } catch (error) {
      console.error('Error fetching products in cart from the database:', error);
      throw new Error('Error fetching products in cart from the database');
    }
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  }

  updateById(id) {
    return db.execute(
      'UPDATE products SET title=?, price=?, image_url=?, description=?, category=?, quantity=?, user_id=? WHERE id = ?',
      [this.title, this.price, this.image_url, this.description, this.category, this.quantity, this.user_id, id]
    );
  }

  static totalSearchProduct(searchWord) {
    return db.execute(
      `SELECT * FROM products WHERE products.category REGEXP '${searchWord}'
      `
    );
  }

  static findCategory(word) {
    return db.execute('SELECT category FROM products WHERE products.title = ?', [word]);
  }

  static search(searchWord, perPage, offset) {
    return db.execute(
      `SELECT * FROM products WHERE products.category REGEXP '${searchWord}' OR products.title REGEXP '${searchWord}' 
      LIMIT ${perPage} OFFSET ${offset}
      `
    );
  }

  static searchSuggession(searchWord) {
    return db.execute(
      `SELECT * FROM products WHERE  products.category REGEXP '${searchWord}' OR products.title REGEXP '${searchWord}' LIMIT ${10} OFFSET ${0}
      `
    );
  }
};
