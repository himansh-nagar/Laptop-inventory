
const db = require("../models");

exports.getHome = (req, res) => {
    db.laptops
      .findAll({
        raw: true
      })
      .then(data => {
        // res.json(data);
        console.log(data)
        res.render("laptops_home",{data})
      })
      .catch(err => console.error(err));

  }
