class SiteController {
  //Home
  index(req, res) {
    res.render("home");
  }
  //Search
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
