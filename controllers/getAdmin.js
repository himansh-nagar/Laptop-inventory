const db = require('../models');

exports.getAdminPage = (req, res) => {
    db.admins
      .findAll({
        raw: true
      })
      .then(data => {
        res.render("admin")
      })
      .catch(err => console.error(err));
  };