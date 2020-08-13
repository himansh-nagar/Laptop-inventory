const db = require('../models');

exports.newAdmin =(req, res) => {
    db.admins
      .create({
        email: req.email
      })
      .then(data => {
        console.log("admin updated");
        // res.json("admin updated");
        res.redirect('getAdmin')
      })
      .catch(err => console.error(err));
  };