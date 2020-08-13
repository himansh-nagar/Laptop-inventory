const db = require('../models');

exports.laptopsDetails =(req, res) => {
    var detail = req.body;
    const fimage = req.file;
    const image = fimage.path;
    console.log(image);
    db.laptops
        .create({
            name: detail.name,
            owner: detail.owner,
            image: image,
            ram: detail.ram,
            rom: detail.rom,
            color: detail.color,
            mac: detail.mac,
            ip: detail.ip,
            battery: detail.battery,
            active: detail.active,
            description: detail.description
        }, {
            raw: true
        })
        .then(data => {
            console.log(detail);
            // posting owner details to owner table
            db.owners
                .create({
                    laptop_id: data.id,
                    owner_name: detail.owner,
                    date: new Date().toString()
                })
                .then(data2 => {
                    // res.json(data);
                    res.redirect('getAdmin')
                })
                .catch(err => console.error(err));
            console.log("data inserted into db");
        })
        .catch(err => console.log(err));
};

