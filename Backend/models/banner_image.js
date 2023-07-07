const db = require('../util/database');

module.exports = class Banner {
  constructor(id,  category, image_url, user_id) {
    this.id = id;
    this.category = category;
    this.image_url = image_url;
    this.user_id = user_id;
  }

  save() {
    return db.execute(
      'INSERT INTO banners ( category, image_url, user_id) VALUES (?, ?, ?)',
      [  this.category, this.image_url, this.user_id]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute('SELECT * FROM banners');
  }

//   static findById(id) {
//     return db.execute('SELECT * FROM banners WHERE banners.id = ?', [id]);
//   }
};
