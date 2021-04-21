const admin = require("firebase-admin");

const serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

/*let authorized = false;

exports.authCheck  = (req, res, next = (f) => f) => {
    if (authorized) {
        next();
    } else {
        throw new Error("Unauthorized");
    }
};*/

// helper authentication
