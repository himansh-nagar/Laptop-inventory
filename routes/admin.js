const express = require('express');

const router = express.Router();

const db = require('../models');

const getAdminController = require('../controllers/getAdmin');
const laptopDetailsController = require('../controllers/laptopDetails');
const newOwnerController = require('../controllers/newOwner');
const newAdminController = require('../controllers/newAdmin');
const deleteAdminController = require('../controllers/deleteAdmin');
const maintenanceControllerr  =require('../controllers/maintenance');
const activeController = require('../controllers/active');
const batteryController = require('../controllers/battery');
const descriptionController = require('../controllers/description')
const macController = require('../controllers/mac');
const ipControllerr = require('../controllers/ip')

// get admin page
router.get("/getAdmin",getAdminController.getAdminPage );


// endpoint to post new laptop details (controler)
router.post("/laptop_details",laptopDetailsController.laptopsDetails );

// post method to post new owner and update new owner
router.post("/newOwner",newOwnerController.newOwner );


// post new Admin
router.post("/newAdmin",newAdminController.newAdmin );


// delete Admin
router.post("/removeAdmin",deleteAdminController.deleteAdmin );


// post method to add new maintenance details
router.post("/postMaintenance", maintenanceControllerr.maintenance);

// post method to update active status
router.post("/updateActiveStatus",activeController.activeStatus);



// post method to update battery status
router.post("/updateBatteryStatus", batteryController.battery);


// update description
router.post("/updateDescription", descriptionController.description);

// update Mac Address
router.post("/newMac",macController.mac );

// update IP Address
router.post("/newIP",ipControllerr.ip);

// // post method to decode token 
// app.post("/verifyToken", (req, res) => {
//     // you have to add yor google client id to decode the google token
//     const client = new OAuth2Client(
//       "967857975367-jub8m2slcbggvqhp6hbepaodsadavsoc.apps.googleusercontent.com"
//     );
//     async function verify() {
//       const ticket = await client.verifyIdToken({
//         idToken: req.body.token,
//         audience:
//           "967857975367-jub8m2slcbggvqhp6hbepaodsadavsoc.apps.googleusercontent.com"
//       });
//       const payload = ticket.getPayload();
//       const userid = payload["email"];
//       // write your code here--------
//       db.admins
//         .findAll({
//           raw: true,
//           where: { email: userid }
//         })
//         .then(data => {
//           if (data.length > 0 || userid === 'himanshu19@navgurukul.org') {
//             console.log("login successfull");
//             res.json(data);
//           } else {
//             res.json("err");
//           }
//         })
//         .catch(err => console.error(err));
//     }
//     verify().catch(console.error);
//   });


// // check the token for expire
// app.post("/checkToken", (req, res) => {
//     const client = new OAuth2Client(
//       "967857975367-jub8m2slcbggvqhp6hbepaodsadavsoc.apps.googleusercontent.com"
//     );
//     async function verify() {
//       const ticket = await client.verifyIdToken({
//         idToken: req.body.token,
//         audience:
//           "967857975367-jub8m2slcbggvqhp6hbepaodsadavsoc.apps.googleusercontent.com"
//       });
//       const payload = ticket.getPayload();
//       const userid = payload["email"];
//       res.json(userid);
//     }
//     verify().catch(console.error);
//   });



module.exports = router;