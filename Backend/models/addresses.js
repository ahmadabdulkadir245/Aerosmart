// address.js
const db = require('../util/database');

class Address {
  constructor(id, user_id, first_name, last_name, address_line_1, address_line_2, city, state, phone_number_1, phone_number_2) {
    this.id = id;
    this.user_id = user_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.address_line_1 = address_line_1;
    this.address_line_2 = address_line_2;
    this.phone_number_1 = phone_number_1;
    this.phone_number_2 = phone_number_2;
    this.state = state;
    this.city = city;
  }

  async save() {
    const [result] = await db.execute(
      'INSERT INTO addresses (user_id, first_name, last_name, address_line_1, address_line_2, city, state, phone_number_1, phone_number_2) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        this.user_id,
        this.first_name,
        this.last_name,
        this.address_line_1,
        this.address_line_2,
        this.city,
        this.state,
        this.phone_number_1, // Replace with null if phone_number_1 is undefined
        this.phone_number_2, // Replace with null if phone_number_2 is undefined
      ]
    );
    this.id = result.insertId;
  }

  static async fetchByUserId(user_id) {
    const [rows, fieldData] = await db.execute(
      'SELECT * FROM addresses WHERE user_id = ?',
      [user_id]
    );
  
    console.log('rows:', rows);
  
    return rows;
  }
  

  static async findById(user_id, address_id) {
    const [rows] = await db.execute('SELECT * FROM addresses WHERE id = ? AND user_id = ?', [address_id, user_id]);
    return rows[0];
  }

   updateById(id, user_id) {
    return db.execute(
      'UPDATE addresses SET first_name = ?, last_name = ?, address_line_1 = ?, address_line_2 = ?, city = ?, state = ?, phone_number_1 = ?, phone_number_2 = ? WHERE id = ? AND user_id = ?',
      [this.first_name,this.last_name,this.address_line_1,this.address_line_2,this.city,this.state,this.phone_number_1,this. phone_number_2, id, user_id]
    );
  }

  static async deleteById(user_id, address_id) {
    await db.execute('DELETE FROM addresses WHERE id = ? AND user_id = ?', [address_id, user_id]);
  }

  static async setDefaultAddress(user_id, address_id) {
    await db.execute('UPDATE addresses SET is_default = 0 WHERE user_id = ?', [user_id]);
        await db.execute('UPDATE addresses SET is_default = 1 WHERE id = ? AND user_id = ?', [address_id, user_id]);
  }

}

module.exports = Address;
