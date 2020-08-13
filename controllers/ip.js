const db = require('../models');

exports.ip =  (req, res) => {
    // console.log(req.body.data);
    db.laptops
      .update(
        {
          ip: req.body.ip
        },
        {
          raw: true,
          where: { id: parseInt(req.body.id) }
        }
      )
      .then(data => {
        console.log("new IP updated");
        // res.json(data);
        res.redirect('getAdmin')
      })
      .catch(err => console.error(err));
  };