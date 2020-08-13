const db = require('../models');

exports.newOwner = (req, res) => {
    db.owners
        .create({
            laptop_id: req.body.id,
            owner_name: req.body.owner_name,
            date: Date.now()
        }, {
            raw: true
        })
        .then(data => {
            console.log("new owner posted");
            
            
        })
        .catch(err => console.error(err));

    // updating new owner in laptops table
    db.laptops
        .update({
            owner: req.body.owner_name
        }, {
            raw: true,
            where: {
                id: req.body.id
            }
        })
        .then(data1 => {
            console.log("new owner updated");
            res.redirect('/getAdmin')
        })
        .catch(err => console.error(err));
};