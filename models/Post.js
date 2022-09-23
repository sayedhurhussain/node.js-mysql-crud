const db = require("../config/db");
const { deletePost } = require("../controllers/postControllers");

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;

    let sql = `
    INSERT INTO posts(
      title,
      body,
      created_at
    )
    VALUES(
      '${this.title}',
      '${this.body}',
      '${createdAtDate}'
    )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM posts;";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM posts WHERE id = ${id};`;

    return db.execute(sql);
  }

  static delete(id) {
    let sql = `DELETE FROM posts WHERE id = ${id};`;

    return db.execute(sql);
  }

  static update(id) {
    // let id = req.params.id;
    let title = req.params.title;
    let body = req.params.body;
    let sql = `UPDATE posts SET title = '${title}', body = '${body}' WHERE id = ${id};`;
    return db.execute(sql);
  }

}

module.exports = Post;
