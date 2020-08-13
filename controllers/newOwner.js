const db = require('../models');

exports.newOwner = (req, res) => {
    console.log(req.body.laptop_id)
    db.owners
        .create({
            'laptop_id': req.body.laptop_id,
            'owner_name': req.body.owner_name,
            'date': Date()
        }, {
            raw: true
        })
        .then(data => {
            console.log("new owner posted");
            res.json(data);
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
            console.log("data1  ");
            res.redirect('/getAdmin')
            
        })
        .catch(err => console.error(err));
};