const db = require('../models');

exports.deleteAdmin = (req, res) => {
    if (req.body.email !== "himanshu19@navgurukul.org") {
      db.admins
        .destroy(
          {
            where: { email: req.body.email }
          },
          { raw: true }
        )
        .then(data => {
          console.log("admin removed");
          // res.json(data);
          res.redirect('getAdmin')
        })
        .catch(err => console.error(err));
    } else {
      res.json("err");
    }
  };