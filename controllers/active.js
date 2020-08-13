const db = require('../models');

exports.activeStatus  = (req, res) => {
    db.laptops
      .update(
        {
          active: req.body.active
        },
        {
          raw: true,
          where: { id: req.body.id }
        }
      )
      .then(data => {
        console.log("active status updated");
        // res.json(data);
        res.redirect('getAdmin')
      })
      .catch(err => console.error(err));
  };