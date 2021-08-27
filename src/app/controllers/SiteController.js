const Course = require("../models/Course");

class SiteController {
  //Home
  async index(req, res) {
    try {
      const courses = await Course.find();
      console.log(courses);
      res.json(courses);
    } catch (err) {
      next(err);
    }
  }
  //Search
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
