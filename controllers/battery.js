const db = require('../models');

exports.battery = (req, res) => {
    db.laptops
      .update(
        {
          battery: req.body.battery
        },
        {
          raw: true,
          where: { id: req.body.id }
        }
      )
      .then(data => {
        console.log("battery status updated");
        // res.json(data);
        res.redirect('getAdmin')
      })
      .catch(err => console.error(err));
  };