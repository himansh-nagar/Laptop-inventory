const db = require("../models");

exports.getDetails =(req, res) => {
    //   console.log(req.params.id);
    const laptopId = req.params.id;
    db.laptops
        .findAll({
            raw: true,
            where: {
                id: laptopId
            }
        })
        .then(data => {
            data = data[0];
            console.log(data)
            db.maintenances
                .findAll({
                    raw: true,
                    where: {
                        laptop_id: laptopId
                    }
                })
                .then(data1 => {
                    console.log(data1)
                    db.owners
                        .findAll({
                            raw: true,
                            where: {
                                laptop_id: laptopId
                            }
                        })
                        .then(data2 => {
                            const result = {
                                data,
                                data1,
                                data2
                            }
                            // res.json(result)
                            console.log(result["data2"]);
                            res.render('laptop_detail', {
                                result
                            })
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err)
        })

    //  console.log(data);

}