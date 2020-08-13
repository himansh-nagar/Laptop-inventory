const db = require('../models');

exports.mac = (req, res) => {
    console.log(req.body);
    db.laptops
      .update(
        {
          mac: req.body.mac
        },
        {
          raw: true,
          where: { id: parseInt(req.body.id) }
        }
      )
      .then(data => {
        console.log("new Mac updated");
        
        res.redirect('getAdmin')
      })
      .catch(err => console.error(err));
  };