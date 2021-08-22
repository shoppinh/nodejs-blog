const newsRouter = require("./news");
const siteRouter = require("./site");
function route(app) {
  //Tin tuc view
  // app.get("/tin-tuc", (req, res) => {
  //   res.render("news");
  // });
  app.use("/news", newsRouter);
  //Home view
  app.use("/", siteRouter);

  //Search view
  app.use("/search", siteRouter);
}
module.exports = route;
