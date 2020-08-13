const db = require('../models');

exports.maintenance= (req, res) => {
    const reqdata = req.body;
    console.log(reqdata)
    db.maintenances
      .create(
        {
          'laptop_id': reqdata.laptop_id,
          'date': Date(),
          'owner': reqdata.owner,
          'status': reqdata.status,
          'description': reqdata.description
        },
        { raw: true }
      )
      .then(data => {
        console.log("data posted in maintenance table ");
        // res.json(data);
        res.redirect('getAdmin')
      })
      .catch(err => console.error(err));
  };