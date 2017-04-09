const express = require('express');
const router = express.Router();
const Cryptr = require('cryptr');

var variable = "9{nPy413xs1)*qi9rIt%6327rR2mHq";
var cryptr = new Cryptr(variable);

// var admin = require("firebase-admin");

// var serviceAccount = require("../../viven-health-7f33c-firebase-adminsdk-r8tun-5184a80532.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://viven-health-7f33c.firebaseio.com"
// });

// // As an admin, the app has access to read and write all data, regardless of Security Rules
// var db = admin.database();
// var ref = db.ref("/users");

// ref.once("value", function(snapshot) {
//     console.log(snapshot.val());
// });

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

/* POST api listing. */
router.post('/getUser', function(req, res, next) {
    // var userToMatch = req.body.email;
    var userToReturn = {};
    // // console.log(req.body);
    // //return back the userData that matches the email address
    // for (var i = 0; i < allUserObjects.length; i++) {
    //     if (userToMatch === allUserObjects[i].email) {
    //         userToReturn = allUserObjects[i];
    //         break;
    //     }
    // }

    // console.log(userToMatch);
    // //res.json(200, userInfo);
    console.log(req.body);

    res.status(200).json(userToReturn);
});

router.post('/getVar', function(req, res, next) {
    console.log("user_id is: " + req.body.id);
    var encryptedVar = cryptr.encrypt(req.body.id);
    console.log("encrypted user_id is: " + encryptedVar);
    res.status(200).json({ id: encryptedVar });
});

router.post('/getDecryptedVar', function(req, res, next) {
    console.log("encrypted user_id is: " + req.body.id);
    var decryptedVar = cryptr.decrypt(req.body.id);
    console.log("user_id is: " + decryptedVar);
    res.status(200).json({ id: decryptedVar });
});

module.exports = router;