const generateResponse = require("../utils/response-generator");
const urlHelper = require("../helpers/urlHelper");
const userRoutes = require("./user-route");
const handleRoutes = (req, res) => {
  const { url } = req;

  let newUrl = `/${url.split("/")[1]}`;
  console.log(newUrl);
  switch (newUrl) {
    case urlHelper.DEFAULT_ENDPOINT:
      console.log("first");
      break;
    case urlHelper.USER_ENDPOINT:
      userRoutes.handleUserRoutes(req, res);
      break;
    default:
      generateResponse(404, res, { message: "Not found" });
  }
};
module.exports = { handleRoutes };
