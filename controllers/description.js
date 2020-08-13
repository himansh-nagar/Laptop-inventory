const db = require('../models');

exports.description = (req, res) => {
    // console.log(req.body.data);
    db.laptops
      .update(
        {
          description: req.description
        },
        {
          raw: true,
          where: { id: parseInt(req.id) }
        }
      )
      .then(data => {
        console.log("description updated");
        res.json(data);
        res.redirect('getAdmin')
      })
      .catch(err => console.error(err));
  };
  