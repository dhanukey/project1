const jwt = require("jsonwebtoken");

let authentication = async function (req, res, next) {
  try {
    let token = req.headers["x-Api-key"];
    if (!token) token = req.headers["x-api-key"];

    if (!token) {
      res.status(401).send({ status: false, msg: "Token must be present" });
    } else {
      let decodedToken = jwt.verify(token, "project1-28");
      if (!decodedToken) {
        return res.send({ status: false, msg: "token is invalid" });
      }
      req.dataFromauthentication= decodedToken
      next();
    }
  } catch (err) {
    res.status(500).send({ msg: "Error", error: err.message });
  }
};


let authorisation = async function (req, res, next) {
  try {

    let decodedToken= req.dataFromauthentication
    
    let userToBeModified = req.params.userId;
    let userLoggedIn = decodedToken.userId;

    if (userToBeModified != userLoggedIn)

    return res.status(403).send({status: false,msg: "User logged is not allowed to modify the requested users data",});
    else next();

  } catch (err) {
    res.status(500).send({ msg: "Error", error: err.message });
  }
};

module.exports.authentication = authentication;
module.exports.authorisation = authorisation;
